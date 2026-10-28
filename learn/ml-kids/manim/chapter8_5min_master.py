#!/usr/bin/env python3
"""
Chapter 8: Decision Trees — Full 5-Minute Masterclass (~300 Seconds)
Scientific, minimalist whiteboard animation for school students (Classes 5 to 10).
Rich with simple visual examples: 20 Questions game, Tree diagram branches, Splitting purity, 2D rectangular box cuts.
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


class Chapter8FiveMinuteMaster(Scene):
    def construct(self):
        # ---------------------------------------------------------------------
        # PART 1: THE 20 QUESTIONS GAME (0:00 - 0:55) ~ 55 seconds
        # ---------------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 8 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.45)

        title = Text("Decision Trees: The 20 Questions Game", font_size=34, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.25)
        sub = Text("Making smart decisions by asking a series of logical yes/no questions", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(16.0)

        # 20 Questions dialogue
        c_game = RoundedRectangle(corner_radius=0.25, height=3.4, width=9.6, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(DOWN * 0.5)
        gt = Text("🎮 Guess the Animal Game", font_size=17, color=COLOR_TITLE, weight=BOLD).move_to(c_game.get_top() + DOWN * 0.4)

        q1 = Text("Q1: Does it breathe underwater? → NO (Eliminates all fish & sharks!)", font_size=15, color=COLOR_BODY).next_to(gt, DOWN, buff=0.3, aligned_edge=LEFT).shift(LEFT * 2.8)
        q2 = Text("Q2: Does it have feathers? → YES (Eliminates lions, dogs, lizards!)", font_size=15, color=COLOR_BODY).next_to(q1, DOWN, buff=0.2, aligned_edge=LEFT)
        q3 = Text("Q3: Can it mimic human speech? → YES!", font_size=15, color=COLOR_BODY).next_to(q2, DOWN, buff=0.2, aligned_edge=LEFT)

        ans_pill = RoundedRectangle(corner_radius=0.18, height=0.65, width=4.5, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#10B981", stroke_width=1.5).next_to(q3, DOWN, buff=0.25).set_x(c_game.get_x())
        ans_txt = Text("👉 PREDICTION: PARROT 🦜", font_size=15, color="#065F46", weight=BOLD).move_to(ans_pill)
        g_ans = VGroup(ans_pill, ans_txt)

        g_game = VGroup(c_game, gt, q1, q2, q3, g_ans)
        self.play(FadeOut(sub), FadeIn(g_game, shift=UP*0.3), run_time=1.5)
        self.wait(39.9)

        # ---------------------------------------------------------------------
        # PART 2: ANATOMY OF A DECISION TREE (0:55 - 1:50) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p2 = Text("Anatomy of a Decision Tree", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p2), FadeOut(g_game), run_time=1.2)

        p2_sub = Text("Information flows from the top Root down branches to the Leaf answers", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p2_sub, shift=UP*0.2), run_time=1.0)
        self.wait(12.0)

        # Root Node
        root_box = RoundedRectangle(corner_radius=0.15, height=0.7, width=3.8, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=2).move_to(UP * 0.4)
        root_txt = Text("Is Color = Orange?", font_size=14, color="#1D4ED8", weight=BOLD).move_to(root_box)
        g_root = VGroup(root_box, root_txt)

        # Branches
        branch_l = Line(root_box.get_bottom() + LEFT * 0.8, LEFT * 3.0 + DOWN * 1.2, color=COLOR_MUTED, stroke_width=2.5)
        lbl_yes = Text("YES", font_size=12, color=COLOR_GREEN, weight=BOLD).next_to(branch_l.get_center(), LEFT, buff=0.15)

        branch_r = Line(root_box.get_bottom() + RIGHT * 0.8, RIGHT * 3.0 + DOWN * 1.2, color=COLOR_MUTED, stroke_width=2.5)
        lbl_no = Text("NO", font_size=12, color=COLOR_RED, weight=BOLD).next_to(branch_r.get_center(), RIGHT, buff=0.15)

        # Leaves
        leaf_l = RoundedRectangle(corner_radius=0.15, height=0.65, width=2.8, fill_color="#FEF3C7", fill_opacity=1.0, stroke_color="#F59E0B", stroke_width=1.5).move_to(LEFT * 3.0 + DOWN * 1.6)
        leaf_lt = Text("🍊 Orange Fruit", font_size=13, color="#B45309", weight=BOLD).move_to(leaf_l)
        g_leaf_l = VGroup(leaf_l, leaf_lt)

        leaf_r = RoundedRectangle(corner_radius=0.15, height=0.65, width=2.8, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=1.5).move_to(RIGHT * 3.0 + DOWN * 1.6)
        leaf_rt = Text("🍎 Apple Fruit", font_size=13, color=COLOR_BLUE, weight=BOLD).move_to(leaf_r)
        g_leaf_r = VGroup(leaf_r, leaf_rt)

        callout = Text("Root Node (Top) → Branches (Paths) → Leaf Nodes (Predictions)", font_size=14, color=COLOR_BODY, weight=BOLD).to_edge(DOWN, buff=0.4)

        self.play(FadeIn(g_root, shift=DOWN*0.2), run_time=1.2)
        self.play(Create(branch_l), Write(lbl_yes), Create(branch_r), Write(lbl_no), run_time=1.5)
        self.play(FadeIn(g_leaf_l), FadeIn(g_leaf_r), FadeIn(callout), run_time=1.5)
        self.wait(35.9)

        # ---------------------------------------------------------------------
        # PART 3: PICKING THE BEST SPLIT (PURITY) (1:50 - 2:45) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p3 = Text("How Does the Computer Pick Questions?", font_size=32, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p3),
            FadeOut(g_root), FadeOut(branch_l), FadeOut(lbl_yes), FadeOut(branch_r), FadeOut(lbl_no),
            FadeOut(g_leaf_l), FadeOut(g_leaf_r), FadeOut(callout), FadeOut(p2_sub),
            run_time=1.2
        )

        p3_sub = Text("The computer tests every possible question and picks the one that separates data most purely!", font_size=15, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p3_sub, shift=UP*0.2), run_time=1.0)
        self.wait(12.0)

        # Bad Split vs Good Split
        b_card = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        bt = Text("❌ Bad Question: 'Is it Tuesday?'", font_size=14, color=COLOR_RED, weight=BOLD).move_to(b_card.get_top() + DOWN * 0.35)
        bt1 = Text("Left Group: 5 Apples & 5 Oranges", font_size=13, color=COLOR_BODY).next_to(bt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        bt2 = Text("Right Group: 5 Apples & 5 Oranges", font_size=13, color=COLOR_BODY).next_to(bt1, DOWN, buff=0.15, aligned_edge=LEFT)
        bt3 = Text("⚠️ Zero Progress! Impurity unchanged.\nTotal waste of a question!", font_size=12, color=COLOR_RED, line_spacing=1.2).next_to(bt2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_b = VGroup(b_card, bt, bt1, bt2, bt3)

        g_card = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#86EFAC", stroke_width=2).move_to(RIGHT * 2.8 + DOWN * 0.5)
        gt = Text("✨ Good Question: 'Is it Orange?'", font_size=14, color=COLOR_GREEN, weight=BOLD).move_to(g_card.get_top() + DOWN * 0.35)
        gt1 = Text("Left Group: 10 Oranges & 0 Apples!", font_size=13, color=COLOR_ORANGE, weight=BOLD).next_to(gt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        gt2 = Text("Right Group: 0 Oranges & 10 Apples!", font_size=13, color=COLOR_BLUE, weight=BOLD).next_to(gt1, DOWN, buff=0.15, aligned_edge=LEFT)
        gt3 = Text("🎉 100% Pure! One single question\nsorted all fruits perfectly!", font_size=12, color=COLOR_GREEN, line_spacing=1.2).next_to(gt2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_g = VGroup(g_card, gt, gt1, gt2, gt3)

        self.play(FadeIn(g_b, shift=LEFT*0.3), FadeIn(g_g, shift=RIGHT*0.3), run_time=1.5)
        self.wait(39.9)

        # ---------------------------------------------------------------------
        # PART 4: DECISION TREES ON A MAP (2:45 - 3:35) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p4 = Text("Decision Boundaries: Straight Slices", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p4), FadeOut(g_b), FadeOut(g_g), FadeOut(p3_sub), run_time=1.2)

        p4_sub = Text("On a 2D map, a Decision Tree cuts the plane with clean vertical and horizontal slices!", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p4_sub, shift=UP*0.2), run_time=1.0)
        self.wait(12.0)

        axes = Axes(
            x_range=[0, 10, 2],
            y_range=[0, 10, 2],
            x_length=6.0,
            y_length=3.5,
            axis_config={"color": COLOR_MUTED, "stroke_width": 2},
            tips=False
        ).move_to(DOWN * 0.5 + LEFT * 1.5)

        # Vertical slice at X = 5
        v_slice = Line(axes.c2p(5, 0), axes.c2p(5, 10), color=COLOR_BLUE, stroke_width=3)
        v_lbl = Text("Split 1: X > 5?", font_size=12, color=COLOR_BLUE, weight=BOLD).next_to(v_slice.get_top(), DOWN, buff=0.1)

        # Horizontal slice at Y = 4 on right half
        h_slice = Line(axes.c2p(5, 4), axes.c2p(10, 4), color=COLOR_GREEN, stroke_width=3)
        h_lbl = Text("Split 2: Y > 4?", font_size=12, color=COLOR_GREEN, weight=BOLD).next_to(h_slice.get_center(), UP, buff=0.1)

        info_card = RoundedRectangle(corner_radius=0.2, height=3.0, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(RIGHT * 3.8 + DOWN * 0.5)
        it = Text("Rectangular Boxes", font_size=15, color=COLOR_TITLE, weight=BOLD).move_to(info_card.get_top() + DOWN * 0.35)
        it1 = Text("• Each decision question\n  slices along one axis.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(it, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        it2 = Text("• Creates crisp rectangular\n  zones on the map.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(it1, DOWN, buff=0.2, aligned_edge=LEFT)
        it3 = Text("• Very easy for humans\n  to read and verify!", font_size=13, color=COLOR_GREEN, line_spacing=1.2).next_to(it2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_info = VGroup(info_card, it, it1, it2, it3)

        self.play(Create(axes), run_time=1.2)
        self.play(Create(v_slice), Write(v_lbl), run_time=1.5)
        self.play(Create(h_slice), Write(h_lbl), FadeIn(g_info, shift=LEFT*0.3), run_time=1.5)
        self.wait(35.9)

        # ---------------------------------------------------------------------
        # PART 5: SUMMARY & CHAPTER 9 TEASER (3:35 - 4:25) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p5 = Text("Summary: Decision Trees", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p5),
            FadeOut(axes), FadeOut(v_slice), FadeOut(v_lbl), FadeOut(h_slice), FadeOut(h_lbl), FadeOut(g_info), FadeOut(p4_sub),
            run_time=1.5
        )

        sum_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(DOWN * 0.6)
        s1 = Text("1. Decision Trees make predictions by following branches of yes/no questions.", font_size=15, color=COLOR_BODY).move_to(sum_card.get_top() + DOWN * 0.6 + LEFT * 0.5)
        s2 = Text("2. The computer automatically finds the question that maximizes purity.", font_size=15, color=COLOR_BODY).next_to(s1, DOWN, buff=0.25, aligned_edge=LEFT)
        s3 = Text("3. Boundaries are axis-aligned horizontal and vertical rectangular cuts.", font_size=15, color=COLOR_BODY).next_to(s2, DOWN, buff=0.25, aligned_edge=LEFT)
        s4 = Text("4. Decision Trees are transparent and explainable: you can trace every answer!", font_size=15, color=COLOR_BODY).next_to(s3, DOWN, buff=0.25, aligned_edge=LEFT)

        next_ch = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.2, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=1.5).next_to(s4, DOWN, buff=0.35).set_x(sum_card.get_x())
        next_txt = Text("⚡ Up Next in Chapter 9: Neural Networks — Simulating brain neurons with weights!", font_size=13, color="#1D4ED8", weight=BOLD).move_to(next_ch)

        g_sum = VGroup(sum_card, s1, s2, s3, s4, next_ch, next_txt)
        self.play(FadeIn(g_sum, shift=UP*0.25), run_time=1.5)
        self.wait(49.9)

