#!/usr/bin/env python3
"""
Chapter 1: What is Machine Learning? — Full 5-Minute Masterclass (300+ Seconds)
Deep, step-by-step whiteboard animation for school students (Classes 5 to 10).
Rich with simple, visual, tactile examples explaining each concept thoroughly.
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


class Chapter1FiveMinuteMaster(Scene):
    def construct(self):
        # =====================================================================
        # PART 1: HOW HUMANS LEARN (0:00 - 1:15) ~ 75 seconds
        # =====================================================================
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 1 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.5)

        title = Text("How Do We Learn?", font_size=36, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.3)
        sub = Text("How do you know an apple is an apple when you see one?", font_size=18, color=COLOR_BLUE).next_to(title, DOWN, buff=0.2)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(5.7)

        # Example 1: Red Apple
        apple = Circle(radius=1.1, fill_color=COLOR_RED, fill_opacity=0.95, stroke_color="#991B1B", stroke_width=3).move_to(LEFT * 3.5 + DOWN * 0.4)
        stem = Line(apple.get_top(), apple.get_top() + UP * 0.4 + RIGHT * 0.15, color="#78350F", stroke_width=4)
        leaf = Arc(radius=0.4, start_angle=0, angle=PI/2, stroke_color="#15803D", stroke_width=4).next_to(stem, RIGHT, buff=-0.1)
        lbl_apple = Text("Red Apple", font_size=19, color=COLOR_TITLE, weight=BOLD).next_to(apple, DOWN, buff=0.3)
        fruit_group = VGroup(apple, stem, leaf, lbl_apple)

        card = RoundedRectangle(corner_radius=0.25, height=3.0, width=5.2, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(RIGHT * 2.2 + DOWN * 0.4)
        c_title = Text("Clues Measured by Your Brain", font_size=16, color=COLOR_TITLE, weight=BOLD).move_to(card.get_top() + DOWN * 0.4)
        c1 = Text("• Clue 1: Color = Red", font_size=15, color=COLOR_BODY).next_to(c_title, DOWN, buff=0.25, aligned_edge=LEFT)
        c2 = Text("• Clue 2: Shape = Round (Sphere)", font_size=15, color=COLOR_BODY).next_to(c1, DOWN, buff=0.18, aligned_edge=LEFT)
        c3 = Text("• Clue 3: Skin = Smooth & Waxy", font_size=15, color=COLOR_BODY).next_to(c2, DOWN, buff=0.18, aligned_edge=LEFT)
        card_group = VGroup(card, c_title, c1, c2, c3)

        self.play(FadeOut(sub), GrowFromCenter(fruit_group), FadeIn(card_group, shift=LEFT*0.3), run_time=1.8)
        self.wait(7.6)

        # Example 2: Green Apple Surprise
        green_apple = Circle(radius=1.1, fill_color=COLOR_GREEN, fill_opacity=0.95, stroke_color="#166534", stroke_width=3).move_to(apple)
        green_lbl = Text("Green Apple 🍏", font_size=19, color="#15803D", weight=BOLD).move_to(lbl_apple)
        c1_green = Text("• Clue 1: Color = Green (Changed!)", font_size=15, color="#15803D", weight=BOLD).move_to(c1, aligned_edge=LEFT)

        insight = RoundedRectangle(corner_radius=0.2, height=0.75, width=9.2, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=1.5).to_edge(DOWN, buff=0.4)
        insight_txt = Text("Brain Insight: Even though color is green, round shape + smooth skin match your Apple memories!", font_size=14, color="#065F46", weight=BOLD).move_to(insight)
        g_insight = VGroup(insight, insight_txt)

        self.play(Transform(apple, green_apple), Transform(lbl_apple, green_lbl), Transform(c1, c1_green), run_time=1.5)
        self.play(FadeIn(g_insight, shift=UP*0.2), run_time=1.0)
        self.wait(9.5)

        # Example 3: Ripe Orange
        orange = Circle(radius=1.1, fill_color=COLOR_ORANGE, fill_opacity=0.95, stroke_color="#9A3412", stroke_width=3).move_to(apple)
        orange_lbl = Text("Ripe Orange 🍊", font_size=19, color=COLOR_ORANGE, weight=BOLD).move_to(lbl_apple)
        c1_orange = Text("• Clue 1: Color = Orange", font_size=15, color=COLOR_ORANGE, weight=BOLD).move_to(c1, aligned_edge=LEFT)
        c2_orange = Text("• Clue 2: Shape = Round", font_size=15, color=COLOR_BODY).move_to(c2, aligned_edge=LEFT)
        c3_orange = Text("• Clue 3: Skin = Bumpy Pores", font_size=15, color=COLOR_ORANGE, weight=BOLD).move_to(c3, aligned_edge=LEFT)
        insight_orange = Text("Brain Insight: The bumpy peel texture instantly triggers your stored Citrus memories!", font_size=14, color="#065F46", weight=BOLD).move_to(insight)

        self.play(Transform(apple, orange), Transform(lbl_apple, orange_lbl), Transform(c1, c1_orange), Transform(c2, c2_orange), Transform(c3, c3_orange), Transform(insight_txt, insight_orange), run_time=1.5)
        self.wait(9.5)

        # Example 4: Yellow Lemon (Oval Shape)
        lemon = Ellipse(width=2.5, height=1.6, fill_color="#EAB308", fill_opacity=0.95, stroke_color="#A16207", stroke_width=3).move_to(apple)
        lemon_lbl = Text("Yellow Lemon 🍋", font_size=19, color="#A16207", weight=BOLD).move_to(lbl_apple)
        c1_lemon = Text("• Clue 1: Color = Bright Yellow", font_size=15, color="#A16207", weight=BOLD).move_to(c1, aligned_edge=LEFT)
        c2_lemon = Text("• Clue 2: Shape = Oval (Elongated)", font_size=15, color="#A16207", weight=BOLD).move_to(c2, aligned_edge=LEFT)
        c3_lemon = Text("• Clue 3: Skin = Thick Citrus Rind", font_size=15, color="#A16207", weight=BOLD).move_to(c3, aligned_edge=LEFT)
        insight_lemon = Text("Brain Insight: Notice how shape and rind point your brain towards lemons, not apples!", font_size=14, color="#065F46", weight=BOLD).move_to(insight)

        self.play(Transform(apple, lemon), Transform(lbl_apple, lemon_lbl), Transform(c1, c1_lemon), Transform(c2, c2_lemon), Transform(c3, c3_lemon), Transform(insight_txt, insight_lemon), run_time=1.5)
        self.wait(11.4)

        # Example 5: Plastic Toy Fruit (Touch Sensor)
        plastic = Circle(radius=1.1, fill_color="#F87171", fill_opacity=0.7, stroke_color="#DC2626", stroke_width=3).move_to(apple)
        plastic_lbl = Text("Plastic Toy Apple 🧸", font_size=19, color="#DC2626", weight=BOLD).move_to(lbl_apple)
        c3_plastic = Text("• Clue 3: Touch = Hollow Plastic!", font_size=15, color="#DC2626", weight=BOLD).move_to(c3, aligned_edge=LEFT)
        insight_plastic = Text("Brain Insight: Touch sensory memory says: NOT EDIBLE! Brain recognizes it as a toy!", font_size=14, color="#991B1B", weight=BOLD).move_to(insight)

        self.play(Transform(apple, plastic), Transform(lbl_apple, plastic_lbl), Transform(c3, c3_plastic), Transform(insight_txt, insight_plastic), run_time=1.5)
        self.wait(11.4)

        # Clear Part 1
        self.play(FadeOut(fruit_group), FadeOut(card_group), FadeOut(g_insight), FadeOut(title), run_time=1.2)

        # =====================================================================
        # PART 2: COMPUTERS ONLY KNOW NUMBERS (1:15 - 2:25) ~ 70 seconds
        # =====================================================================
        title_p2 = Text("How Do Computers See the World?", font_size=34, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.3)
        sub_p2 = Text("Computers have no eyes or feelings. Silicon chips only understand NUMBERS!", font_size=17, color=COLOR_BLUE).next_to(title_p2, DOWN, buff=0.2)
        self.play(Write(title_p2), FadeIn(sub_p2, shift=UP*0.2), run_time=1.5)
        self.wait(5.7)

        # Feature Table Card
        f_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.2, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(DOWN * 0.7)
        f_title = Text("Sensors Turn Real Clues into Numbers (Features)", font_size=16, color=COLOR_TITLE, weight=BOLD).move_to(f_card.get_top() + DOWN * 0.35)
        h_row = Text("Fruit Sample          Redness (X1)       Roundness (X2)      Correct Category", font="monospace", font_size=13, color=COLOR_BLUE, weight=BOLD).next_to(f_title, DOWN, buff=0.3)
        r1 = Text("🍎 Red Apple #1           85%                 90%                  Apple", font="monospace", font_size=12, color=COLOR_BODY).next_to(h_row, DOWN, buff=0.2)
        r2 = Text("🍎 Red Apple #2           90%                 85%                  Apple", font="monospace", font_size=12, color=COLOR_BODY).next_to(r1, DOWN, buff=0.18)
        r3 = Text("🍊 Orange #1              25%                 88%                  Orange", font="monospace", font_size=12, color=COLOR_BODY).next_to(r2, DOWN, buff=0.18)
        r4 = Text("🍊 Orange #2              30%                 82%                  Orange", font="monospace", font_size=12, color=COLOR_BODY).next_to(r3, DOWN, buff=0.18)
        r5 = Text("🍋 Lemon #1               10%                 50%                  Lemon", font="monospace", font_size=12, color=COLOR_BODY).next_to(r4, DOWN, buff=0.18)
        t_group = VGroup(f_card, f_title, h_row, r1, r2, r3, r4, r5)

        self.play(FadeOut(sub_p2), FadeIn(t_group, shift=UP*0.3), run_time=1.5)
        self.wait(11.4)

        # 2D Coordinate Map
        self.play(FadeOut(t_group), run_time=0.8)

        axes = Axes(
            x_range=[0, 100, 20],
            y_range=[0, 100, 20],
            x_length=6.0,
            y_length=4.0,
            axis_config={"color": "#94A3B8", "include_numbers": True, "font_size": 13}
        ).move_to(DOWN * 0.7 + LEFT * 0.5)

        x_lbl = Text("Redness (%) →", font_size=14, color=COLOR_BODY, weight=BOLD).next_to(axes.x_axis, DOWN, buff=0.25)
        y_lbl = Text("Roundness (%) ↑", font_size=14, color=COLOR_BODY, weight=BOLD).next_to(axes.y_axis, LEFT, buff=0.25).rotate(PI/2)

        self.play(Create(axes), Write(x_lbl), Write(y_lbl), run_time=1.5)

        apple_pts = [(85, 90), (90, 85), (78, 88), (92, 92), (80, 80)]
        apple_dots = VGroup(*[Dot(axes.c2p(x, y), radius=0.12, color=COLOR_RED) for x, y in apple_pts])
        apple_tag = Text("🍎 Apple Cluster (High Redness)", font_size=14, color=COLOR_RED, weight=BOLD).next_to(apple_dots, UP, buff=0.2)

        orange_pts = [(25, 88), (30, 82), (20, 85), (35, 80), (28, 90)]
        orange_dots = VGroup(*[Dot(axes.c2p(x, y), radius=0.12, color=COLOR_ORANGE) for x, y in orange_pts])
        orange_tag = Text("🍊 Orange Cluster (Low Redness)", font_size=14, color=COLOR_ORANGE, weight=BOLD).next_to(orange_dots, UP, buff=0.2)

        lemon_pts = [(10, 50), (15, 55), (12, 45)]
        lemon_dots = VGroup(*[Dot(axes.c2p(x, y), radius=0.12, color="#EAB308") for x, y in lemon_pts])
        lemon_tag = Text("🍋 Lemon Cluster (Low Roundness)", font_size=13, color="#A16207", weight=BOLD).next_to(lemon_dots, DOWN, buff=0.2)

        self.play(Create(apple_dots), FadeIn(apple_tag), run_time=1.5)
        self.play(Create(orange_dots), FadeIn(orange_tag), run_time=1.5)
        self.play(Create(lemon_dots), FadeIn(lemon_tag), run_time=1.5)
        self.wait(14.2)

        # Clear Part 2
        self.play(FadeOut(axes), FadeOut(x_lbl), FadeOut(y_lbl), FadeOut(apple_dots), FadeOut(apple_tag), FadeOut(orange_dots), FadeOut(orange_tag), FadeOut(lemon_dots), FadeOut(lemon_tag), FadeOut(title_p2), run_time=1.2)

        # =====================================================================
        # PART 3: WHY RIGID RULES FAIL (2:25 - 3:30) ~ 65 seconds
        # =====================================================================
        title_p3 = Text("Why Can't We Just Write IF-Rules?", font_size=34, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.3)
        sub_p3 = Text("Traditional programming uses fixed rules: IF this, THEN that. Let's test one!", font_size=17, color=COLOR_BLUE).next_to(title_p3, DOWN, buff=0.2)
        self.play(Write(title_p3), FadeIn(sub_p3, shift=UP*0.2), run_time=1.5)
        self.wait(5.7)

        # The Rule Code Card
        code_card = RoundedRectangle(corner_radius=0.25, height=2.4, width=7.5, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(UP * 0.4)
        code_title = Text("Human-Written Rule", font_size=15, color=COLOR_RED, weight=BOLD).move_to(code_card.get_top() + DOWN * 0.35)
        code_lines = Text("if fruit.color == 'Red':\n    return 'Apple'\nelse:\n    return 'Orange'", font="monospace", font_size=14, color=COLOR_BODY).next_to(code_title, DOWN, buff=0.2)
        g_code = VGroup(code_card, code_title, code_lines)

        self.play(FadeOut(sub_p3), FadeIn(g_code, shift=DOWN*0.2), run_time=1.2)
        self.wait(5.7)

        # Surprise 1: Green Apple enters
        case1_card = RoundedRectangle(corner_radius=0.2, height=1.3, width=9.5, fill_color="#FEF2F2", fill_opacity=1.0, stroke_color="#F87171", stroke_width=1.5).move_to(DOWN * 1.4)
        case1_icon = Text("🍏", font_size=28).move_to(case1_card.get_left() + RIGHT * 0.6)
        case1_text = Text("Surprise 1: Green Apple enters!\nBecause color != 'Red', the rule outputs: ORANGE ❌ (CRITICAL FAILURE!)", font_size=14, color="#991B1B", weight=BOLD).next_to(case1_icon, RIGHT, buff=0.3)
        g_case1 = VGroup(case1_card, case1_icon, case1_text)

        self.play(FadeIn(g_case1, shift=UP*0.2), run_time=1.2)
        self.wait(11.4)

        # Surprise 2: Blood Orange enters
        case2_card = RoundedRectangle(corner_radius=0.2, height=1.3, width=9.5, fill_color="#FEF2F2", fill_opacity=1.0, stroke_color="#F87171", stroke_width=1.5).move_to(case1_card)
        case2_icon = Text("🩸🍊", font_size=28).move_to(case2_card.get_left() + RIGHT * 0.6)
        case2_text = Text("Surprise 2: Blood Orange enters!\nBecause skin is dark red, the rule outputs: APPLE ❌ (CRITICAL FAILURE!)", font_size=14, color="#991B1B", weight=BOLD).next_to(case2_icon, RIGHT, buff=0.3)
        g_case2 = VGroup(case2_card, case2_icon, case2_text)

        self.play(Transform(g_case1, g_case2), run_time=1.2)
        self.wait(13.2)

        why_fail = Text("Nature has exceptions! To cover everything with IF-rules, you'd need 50,000 rules!", font_size=15, color=COLOR_BLUE, weight=BOLD).to_edge(DOWN, buff=0.35)
        self.play(Write(why_fail), run_time=1.0)
        self.wait(11.4)

        # Clear Part 3
        self.play(FadeOut(g_code), FadeOut(g_case1), FadeOut(why_fail), FadeOut(title_p3), run_time=1.2)

        # =====================================================================
        # PART 4: HOW MACHINE LEARNING FINDS THE PATTERN (3:30 - 4:20) ~ 50s
        # =====================================================================
        title_p4 = Text("How Machine Learning Solves It", font_size=34, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.3)
        sub_p4 = Text("Instead of humans writing rules, the algorithm finds the boundary line!", font_size=17, color=COLOR_BLUE).next_to(title_p4, DOWN, buff=0.2)
        self.play(Write(title_p4), FadeIn(sub_p4, shift=UP*0.2), run_time=1.5)
        self.wait(4.7)

        axes2 = Axes(
            x_range=[0, 100, 20],
            y_range=[0, 100, 20],
            x_length=6.0,
            y_length=4.0,
            axis_config={"color": "#94A3B8", "include_numbers": True, "font_size": 13}
        ).move_to(DOWN * 0.7 + LEFT * 0.5)

        x2_lbl = Text("Redness (%) →", font_size=14, color=COLOR_BODY, weight=BOLD).next_to(axes2.x_axis, DOWN, buff=0.25)
        y2_lbl = Text("Roundness (%) ↑", font_size=14, color=COLOR_BODY, weight=BOLD).next_to(axes2.y_axis, LEFT, buff=0.25).rotate(PI/2)

        apple_dots2 = VGroup(*[Dot(axes2.c2p(x, y), radius=0.12, color=COLOR_RED) for x, y in apple_pts])
        orange_dots2 = VGroup(*[Dot(axes2.c2p(x, y), radius=0.12, color=COLOR_ORANGE) for x, y in orange_pts])

        self.play(FadeOut(sub_p4), Create(axes2), Write(x2_lbl), Write(y2_lbl), Create(apple_dots2), Create(orange_dots2), run_time=1.5)
        self.wait(3.8)

        # Multiple candidate lines being tested
        bad_line1 = DashedLine(axes2.c2p(75, 0), axes2.c2p(75, 100), color="#FCA5A5", stroke_width=2.5)
        lbl_bad1 = Text("Line 1: Cuts apples in half (Mistakes: High)", font_size=13, color="#DC2626").to_edge(DOWN, buff=0.35)
        self.play(Create(bad_line1), FadeIn(lbl_bad1), run_time=1.0)
        self.wait(2.8)

        bad_line2 = DashedLine(axes2.c2p(35, 0), axes2.c2p(35, 100), color="#FDE047", stroke_width=2.5)
        lbl_bad2 = Text("Line 2: Cuts oranges in half (Mistakes: High)", font_size=13, color="#CA8A04").to_edge(DOWN, buff=0.35)
        self.play(Transform(bad_line1, bad_line2), Transform(lbl_bad1, lbl_bad2), run_time=1.0)
        self.wait(2.8)

        # The Optimal Learned Decision Boundary
        b_start = axes2.c2p(55, 0)
        b_end = axes2.c2p(55, 100)
        optimal_boundary = DashedLine(b_start, b_end, color=COLOR_BLUE, stroke_width=3.5)
        lbl_opt = Text("Optimal Boundary Line (Mistakes: 0!)", font_size=14, color=COLOR_BLUE, weight=BOLD).to_edge(DOWN, buff=0.35)

        self.play(Transform(bad_line1, optimal_boundary), Transform(lbl_bad1, lbl_opt), run_time=1.2)
        self.wait(4.7)

        # New Query Fruit Arrives!
        query = Dot(axes2.c2p(88, 86), radius=0.18, color=COLOR_PURPLE)
        q_ring = Circle(radius=0.35, color=COLOR_PURPLE, stroke_width=2.5).move_to(query)
        q_tag = Text("? New Fruit (88% red, 86% round)", font_size=14, color=COLOR_PURPLE, weight=BOLD).next_to(query, UP, buff=0.3)

        self.play(FadeOut(bad_line1), FadeOut(lbl_bad1), Create(optimal_boundary), GrowFromCenter(query), Create(q_ring), Write(q_tag), run_time=1.2)
        self.wait(4.7)

        pred_box = RoundedRectangle(corner_radius=0.2, height=0.75, width=9.2, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=1.5).to_edge(DOWN, buff=0.35)
        pred_txt = Text("Model Prediction: Falls safely in Apple Territory → 94% Apple Confidence! 🍏", font_size=14, color="#065F46", weight=BOLD).move_to(pred_box)
        g_pred = VGroup(pred_box, pred_txt)

        self.play(FadeIn(g_pred, shift=UP*0.2), run_time=1.0)
        self.wait(13.2)

        # Clear Part 4
        self.play(FadeOut(axes2), FadeOut(x2_lbl), FadeOut(y2_lbl), FadeOut(apple_dots2), FadeOut(orange_dots2), FadeOut(optimal_boundary), FadeOut(query), FadeOut(q_ring), FadeOut(q_tag), FadeOut(g_pred), FadeOut(title_p4), run_time=1.2)

        # =====================================================================
        # PART 5: THE 3 PILLARS OF MACHINE LEARNING (4:20 - 4:55) ~ 35s
        # =====================================================================
        title_p5 = Text("The 3 Pillars of Machine Learning", font_size=34, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.3)
        self.play(Write(title_p5), run_time=1.2)
        self.wait(3.8)

        p1 = RoundedRectangle(corner_radius=0.2, height=3.3, width=3.3, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=2).move_to(LEFT * 4.0 + DOWN * 0.7)
        t1 = Text("1. Data", font_size=17, color=COLOR_BLUE, weight=BOLD).move_to(p1.get_top() + DOWN * 0.4)
        i1 = Text("📦", font_size=32).next_to(t1, DOWN, buff=0.15)
        d1 = Text("Gather hundreds\nof labeled examples\n(Apples & Oranges)", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(i1, DOWN, buff=0.2)
        g1 = VGroup(p1, t1, i1, d1)

        arr1 = Arrow(LEFT * 2.2 + DOWN * 0.7, LEFT * 1.6 + DOWN * 0.7, color="#94A3B8", stroke_width=3, buff=0)

        p2 = RoundedRectangle(corner_radius=0.2, height=3.3, width=3.3, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=2).move_to(DOWN * 0.7)
        t2 = Text("2. Training", font_size=17, color=COLOR_GREEN, weight=BOLD).move_to(p2.get_top() + DOWN * 0.4)
        i2 = Text("⚙️", font_size=32).next_to(t2, DOWN, buff=0.15)
        d2 = Text("Algorithm adjusts\nits dials to find\nthe boundary pattern", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(i2, DOWN, buff=0.2)
        g2 = VGroup(p2, t2, i2, d2)

        arr2 = Arrow(RIGHT * 1.6 + DOWN * 0.7, RIGHT * 2.2 + DOWN * 0.7, color="#94A3B8", stroke_width=3, buff=0)

        p3 = RoundedRectangle(corner_radius=0.2, height=3.3, width=3.3, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#DDD6FE", stroke_width=2).move_to(RIGHT * 4.0 + DOWN * 0.7)
        t3 = Text("3. Prediction", font_size=17, color=COLOR_PURPLE, weight=BOLD).move_to(p3.get_top() + DOWN * 0.4)
        i3 = Text("🎯", font_size=32).next_to(t3, DOWN, buff=0.15)
        d3 = Text("New unseen fruit\narrives & gets\naccurately classified!", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(i3, DOWN, buff=0.2)
        g3 = VGroup(p3, t3, i3, d3)

        self.play(FadeIn(g1, shift=RIGHT*0.3), run_time=1.0)
        self.play(Create(arr1), FadeIn(g2, shift=RIGHT*0.3), run_time=1.0)
        self.play(Create(arr2), FadeIn(g3, shift=RIGHT*0.3), run_time=1.0)
        self.wait(9.5)

        exam_note = RoundedRectangle(corner_radius=0.2, height=0.75, width=9.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=1.5).to_edge(DOWN, buff=0.35)
        exam_txt = Text("Analogy: Pillar 1 & 2 are studying past homework. Pillar 3 is taking the real exam!", font_size=14, color="#1E40AF", weight=BOLD).move_to(exam_note)
        g_exam = VGroup(exam_note, exam_txt)

        self.play(FadeIn(g_exam, shift=UP*0.2), run_time=1.0)
        self.wait(9.5)

        # Clear Part 5
        self.play(FadeOut(g1), FadeOut(arr1), FadeOut(g2), FadeOut(arr2), FadeOut(g3), FadeOut(g_exam), FadeOut(title_p5), run_time=1.2)

        # =====================================================================
        # PART 6: CORE TAKEAWAY & UP NEXT (4:55 - 5:15) ~ 20s
        # =====================================================================
        tk_card = RoundedRectangle(corner_radius=0.3, height=2.2, width=10.5, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#10B981", stroke_width=2.5).move_to(UP * 0.2)
        tk_badge = Text("CORE INSIGHT", font_size=15, color=COLOR_GREEN, weight=BOLD).move_to(tk_card.get_top() + DOWN * 0.4)
        tk_main = Text("Machine Learning means teaching computers to learn patterns from examples,\nrather than writing fragile, hardcoded rules by hand.", font_size=17, color="#065F46", weight=BOLD, line_spacing=1.3).next_to(tk_badge, DOWN, buff=0.25)
        g_tk = VGroup(tk_card, tk_badge, tk_main)

        up_next = RoundedRectangle(corner_radius=0.2, height=1.0, width=8.8, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(DOWN * 1.8)
        up_next_txt = Text("Up Next: Chapter 2 · Understanding Data (Tables, Features & Coordinates) →", font_size=15, color=COLOR_BLUE, weight=BOLD).move_to(up_next)
        g_next = VGroup(up_next, up_next_txt)

        self.play(FadeIn(g_tk, shift=UP*0.3), run_time=1.5)
        self.play(FadeIn(g_next, shift=UP*0.2), run_time=1.2)
        self.wait(13.2)
