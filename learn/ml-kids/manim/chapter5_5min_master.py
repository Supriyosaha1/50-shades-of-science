#!/usr/bin/env python3
"""
Chapter 5: Mistakes and Learning — Full 5-Minute Masterclass (~300 Seconds)
Scientific, minimalist whiteboard animation for school students (Classes 5 to 10).
Rich with simple visual examples: Measuring errors, Error squares, The loss bowl, Rolling marble, Learning rate step size.
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


class Chapter5FiveMinuteMaster(Scene):
    def construct(self):
        # ---------------------------------------------------------------------
        # PART 1: WHY DO PREDICTIONS MAKE MISTAKES? (0:00 - 0:55) ~ 55 seconds
        # ---------------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 5 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.45)

        title = Text("Why Do Predictions Make Mistakes?", font_size=36, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.25)
        sub = Text("Real life has noise and surprises — no model is born knowing the perfect rule!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(11.6)

        # Real life variance example: 3 students of exact same age (11 years)
        card_p1 = RoundedRectangle(corner_radius=0.25, height=3.4, width=9.6, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(DOWN * 0.5)
        cp1_t = Text("👧 Variation in the Real World: Same Age, Different Heights!", font_size=17, color=COLOR_TITLE, weight=BOLD).move_to(card_p1.get_top() + DOWN * 0.4)

        s1 = Text("• Priya (Age 11): Height = 142 cm", font_size=15, color=COLOR_BODY).next_to(cp1_t, DOWN, buff=0.3, aligned_edge=LEFT).shift(LEFT * 2.8)
        s2 = Text("• Dev (Age 11): Height = 150 cm", font_size=15, color=COLOR_BODY).next_to(s1, DOWN, buff=0.2, aligned_edge=LEFT)
        s3 = Text("• Anya (Age 11): Height = 138 cm", font_size=15, color=COLOR_BODY).next_to(s2, DOWN, buff=0.2, aligned_edge=LEFT)

        rbox = RoundedRectangle(corner_radius=0.2, height=2.0, width=3.6, fill_color="#F1F5F9", fill_opacity=1.0, stroke_color="#CBD5E1", stroke_width=1).move_to(card_p1.get_right() + LEFT * 2.2 + DOWN * 0.2)
        rt1 = Text("Natural Noise", font_size=14, color=COLOR_MUTED, weight=BOLD).move_to(rbox.get_top() + DOWN * 0.35)
        rt2 = Text("Even if model predicts\n145 cm, it will have\nsmall errors on each!", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(rt1, DOWN, buff=0.15)
        g_rbox = VGroup(rbox, rt1, rt2)

        g_p1 = VGroup(card_p1, cp1_t, s1, s2, s3, g_rbox)
        self.play(FadeOut(sub), FadeIn(g_p1, shift=UP*0.3), run_time=1.5)
        self.wait(26.0)

        # ---------------------------------------------------------------------
        # PART 2: MEASURING ERROR (THE GAP) (0:55 - 1:50) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p2 = Text("Measuring a Single Mistake (Error)", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p2), FadeOut(g_p1), run_time=1.2)

        p2_sub = Text("Error = Model Guess minus Actual Truth", font_size=18, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p2_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.7)

        err_card1 = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        ec1_t = Text("Dev's Height", font_size=16, color=COLOR_BLUE, weight=BOLD).move_to(err_card1.get_top() + DOWN * 0.35)
        ec1_1 = Text("• Model Guess: 145 cm", font_size=14, color=COLOR_BODY).next_to(ec1_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.5)
        ec1_2 = Text("• Actual Truth: 150 cm", font_size=14, color=COLOR_BODY).next_to(ec1_1, DOWN, buff=0.2, aligned_edge=LEFT)
        ec1_3 = Text("• Gap: 145 - 150 = -5 cm", font_size=14, color=COLOR_RED, weight=BOLD).next_to(ec1_2, DOWN, buff=0.2, aligned_edge=LEFT)
        ec1_sq = Text("• Squared: (-5)² = 25 cm²", font_size=14, color=COLOR_GREEN, weight=BOLD).next_to(ec1_3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_ec1 = VGroup(err_card1, ec1_t, ec1_1, ec1_2, ec1_3, ec1_sq)

        err_card2 = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(RIGHT * 2.8 + DOWN * 0.5)
        ec2_t = Text("Why Do We Square?", font_size=16, color=COLOR_RED, weight=BOLD).move_to(err_card2.get_top() + DOWN * 0.35)
        ec2_1 = Text("If one mistake is +5 cm", font_size=13, color=COLOR_BODY).next_to(ec2_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.5)
        ec2_2 = Text("and another is -5 cm,", font_size=13, color=COLOR_BODY).next_to(ec2_1, DOWN, buff=0.15, aligned_edge=LEFT)
        ec2_3 = Text("their simple sum is ZERO!", font_size=14, color=COLOR_RED, weight=BOLD).next_to(ec2_2, DOWN, buff=0.15, aligned_edge=LEFT)
        ec2_4 = Text("✨ Squaring turns negatives\npositive, so mistakes\nnever cancel out!", font_size=13, color=COLOR_GREEN, line_spacing=1.2).next_to(ec2_3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_ec2 = VGroup(err_card2, ec2_t, ec2_1, ec2_2, ec2_3, ec2_4)

        self.play(FadeIn(g_ec1, shift=LEFT*0.3), run_time=1.5)
        self.wait(14.5)
        self.play(FadeIn(g_ec2, shift=RIGHT*0.3), run_time=1.5)
        self.wait(26.0)

        # ---------------------------------------------------------------------
        # PART 3: THE TOTAL LOSS BOWL (1:50 - 2:45) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p3 = Text("The Loss Valley (Total Error Bowl)", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p3), FadeOut(g_ec1), FadeOut(g_ec2), FadeOut(p2_sub), run_time=1.2)

        p3_sub = Text("When we plot Total Error against different model guesses, it forms a smooth U-shaped bowl!", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p3_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.7)

        axes = Axes(
            x_range=[-3, 3, 1],
            y_range=[0, 9, 2],
            x_length=6.0,
            y_length=3.5,
            axis_config={"color": COLOR_MUTED, "stroke_width": 2},
            tips=False
        ).move_to(DOWN * 0.5 + LEFT * 1.5)

        ax_x = Text("Model Guess Setting (Weight) →", font_size=13, color=COLOR_BODY).next_to(axes.x_axis, DOWN, buff=0.2)
        ax_y = Text("Total Mistake (Loss) ↑", font_size=13, color=COLOR_BODY).next_to(axes.y_axis, LEFT, buff=0.2).rotate(PI/2)

        # Parabola curve: y = x^2
        parabola = axes.plot(lambda x: x**2, x_range=[-2.8, 2.8], color=COLOR_BLUE, stroke_width=3.5)
        opt_dot = Dot(axes.c2p(0, 0), radius=0.12, color=COLOR_GREEN)
        opt_lbl = Text("Target Minimum\n(Zero Error)", font_size=12, color=COLOR_GREEN, weight=BOLD, line_spacing=1.1).next_to(opt_dot, DOWN, buff=0.2)

        bowl_card = RoundedRectangle(corner_radius=0.2, height=3.0, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(RIGHT * 3.8 + DOWN * 0.5)
        bt = Text("The Bowl Landscape", font_size=15, color=COLOR_TITLE, weight=BOLD).move_to(bowl_card.get_top() + DOWN * 0.35)
        bt1 = Text("• High up the sides =\n  Huge mistakes!", font_size=13, color=COLOR_RED, line_spacing=1.2).next_to(bt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        bt2 = Text("• Bottom of the bowl =\n  Smallest possible error.", font_size=13, color=COLOR_GREEN, line_spacing=1.2).next_to(bt1, DOWN, buff=0.2, aligned_edge=LEFT)
        bt3 = Text("• How do we reach the bottom?", font_size=13, color=COLOR_BODY).next_to(bt2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_bowl = VGroup(bowl_card, bt, bt1, bt2, bt3)

        self.play(Create(axes), Write(ax_x), Write(ax_y), run_time=1.5)
        self.play(Create(parabola), GrowFromCenter(opt_dot), Write(opt_lbl), FadeIn(g_bowl, shift=LEFT*0.3), run_time=1.8)
        self.wait(26.0)

        # ---------------------------------------------------------------------
        # PART 4: GRADIENT DESCENT (ROLLING DOWN THE BOWL) (2:45 - 3:35) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p4 = Text("Gradient Descent: Rolling Downhill", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p4), FadeOut(g_bowl), FadeOut(p3_sub), run_time=1.2)

        p4_sub = Text("Imagine a marble starting high up the bowl. It checks which way slopes downward!", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p4_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.7)

        # Marble at x = 2.4, y = 5.76
        marble = Dot(axes.c2p(2.4, 2.4**2), radius=0.16, color=COLOR_AMBER)
        m_lbl = Text("Start (Big Error)", font_size=13, color=COLOR_AMBER, weight=BOLD).next_to(marble, UP, buff=0.15)
        self.play(GrowFromCenter(marble), FadeIn(m_lbl), run_time=1.2)
        self.wait(5.8)

        # Step 1: x = 1.6
        pos_s1 = axes.c2p(1.6, 1.6**2)
        arrow1 = Arrow(marble.get_center(), pos_s1, color=COLOR_AMBER, stroke_width=3, buff=0.1)
        self.play(Create(arrow1), marble.animate.move_to(pos_s1), FadeOut(m_lbl), run_time=1.5)
        self.wait(7.2)

        # Step 2: x = 0.8
        pos_s2 = axes.c2p(0.8, 0.8**2)
        arrow2 = Arrow(marble.get_center(), pos_s2, color=COLOR_AMBER, stroke_width=3, buff=0.1)
        self.play(Create(arrow2), marble.animate.move_to(pos_s2), run_time=1.5)
        self.wait(7.2)

        # Step 3: reaches near zero (x = 0.1)
        pos_s3 = axes.c2p(0.1, 0.01)
        arrow3 = Arrow(marble.get_center(), pos_s3, color=COLOR_GREEN, stroke_width=3, buff=0.1)
        win_txt = Text("Minimum Reached! 🎉", font_size=13, color=COLOR_GREEN, weight=BOLD).next_to(pos_s3, UP, buff=0.2)
        self.play(Create(arrow3), marble.animate.move_to(pos_s3), FadeIn(win_txt), run_time=1.5)
        self.wait(23.1)

        # ---------------------------------------------------------------------
        # PART 5: LEARNING RATE — BIG VS SMALL STEPS (3:35 - 4:25) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p5 = Text("Learning Rate: Taking the Right Step Size", font_size=32, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p5),
            FadeOut(axes), FadeOut(ax_x), FadeOut(ax_y),
            FadeOut(parabola), FadeOut(opt_dot), FadeOut(opt_lbl),
            FadeOut(marble), FadeOut(arrow1), FadeOut(arrow2), FadeOut(arrow3), FadeOut(win_txt), FadeOut(p4_sub),
            run_time=1.5
        )

        p5_sub = Text("The Learning Rate controls how far we step down the slope in each turn", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p5_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.7)

        # 3 Cases: Too Big, Too Small, Just Right
        box_big = RoundedRectangle(corner_radius=0.2, height=3.3, width=3.3, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(LEFT * 3.8 + DOWN * 0.5)
        bb_t = Text("💥 Step Too Big", font_size=15, color=COLOR_RED, weight=BOLD).move_to(box_big.get_top() + DOWN * 0.35)
        bb_1 = Text("• Leaps right over\n  the bottom!", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(bb_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.2)
        bb_2 = Text("• Lands higher up\n  on the other side.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(bb_1, DOWN, buff=0.2, aligned_edge=LEFT)
        bb_3 = Text("• Model explodes!", font_size=13, color=COLOR_RED, weight=BOLD).next_to(bb_2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_big = VGroup(box_big, bb_t, bb_1, bb_2, bb_3)

        box_small = RoundedRectangle(corner_radius=0.2, height=3.3, width=3.3, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FDE68A", stroke_width=2).move_to(DOWN * 0.5)
        bs_t = Text("🐌 Step Too Small", font_size=15, color=COLOR_AMBER, weight=BOLD).move_to(box_small.get_top() + DOWN * 0.35)
        bs_1 = Text("• Crawls like a snail\n  by millimeters.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(bs_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.2)
        bs_2 = Text("• Takes hours or\n  days to finish.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(bs_1, DOWN, buff=0.2, aligned_edge=LEFT)
        bs_3 = Text("• Extremely slow!", font_size=13, color=COLOR_AMBER, weight=BOLD).next_to(bs_2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_small = VGroup(box_small, bs_t, bs_1, bs_2, bs_3)

        box_right = RoundedRectangle(corner_radius=0.2, height=3.3, width=3.3, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#86EFAC", stroke_width=2).move_to(RIGHT * 3.8 + DOWN * 0.5)
        br_t = Text("✨ Just Right", font_size=15, color=COLOR_GREEN, weight=BOLD).move_to(box_right.get_top() + DOWN * 0.35)
        br_1 = Text("• Confident steady\n  steps downhill.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(br_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.2)
        br_2 = Text("• Glides smoothly\n  into the minimum.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(br_1, DOWN, buff=0.2, aligned_edge=LEFT)
        br_3 = Text("• Fast & accurate!", font_size=13, color=COLOR_GREEN, weight=BOLD).next_to(br_2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_right = VGroup(box_right, br_t, br_1, br_2, br_3)

        self.play(FadeIn(g_big, shift=UP*0.2), FadeIn(g_small, shift=UP*0.2), FadeIn(g_right, shift=UP*0.2), run_time=1.8)
        self.wait(28.9)

        # ---------------------------------------------------------------------
        # PART 6: SUMMARY & CHAPTER 6 TEASER (4:25 - 5:05) ~ 40 seconds
        # ---------------------------------------------------------------------
        title_p6 = Text("Summary: How Computers Learn from Mistakes", font_size=32, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p6),
            FadeOut(g_big), FadeOut(g_small), FadeOut(g_right), FadeOut(p5_sub),
            run_time=1.5
        )

        sum_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(DOWN * 0.6)
        s1 = Text("1. Error measures the difference between what was predicted and the truth.", font_size=15, color=COLOR_BODY).move_to(sum_card.get_top() + DOWN * 0.6 + LEFT * 0.3)
        s2 = Text("2. Squaring errors ensures positive and negative gaps don't cancel each other out.", font_size=15, color=COLOR_BODY).next_to(s1, DOWN, buff=0.25, aligned_edge=LEFT)
        s3 = Text("3. Gradient Descent is the mathematical trick of rolling downhill toward zero error.", font_size=15, color=COLOR_BODY).next_to(s2, DOWN, buff=0.25, aligned_edge=LEFT)
        s4 = Text("4. The Learning Rate controls the step size taken down the hill.", font_size=15, color=COLOR_BODY).next_to(s3, DOWN, buff=0.25, aligned_edge=LEFT)

        next_ch = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.2, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=1.5).next_to(s4, DOWN, buff=0.35).set_x(sum_card.get_x())
        next_txt = Text("📚 Up Next in Chapter 6: Training and Testing — Memorizing vs True Understanding!", font_size=13, color="#1D4ED8", weight=BOLD).move_to(next_ch)

        g_sum = VGroup(sum_card, s1, s2, s3, s4, next_ch, next_txt)
        self.play(FadeIn(g_sum, shift=UP*0.25), run_time=1.5)
        self.wait(31.8)

