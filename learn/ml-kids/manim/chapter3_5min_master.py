#!/usr/bin/env python3
"""
Chapter 3: Classification — Full 5-Minute Masterclass (~300 Seconds)
Scientific, minimalist whiteboard animation for school students (Classes 5 to 10).
Rich with simple visual examples: Mail/Spam sorter, Fruit sorting chutes, Distance tape measure,
1-NN outlier danger, k=3 vs k=5 circle voting, Decision boundary maps.
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


class Chapter3FiveMinuteMaster(Scene):
    def construct(self):
        # ---------------------------------------------------------------------
        # PART 1: WHAT IS CLASSIFICATION? (0:00 - 1:00) ~ 60 seconds
        # ---------------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 3 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.45)

        title = Text("What Is Classification?", font_size=36, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.25)
        sub = Text("Sorting mystery items into the right buckets or categories", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(12.4)

        # 2 Buckets: Inbox vs Spam
        b1 = RoundedRectangle(corner_radius=0.25, height=3.3, width=4.8, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        b1_lbl = Text("📥 Important Inbox", font_size=16, color=COLOR_BLUE, weight=BOLD).move_to(b1.get_top() + DOWN * 0.4)
        m1 = Text("• Teacher's Homework note", font_size=13, color=COLOR_BODY).next_to(b1_lbl, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        m2 = Text("• Science Project schedule", font_size=13, color=COLOR_BODY).next_to(m1, DOWN, buff=0.2, aligned_edge=LEFT)
        m3 = Text("• School sports club update", font_size=13, color=COLOR_BODY).next_to(m2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_b1 = VGroup(b1, b1_lbl, m1, m2, m3)

        b2 = RoundedRectangle(corner_radius=0.25, height=3.3, width=4.8, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(RIGHT * 2.8 + DOWN * 0.5)
        b2_lbl = Text("🗑️ Spam / Junk", font_size=16, color=COLOR_RED, weight=BOLD).move_to(b2.get_top() + DOWN * 0.4)
        s1 = Text("• 'You won $1,000,000 cash!'", font_size=13, color=COLOR_BODY).next_to(b2_lbl, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        s2 = Text("• 'Click here for free games!'", font_size=13, color=COLOR_BODY).next_to(s1, DOWN, buff=0.2, aligned_edge=LEFT)
        s3 = Text("• Fake shopping discount ads", font_size=13, color=COLOR_BODY).next_to(s2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_b2 = VGroup(b2, b2_lbl, s1, s2, s3)

        self.play(FadeOut(sub), FadeIn(g_b1, shift=LEFT*0.3), FadeIn(g_b2, shift=RIGHT*0.3), run_time=1.5)
        self.wait(27.2)

        # ---------------------------------------------------------------------
        # PART 2: PLOTTING EXAMPLES ON A MAP (1:00 - 1:55) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p2 = Text("Separating Groups on a 2D Map", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p2), FadeOut(g_b1), FadeOut(g_b2), run_time=1.2)

        p2_sub = Text("When we plot known items by their features, can we draw a line to separate them?", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p2_sub, shift=UP*0.2), run_time=1.0)
        self.wait(9.9)

        axes = Axes(
            x_range=[0, 10, 2],
            y_range=[0, 10, 2],
            x_length=6.0,
            y_length=3.5,
            axis_config={"color": COLOR_MUTED, "stroke_width": 2},
            tips=False
        ).move_to(DOWN * 0.5 + LEFT * 1.5)

        ax_x = Text("Feature 1 (Redness) →", font_size=13, color=COLOR_BODY).next_to(axes.x_axis, DOWN, buff=0.2)
        ax_y = Text("Feature 2 (Roundness) ↑", font_size=13, color=COLOR_BODY).next_to(axes.y_axis, LEFT, buff=0.2).rotate(PI/2)

        # Blue dots (Apples) and Orange dots (Oranges)
        blue_dots = VGroup(*[
            Dot(axes.c2p(x, y), radius=0.12, color=COLOR_BLUE)
            for x, y in [(2.0, 7.5), (2.8, 8.2), (1.5, 6.8), (3.2, 7.0), (2.2, 6.0)]
        ])
        orange_dots = VGroup(*[
            Dot(axes.c2p(x, y), radius=0.12, color=COLOR_ORANGE)
            for x, y in [(7.0, 2.5), (8.2, 3.2), (6.5, 1.8), (7.8, 2.0), (8.5, 1.5)]
        ])

        # Dividing line
        sep_line = Line(axes.c2p(0.5, 9.5), axes.c2p(9.5, 0.5), color=COLOR_GREEN, stroke_width=3)
        line_lbl = Text("Decision Boundary Line", font_size=14, color=COLOR_GREEN, weight=BOLD).next_to(sep_line.get_center(), UP, buff=0.2).rotate(-PI/4)

        self.play(Create(axes), Write(ax_x), Write(ax_y), run_time=1.5)
        self.play(FadeIn(blue_dots), FadeIn(orange_dots), run_time=1.5)
        self.wait(12.4)
        self.play(Create(sep_line), Write(line_lbl), run_time=1.5)
        self.wait(24.7)

        # ---------------------------------------------------------------------
        # PART 3: MEASURING DISTANCE TO MYSTERY POINTS (1:55 - 2:50) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p3 = Text("Distance: Which Known Item Is Closer?", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p3), FadeOut(sep_line), FadeOut(line_lbl), FadeOut(p2_sub), run_time=1.2)

        p3_sub = Text("When a mystery point '?' appears, we measure the physical gap to every neighbor", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p3_sub, shift=UP*0.2), run_time=1.0)
        self.wait(9.9)

        # Mystery point ?
        q_pos = axes.c2p(3.5, 5.5)
        q_dot = Dot(q_pos, radius=0.18, color=COLOR_PURPLE)
        q_lbl = Text("?", font_size=18, color=WHITE, weight=BOLD).move_to(q_pos)
        mystery_point = VGroup(q_dot, q_lbl)

        # Distance tape measures to closest blue and closest orange
        closest_blue = blue_dots[4]  # (2.2, 6.0)
        closest_orange = orange_dots[2]  # (6.5, 1.8)

        tape_blue = DashedLine(q_pos, closest_blue.get_center(), color=COLOR_BLUE, stroke_width=2.5)
        d_blue_lbl = Text("d = 1.4 cm", font_size=13, color=COLOR_BLUE, weight=BOLD).next_to(tape_blue.get_center(), UP, buff=0.1)

        tape_orange = DashedLine(q_pos, closest_orange.get_center(), color=COLOR_ORANGE, stroke_width=2.5)
        d_orange_lbl = Text("d = 4.8 cm", font_size=13, color=COLOR_ORANGE, weight=BOLD).next_to(tape_orange.get_center(), RIGHT, buff=0.1)

        self.play(GrowFromCenter(mystery_point), run_time=1.2)
        self.wait(7.4)
        self.play(Create(tape_blue), Write(d_blue_lbl), Create(tape_orange), Write(d_orange_lbl), run_time=1.8)
        self.wait(27.2)

        # ---------------------------------------------------------------------
        # PART 4: 1-NEAREST NEIGHBOR & THE OUTLIER TRAP (2:50 - 3:45) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p4 = Text("1-NN vs Outlier Noise", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p4),
            FadeOut(tape_blue), FadeOut(d_blue_lbl), FadeOut(tape_orange), FadeOut(d_orange_lbl), FadeOut(p3_sub),
            run_time=1.2
        )

        p4_sub = Text("In 1-NN, only 1 neighbor decides. But what if that single neighbor is a weird outlier?", font_size=15, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p4_sub, shift=UP*0.2), run_time=1.0)
        self.wait(9.9)

        # Add a stray rogue Orange dot right near the Apple cluster!
        rogue_orange = Dot(axes.c2p(3.2, 5.8), radius=0.12, color=COLOR_ORANGE)
        rogue_lbl = Text("Stray Outlier 🍊!", font_size=11, color=COLOR_RED, weight=BOLD).next_to(rogue_orange, UP, buff=0.15)
        self.play(FadeIn(rogue_orange), FadeIn(rogue_lbl), run_time=1.2)
        self.wait(4.9)

        arrow_to_rogue = Arrow(mystery_point.get_center(), rogue_orange.get_center(), color=COLOR_RED, stroke_width=3.5, buff=0.1)

        trap_card = RoundedRectangle(corner_radius=0.2, height=3.2, width=3.6, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(RIGHT * 3.8 + DOWN * 0.5)
        tt = Text("1-NN Mistake!", font_size=15, color=COLOR_RED, weight=BOLD).move_to(trap_card.get_top() + DOWN * 0.35)
        tt1 = Text("• Stray orange dot sits\n  0.4 cm away.", font_size=12, color=COLOR_BODY, line_spacing=1.2).next_to(tt, DOWN, buff=0.2, aligned_edge=LEFT).shift(LEFT * 0.3)
        tt2 = Text("• 1-NN blindly guesses\n  ORANGE, even inside\n  the Apple neighborhood!", font_size=12, color=COLOR_RED, line_spacing=1.2).next_to(tt1, DOWN, buff=0.2, aligned_edge=LEFT)
        tt3 = Text("• We need more voters!", font_size=13, color=COLOR_BLUE, weight=BOLD).next_to(tt2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_trap = VGroup(trap_card, tt, tt1, tt2, tt3)

        self.play(Create(arrow_to_rogue), FadeIn(g_trap, shift=LEFT*0.3), run_time=1.5)
        self.wait(27.2)

        # ---------------------------------------------------------------------
        # PART 5: k-NEAREST NEIGHBORS (VOTING WITH k=5) (3:45 - 4:40) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p5 = Text("k-Nearest Neighbors (k=5 Democratic Vote)", font_size=32, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p5),
            FadeOut(arrow_to_rogue), FadeOut(g_trap), FadeOut(rogue_lbl), FadeOut(p4_sub),
            run_time=1.2
        )

        p5_sub = Text("Expand a wider circle! Let the 5 closest neighbors vote. Majority always wins!", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p5_sub, shift=UP*0.2), run_time=1.0)
        self.wait(9.9)

        # Draw expanding circle
        circle_k5 = DashedVMobject(Circle(radius=1.8, color=COLOR_PURPLE, stroke_width=2.5)).move_to(mystery_point)
        vote_card = RoundedRectangle(corner_radius=0.2, height=3.2, width=3.8, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#86EFAC", stroke_width=2).move_to(RIGHT * 3.8 + DOWN * 0.5)
        v_title = Text("Vote Inside Circle (k=5)", font_size=15, color=COLOR_TITLE, weight=BOLD).move_to(vote_card.get_top() + DOWN * 0.35)
        v1 = Text("• Blue Neighbors: 4 votes 🍎", font_size=13, color=COLOR_BLUE, weight=BOLD).next_to(v_title, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        v2 = Text("• Orange Neighbors: 1 vote 🍊", font_size=13, color=COLOR_ORANGE).next_to(v1, DOWN, buff=0.18, aligned_edge=LEFT)
        v3 = Text("• Majority Winner: BLUE (4 vs 1)!", font_size=13, color=COLOR_GREEN, weight=BOLD).next_to(v2, DOWN, buff=0.2, aligned_edge=LEFT)
        v4 = Text("✨ The stray outlier gets\n  outvoted 4 to 1! Democracy!", font_size=12, color=COLOR_MUTED, line_spacing=1.2).next_to(v3, DOWN, buff=0.18, aligned_edge=LEFT)
        g_vote = VGroup(vote_card, v_title, v1, v2, v3, v4)

        self.play(Create(circle_k5), FadeIn(g_vote, shift=LEFT*0.3), run_time=1.8)
        self.wait(30.9)

        # ---------------------------------------------------------------------
        # PART 6: SUMMARY & CHAPTER 4 TEASER (4:40 - 5:20) ~ 40 seconds
        # ---------------------------------------------------------------------
        title_p6 = Text("Summary: How Classification Works", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p6),
            FadeOut(axes), FadeOut(ax_x), FadeOut(ax_y),
            FadeOut(blue_dots), FadeOut(orange_dots), FadeOut(mystery_point), FadeOut(rogue_orange),
            FadeOut(circle_k5), FadeOut(g_vote), FadeOut(p5_sub),
            run_time=1.5
        )

        sum_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(DOWN * 0.6)
        s1 = Text("1. Classification assigns new items into distinct categories (Apples vs Oranges).", font_size=15, color=COLOR_BODY).move_to(sum_card.get_top() + DOWN * 0.6 + LEFT * 0.3)
        s2 = Text("2. Distance measures how close a mystery example is to known examples.", font_size=15, color=COLOR_BODY).next_to(s1, DOWN, buff=0.25, aligned_edge=LEFT)
        s3 = Text("3. k-NN uses 'k' nearest neighbors to vote. Odd k (k=3, 5) prevents ties!", font_size=15, color=COLOR_BODY).next_to(s2, DOWN, buff=0.25, aligned_edge=LEFT)
        s4 = Text("4. Decision boundaries mark the dividing line where classifications flip.", font_size=15, color=COLOR_BODY).next_to(s3, DOWN, buff=0.25, aligned_edge=LEFT)

        next_ch = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.2, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=1.5).next_to(s4, DOWN, buff=0.35).set_x(sum_card.get_x())
        next_txt = Text("📈 Up Next in Chapter 4: Prediction & Regression — Predicting exact numbers with lines!", font_size=13, color="#1D4ED8", weight=BOLD).move_to(next_ch)

        g_sum = VGroup(sum_card, s1, s2, s3, s4, next_ch, next_txt)
        self.play(FadeIn(g_sum, shift=UP*0.25), run_time=1.5)
        self.wait(32.1)
