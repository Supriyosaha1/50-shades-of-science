#!/usr/bin/env python3
"""
Chapter 6: Training and Testing — Full 5-Minute Masterclass (~300 Seconds)
Scientific, minimalist whiteboard animation for school students (Classes 5 to 10).
Rich with simple visual examples: Practice Homework vs Final Exam, Train/Test split safe, Overfitting wiggly snake, Underfitting stick, Just-right curve.
"""

from manim import *

config.background_color = "#F8FAFC"
config.pixel_width = 1280
config.pixel_height = 720
config.frame_rate = 30

COLOR_TITLE = "#0F172A"
COLOR_BODY = "#334155"
COLOR_MUTED = "#64748B"
COLOR_BLUE = "#2563EB"
COLOR_GREEN = "#059669"
COLOR_AMBER = "#D97706"
COLOR_ORANGE = "#EA580C"
COLOR_RED = "#DC2626"
COLOR_PURPLE = "#7C3AED"
COLOR_CARD = "#FFFFFF"
COLOR_BORDER = "#CBD5E1"


class Chapter6FiveMinuteMaster(Scene):
    def construct(self):
        # ---------------------------------------------------------------------
        # PART 1: THE EXAM ANALOGY (0:00 - 0:55) ~ 55 seconds
        # ---------------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 6 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.45)

        title = Text("Training vs Testing", font_size=36, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.25)
        sub = Text("Memorizing the practice answers vs truly understanding the concept!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(13.0)

        c1 = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        c1_t = Text("Student A: The Memorizer 🧠", font_size=16, color=COLOR_RED, weight=BOLD).move_to(c1.get_top() + DOWN * 0.35)
        c1_1 = Text("• Memorizes exact practice:", font_size=14, color=COLOR_BODY).next_to(c1_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        c1_2 = Text("  'Q3 answer is always 42!'", font_size=13, color=COLOR_MUTED).next_to(c1_1, DOWN, buff=0.15, aligned_edge=LEFT)
        c1_3 = Text("• Practice Score: 100% 🎯", font_size=14, color=COLOR_GREEN, weight=BOLD).next_to(c1_2, DOWN, buff=0.2, aligned_edge=LEFT)
        c1_4 = Text("• On Real Exam: Fails! ❌\n  Numbers were changed!", font_size=13, color=COLOR_RED, line_spacing=1.2).next_to(c1_3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_c1 = VGroup(c1, c1_t, c1_1, c1_2, c1_3, c1_4)

        c2 = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#86EFAC", stroke_width=2).move_to(RIGHT * 2.8 + DOWN * 0.5)
        c2_t = Text("Student B: The Understander 💡", font_size=16, color=COLOR_GREEN, weight=BOLD).move_to(c2.get_top() + DOWN * 0.35)
        c2_1 = Text("• Learns the underlying rule:", font_size=14, color=COLOR_BODY).next_to(c2_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        c2_2 = Text("  'Area = Length × Width'", font_size=13, color=COLOR_MUTED).next_to(c2_1, DOWN, buff=0.15, aligned_edge=LEFT)
        c2_3 = Text("• Practice Score: 95% ✨", font_size=14, color=COLOR_BODY).next_to(c2_2, DOWN, buff=0.2, aligned_edge=LEFT)
        c2_4 = Text("• On Real Exam: A+! 🎉\n  Solves new questions easily!", font_size=13, color=COLOR_GREEN, line_spacing=1.2).next_to(c2_3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_c2 = VGroup(c2, c2_t, c2_1, c2_2, c2_3, c2_4)

        self.play(FadeIn(g_c1, shift=LEFT*0.3), FadeIn(g_c2, shift=RIGHT*0.3), run_time=1.5)
        self.wait(32.6)

        # ---------------------------------------------------------------------
        # PART 2: SPLITTING DATA (TRAIN VS TEST) (0:55 - 1:50) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p2 = Text("Splitting Data: Training Set & Test Set", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p2), FadeOut(g_c1), FadeOut(g_c2), FadeOut(sub), run_time=1.2)

        p2_sub = Text("We divide all our data so the model has an untouched exam to prove it really learned!", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p2_sub, shift=UP*0.2), run_time=1.0)
        self.wait(9.8)

        # 100 examples bar split: 80% Train, 20% Test
        bar_train = RoundedRectangle(corner_radius=0.15, height=1.2, width=6.8, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=2).move_to(LEFT * 1.6 + DOWN * 0.2)
        bt_txt = Text("📚 Training Data (80%)\nUsed to teach the model", font_size=14, color="#1D4ED8", weight=BOLD, line_spacing=1.2).move_to(bar_train)
        g_bt = VGroup(bar_train, bt_txt)

        bar_test = RoundedRectangle(corner_radius=0.15, height=1.2, width=2.4, fill_color="#FEF3C7", fill_opacity=1.0, stroke_color="#F59E0B", stroke_width=2).next_to(bar_train, RIGHT, buff=0.2)
        btest_txt = Text("🔒 Test Set (20%)\nLocked in a safe!", font_size=13, color="#B45309", weight=BOLD, line_spacing=1.2).move_to(bar_test)
        g_btest = VGroup(bar_test, btest_txt)

        rule_card = RoundedRectangle(corner_radius=0.2, height=1.6, width=9.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(DOWN * 1.8)
        rc_t = Text("🛡️ The Golden Rule of Machine Learning:", font_size=15, color=COLOR_TITLE, weight=BOLD).move_to(rule_card.get_top() + DOWN * 0.35)
        rc_1 = Text("NEVER let the model see the Test Set while training! It must be a complete blind surprise.", font_size=13, color=COLOR_BODY).next_to(rc_t, DOWN, buff=0.2)
        g_rc = VGroup(rule_card, rc_t, rc_1)

        self.play(FadeIn(g_bt, shift=LEFT*0.3), FadeIn(g_btest, shift=RIGHT*0.3), run_time=1.5)
        self.wait(13.0)
        self.play(FadeIn(g_rc, shift=UP*0.2), run_time=1.2)
        self.wait(29.3)

        # ---------------------------------------------------------------------
        # PART 3: OVERFITTING — THE WIGGLY SNAKE (1:50 - 2:45) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p3 = Text("Overfitting: The Overly Wiggly Curve", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p3), FadeOut(g_bt), FadeOut(g_btest), FadeOut(g_rc), FadeOut(p2_sub), run_time=1.2)

        p3_sub = Text("When a model tries TOO hard to connect every noisy speck of dust, it creates a monster!", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p3_sub, shift=UP*0.2), run_time=1.0)
        self.wait(9.8)

        axes = Axes(
            x_range=[0, 10, 2],
            y_range=[0, 10, 2],
            x_length=6.0,
            y_length=3.5,
            axis_config={"color": COLOR_MUTED, "stroke_width": 2},
            tips=False
        ).move_to(DOWN * 0.5 + LEFT * 1.5)

        # Data points with noise
        train_pts = [(1, 2.5), (3, 4.0), (4.5, 3.2), (6, 6.5), (7.5, 5.8), (9, 8.5)]
        dots_tr = VGroup(*[Dot(axes.c2p(x, y), radius=0.12, color=COLOR_BLUE) for x, y in train_pts])

        # Wildly oscillating polynomial curve
        wiggly_curve = axes.plot(
            lambda x: 2.5 + 0.6*x + 1.2*np.sin(2.2*(x - 1)),
            x_range=[0.5, 9.5],
            color=COLOR_RED,
            stroke_width=3
        )

        over_card = RoundedRectangle(corner_radius=0.2, height=3.0, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(RIGHT * 3.8 + DOWN * 0.5)
        ot = Text("Overfitting Flaw", font_size=15, color=COLOR_RED, weight=BOLD).move_to(over_card.get_top() + DOWN * 0.35)
        ot1 = Text("• Training Error = 0%\n  (touches every dot!)", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(ot, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        ot2 = Text("• Test Error = Terrible!\n  Wild spikes between dots.", font_size=13, color=COLOR_RED, line_spacing=1.2).next_to(ot1, DOWN, buff=0.2, aligned_edge=LEFT)
        ot3 = Text("• Memorized noise!", font_size=13, color=COLOR_MUTED).next_to(ot2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_over = VGroup(over_card, ot, ot1, ot2, ot3)

        self.play(Create(axes), FadeIn(dots_tr), run_time=1.5)
        self.play(Create(wiggly_curve), FadeIn(g_over, shift=LEFT*0.3), run_time=1.8)
        self.wait(29.3)

        # ---------------------------------------------------------------------
        # PART 4: UNDERFITTING — THE RIGID PLANK (2:45 - 3:35) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p4 = Text("Underfitting: A Line That Is Too Simple", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p4), FadeOut(wiggly_curve), FadeOut(g_over), FadeOut(p3_sub), run_time=1.2)

        p4_sub = Text("When a model is too stubborn and simple, it misses the pattern completely!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p4_sub, shift=UP*0.2), run_time=1.0)
        self.wait(9.8)

        # Flat horizontal line
        flat_line = Line(axes.c2p(0.5, 4.5), axes.c2p(9.5, 4.5), color=COLOR_AMBER, stroke_width=3)

        under_card = RoundedRectangle(corner_radius=0.2, height=3.0, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FDE68A", stroke_width=2).move_to(RIGHT * 3.8 + DOWN * 0.5)
        ut = Text("Underfitting Flaw", font_size=15, color=COLOR_AMBER, weight=BOLD).move_to(under_card.get_top() + DOWN * 0.35)
        ut1 = Text("• Model is too rigid.", font_size=13, color=COLOR_BODY).next_to(ut, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        ut2 = Text("• Doesn't even fit the\n  training homework!", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(ut1, DOWN, buff=0.2, aligned_edge=LEFT)
        ut3 = Text("• High training error\n  + High test error!", font_size=13, color=COLOR_RED, line_spacing=1.2).next_to(ut2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_under = VGroup(under_card, ut, ut1, ut2, ut3)

        self.play(Create(flat_line), FadeIn(g_under, shift=LEFT*0.3), run_time=1.5)
        self.wait(29.3)

        # ---------------------------------------------------------------------
        # PART 5: JUST RIGHT — BALANCED GENERALIZATION (3:35 - 4:25) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p5 = Text("The Goldilocks Fit: Just Right!", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p5), FadeOut(flat_line), FadeOut(g_under), FadeOut(p4_sub), run_time=1.2)

        p5_sub = Text("A gentle, smooth trendline captures the true pattern and succeeds on the test exam!", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p5_sub, shift=UP*0.2), run_time=1.0)
        self.wait(9.8)

        # Gentle smooth line
        good_line = Line(axes.c2p(0.5, 1.8), axes.c2p(9.5, 8.8), color=COLOR_GREEN, stroke_width=3.5)

        good_card = RoundedRectangle(corner_radius=0.2, height=3.0, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#86EFAC", stroke_width=2).move_to(RIGHT * 3.8 + DOWN * 0.5)
        gt = Text("Generalization ✨", font_size=15, color=COLOR_GREEN, weight=BOLD).move_to(good_card.get_top() + DOWN * 0.35)
        gt1 = Text("• Follows the true slope.", font_size=13, color=COLOR_BODY).next_to(gt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        gt2 = Text("• Ignores minor bumps\n  and measurement noise.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(gt1, DOWN, buff=0.2, aligned_edge=LEFT)
        gt3 = Text("• Performs great on\n  NEW test examples!", font_size=13, color=COLOR_GREEN, weight=BOLD, line_spacing=1.2).next_to(gt2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_good = VGroup(good_card, gt, gt1, gt2, gt3)

        self.play(Create(good_line), FadeIn(g_good, shift=LEFT*0.3), run_time=1.5)
        self.wait(29.3)

        # ---------------------------------------------------------------------
        # PART 6: SUMMARY & CHAPTER 7 TEASER (4:25 - 5:05) ~ 40 seconds
        # ---------------------------------------------------------------------
        title_p6 = Text("Summary: Training and Testing", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p6),
            FadeOut(axes), FadeOut(dots_tr), FadeOut(good_line), FadeOut(g_good), FadeOut(p5_sub),
            run_time=1.5
        )

        sum_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(DOWN * 0.6)
        s1 = Text("1. Always split data into Training (practice) and Testing (exam).", font_size=15, color=COLOR_BODY).move_to(sum_card.get_top() + DOWN * 0.6 + LEFT * 0.5)
        s2 = Text("2. Overfitting happens when a model memorizes noise and fails on new data.", font_size=15, color=COLOR_BODY).next_to(s1, DOWN, buff=0.25, aligned_edge=LEFT)
        s3 = Text("3. Underfitting happens when a model is too rigid to see the real relationship.", font_size=15, color=COLOR_BODY).next_to(s2, DOWN, buff=0.25, aligned_edge=LEFT)
        s4 = Text("4. The true goal of Machine Learning is Generalization — solving unseen examples!", font_size=15, color=COLOR_BODY).next_to(s3, DOWN, buff=0.25, aligned_edge=LEFT)

        next_ch = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.2, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=1.5).next_to(s4, DOWN, buff=0.35).set_x(sum_card.get_x())
        next_txt = Text("✨ Up Next in Chapter 7: Learning Without Answers — Clustering mystery data!", font_size=13, color="#1D4ED8", weight=BOLD).move_to(next_ch)

        g_sum = VGroup(sum_card, s1, s2, s3, s4, next_ch, next_txt)
        self.play(FadeIn(g_sum, shift=UP*0.25), run_time=1.5)
        self.wait(35.9)

