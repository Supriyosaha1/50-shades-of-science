#!/usr/bin/env python3
"""
Manim Master Animation: Chapter 1 - What is Machine Learning?
Comprehensive, continuous whiteboard animated masterclass for school students (Classes 5-10).
Covers Concepts 1.1, 1.2, 1.3, and 1.4 in one continuous, beautifully paced educational shot.
"""

from manim import *

# Configure clean whiteboard style
config.background_color = "#F8FAFC"  # Soft slate whiteboard
config.pixel_width = 1280
config.pixel_height = 720
config.frame_rate = 30

# Educational Color Palette
COLOR_TITLE = "#0F172A"       # Deep slate title
COLOR_BODY = "#334155"        # Slate body
COLOR_MUTED = "#64748B"       # Muted slate
COLOR_BLUE = "#2563EB"        # Accent blue
COLOR_APPLE_RED = "#DC2626"   # Apple red
COLOR_APPLE_GREEN = "#16A34A" # Apple green
COLOR_ORANGE = "#EA580C"      # Vibrant orange
COLOR_BG_CARD = "#FFFFFF"     # Pure white card
COLOR_BORDER = "#CBD5E1"      # Subtle card border


class Chapter1Master(Scene):
    def construct(self):
        # -------------------------------------------------------------
        # ACT 1: Title & The Human Brain (Concept 1.1)
        # -------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=4.8, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 1 · WHAT IS MACHINE LEARNING?", font="Inter", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.6)

        title = Text("How Do We Learn?", font="Inter", font_size=38, color=COLOR_TITLE, weight=BOLD)
        title.next_to(badge_group, DOWN, buff=0.35)

        sub_q = Text("How do you know an apple is an apple when you see one?", font="Inter", font_size=20, color=COLOR_BLUE)
        sub_q.next_to(title, DOWN, buff=0.25)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub_q, shift=UP*0.2), run_time=1.2)
        self.wait(1.5)

        # Fruit Visuals: Red Apple
        apple_circle = Circle(radius=1.1, fill_color=COLOR_APPLE_RED, fill_opacity=0.95, stroke_color="#991B1B", stroke_width=3)
        apple_leaf = Arc(radius=0.4, start_angle=0, angle=PI/2, stroke_color="#15803D", stroke_width=4).next_to(apple_circle, UP, buff=-0.1)
        apple_group = VGroup(apple_circle, apple_leaf).move_to(LEFT * 3.5 + DOWN * 0.4)

        apple_lbl = Text("Red Apple", font="Inter", font_size=20, color=COLOR_TITLE, weight=BOLD).next_to(apple_group, DOWN, buff=0.3)

        # Clues card
        clues_box = RoundedRectangle(corner_radius=0.3, height=2.8, width=5.0, fill_color=COLOR_BG_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5)
        clues_title = Text("Visual Clues (Features)", font="Inter", font_size=18, color=COLOR_TITLE, weight=BOLD).move_to(clues_box.get_top() + DOWN * 0.4)
        c1 = Text("• Color: Vivid Red", font="Inter", font_size=16, color=COLOR_BODY).next_to(clues_title, DOWN, buff=0.25, aligned_edge=LEFT)
        c2 = Text("• Shape: Round (Curved)", font="Inter", font_size=16, color=COLOR_BODY).next_to(c1, DOWN, buff=0.18, aligned_edge=LEFT)
        c3 = Text("• Skin: Smooth & Shiny", font="Inter", font_size=16, color=COLOR_BODY).next_to(c2, DOWN, buff=0.18, aligned_edge=LEFT)
        clues_group = VGroup(clues_box, clues_title, c1, c2, c3).move_to(RIGHT * 2.2 + DOWN * 0.4)

        self.play(FadeOut(sub_q), GrowFromCenter(apple_group), FadeIn(apple_lbl), run_time=1.2)
        self.play(FadeIn(clues_group, shift=LEFT*0.4), run_time=1.2)
        self.wait(1.8)

        # Transition: Green Apple surprise!
        green_circle = Circle(radius=1.1, fill_color=COLOR_APPLE_GREEN, fill_opacity=0.95, stroke_color="#166534", stroke_width=3).move_to(apple_circle)
        green_lbl = Text("Green Apple 🍏", font="Inter", font_size=20, color="#15803D", weight=BOLD).move_to(apple_lbl)
        c1_green = Text("• Color: Green (Changed!)", font="Inter", font_size=16, color="#15803D", weight=BOLD).move_to(c1, aligned_edge=LEFT)

        insight_card = RoundedRectangle(corner_radius=0.2, height=0.7, width=8.5, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=1.5).to_edge(DOWN, buff=0.5)
        insight_txt = Text("Brain Insight: We don't just check color—we weigh shape and skin too!", font="Inter", font_size=16, color="#065F46", weight=BOLD).move_to(insight_card)
        insight_group = VGroup(insight_card, insight_txt)

        self.play(Transform(apple_circle, green_circle), Transform(apple_lbl, green_lbl), Transform(c1, c1_green), run_time=1.2)
        self.play(FadeIn(insight_group, shift=UP*0.3), run_time=1.0)
        self.wait(2.5)

        # Clear Act 1
        self.play(FadeOut(apple_group), FadeOut(apple_lbl), FadeOut(clues_group), FadeOut(insight_group), FadeOut(title), run_time=1.0)

        # -------------------------------------------------------------
        # ACT 2: Can a Computer Learn? (Concept 1.2)
        # -------------------------------------------------------------
        title_c2 = Text("Can a Machine Learn?", font="Inter", font_size=36, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.35)
        sub_c2 = Text("Computers only understand numbers. Sensors measure the real world!", font="Inter", font_size=18, color=COLOR_BLUE).next_to(title_c2, DOWN, buff=0.2)
        self.play(Write(title_c2), FadeIn(sub_c2, shift=UP*0.2), run_time=1.2)
        self.wait(1.0)

        # Draw 2D Coordinate System
        axes = Axes(
            x_range=[0, 100, 20],
            y_range=[0, 100, 20],
            x_length=5.5,
            y_length=3.8,
            axis_config={"color": "#94A3B8", "stroke_width": 2, "include_numbers": True, "font_size": 14},
        ).move_to(DOWN * 0.8 + LEFT * 0.5)

        x_lbl = Text("Redness (%) →", font="Inter", font_size=15, color=COLOR_BODY, weight=BOLD).next_to(axes.x_axis, DOWN, buff=0.3)
        y_lbl = Text("Roundness (%) ↑", font="Inter", font_size=15, color=COLOR_BODY, weight=BOLD).next_to(axes.y_axis, LEFT, buff=0.3).rotate(PI/2)

        self.play(FadeOut(sub_c2), Create(axes), Write(x_lbl), Write(y_lbl), run_time=1.5)

        # Add Apples (High redness, high roundness)
        apple_points = [(85, 90), (90, 85), (78, 88), (92, 92), (80, 80)]
        apple_dots = VGroup(*[
            Dot(point=axes.c2p(x, y), radius=0.12, color=COLOR_APPLE_RED)
            for x, y in apple_points
        ])
        apple_tag = Text("🍎 Apples (Cluster)", font="Inter", font_size=16, color=COLOR_APPLE_RED, weight=BOLD).next_to(apple_dots, UP, buff=0.25)

        # Add Oranges (Medium redness, high roundness)
        orange_points = [(30, 85), (25, 90), (35, 80), (20, 88), (40, 82)]
        orange_dots = VGroup(*[
            Dot(point=axes.c2p(x, y), radius=0.12, color=COLOR_ORANGE)
            for x, y in orange_points
        ])
        orange_tag = Text("🍊 Oranges (Cluster)", font="Inter", font_size=16, color=COLOR_ORANGE, weight=BOLD).next_to(orange_dots, UP, buff=0.25)

        self.play(Create(apple_dots), Write(apple_tag), run_time=1.4)
        self.play(Create(orange_dots), Write(orange_tag), run_time=1.4)
        self.wait(1.5)

        # A brand new test fruit arrives!
        query_dot = Dot(point=axes.c2p(88, 86), radius=0.18, color="#7C3AED")
        query_ring = Circle(radius=0.35, color="#7C3AED", stroke_width=2.5).move_to(query_dot)
        query_tag = Text("? Unseen Fruit", font="Inter", font_size=15, color="#7C3AED", weight=BOLD).next_to(query_ring, RIGHT, buff=0.2)

        self.play(GrowFromCenter(query_dot), Create(query_ring), Write(query_tag), run_time=1.2)
        self.wait(1.5)

        # Clear Act 2
        self.play(
            FadeOut(axes), FadeOut(x_lbl), FadeOut(y_lbl),
            FadeOut(apple_dots), FadeOut(apple_tag),
            FadeOut(orange_dots), FadeOut(orange_tag),
            FadeOut(query_dot), FadeOut(query_ring), FadeOut(query_tag),
            FadeOut(title_c2), run_time=1.0
        )

        # -------------------------------------------------------------
        # ACT 3: Rigid Rules vs. Machine Learning (Concept 1.3)
        # -------------------------------------------------------------
        title_c3 = Text("Rigid Rules vs. Machine Learning", font="Inter", font_size=36, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.35)
        self.play(Write(title_c3), run_time=1.0)

        # Side by side cards
        card_l = RoundedRectangle(corner_radius=0.3, height=4.2, width=5.6, fill_color=COLOR_BG_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(LEFT * 3.1 + DOWN * 0.8)
        card_r = RoundedRectangle(corner_radius=0.3, height=4.2, width=5.6, fill_color=COLOR_BG_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2.0).move_to(RIGHT * 3.1 + DOWN * 0.8)

        head_l = Text("System A: Hardcoded IF-Rule", font="Inter", font_size=16, color="#DC2626", weight=BOLD).move_to(card_l.get_top() + DOWN * 0.4)
        rule_code = Text("if fruit.color == 'red':\n    return 'Apple'\nelse:\n    return 'Orange'", font="monospace", font_size=14, color=COLOR_BODY).next_to(head_l, DOWN, buff=0.3)

        head_r = Text("System B: Machine Learning", font="Inter", font_size=16, color=COLOR_BLUE, weight=BOLD).move_to(card_r.get_top() + DOWN * 0.4)
        ml_desc = Text("Learned from 1,000 photos:\nWeighs Color (30%)\n+ Shape (40%)\n+ Skin Texture (30%)", font="Inter", font_size=14, color=COLOR_BODY).next_to(head_r, DOWN, buff=0.25)

        self.play(FadeIn(card_l), Write(head_l), FadeIn(rule_code), run_time=1.2)
        self.play(FadeIn(card_r), Write(head_r), FadeIn(ml_desc), run_time=1.2)
        self.wait(1.5)

        # Surprise Fruit: Green Apple
        surprise_banner = RoundedRectangle(corner_radius=0.2, height=0.9, width=10.0, fill_color="#FEF2F2", fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=1.5).to_edge(DOWN, buff=0.5)
        surprise_txt = Text("Surprise: Green Apple arrives! Rule outputs: ORANGE ❌ (FAIL!)\nMachine Learning checks shape & skin: outputs APPLE ✅ (SUCCESS!)", font="Inter", font_size=14, color="#991B1B", weight=BOLD).move_to(surprise_banner)

        self.play(FadeIn(surprise_banner, shift=UP*0.3), Write(surprise_txt), run_time=1.4)
        self.wait(3.0)

        # Clear Act 3
        self.play(
            FadeOut(card_l), FadeOut(head_l), FadeOut(rule_code),
            FadeOut(card_r), FadeOut(head_r), FadeOut(ml_desc),
            FadeOut(surprise_banner), FadeOut(surprise_txt),
            FadeOut(title_c3), run_time=1.0
        )

        # -------------------------------------------------------------
        # ACT 4: The 3 Pillars of Machine Learning (Concept 1.4)
        # -------------------------------------------------------------
        title_c4 = Text("The 3 Pillars of Machine Learning", font="Inter", font_size=36, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.35)
        self.play(Write(title_c4), run_time=1.0)

        # 3 Pillar Cards
        p1 = RoundedRectangle(corner_radius=0.25, height=3.6, width=3.4, fill_color=COLOR_BG_CARD, fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=2.0).move_to(LEFT * 4.0 + DOWN * 0.8)
        p1_title = Text("1. Data", font="Inter", font_size=18, color=COLOR_BLUE, weight=BOLD).move_to(p1.get_top() + DOWN * 0.45)
        p1_icon = Text("📦", font_size=36).next_to(p1_title, DOWN, buff=0.2)
        p1_desc = Text("Gather hundreds\nof labeled examples\n(Apples & Oranges)", font="Inter", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(p1_icon, DOWN, buff=0.25)
        p1_group = VGroup(p1, p1_title, p1_icon, p1_desc)

        arrow_1 = Arrow(start=LEFT * 2.1 + DOWN * 0.8, end=LEFT * 1.5 + DOWN * 0.8, color="#94A3B8", stroke_width=4, buff=0)

        p2 = RoundedRectangle(corner_radius=0.25, height=3.6, width=3.4, fill_color=COLOR_BG_CARD, fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=2.0).move_to(DOWN * 0.8)
        p2_title = Text("2. Training", font="Inter", font_size=18, color="#059669", weight=BOLD).move_to(p2.get_top() + DOWN * 0.45)
        p2_icon = Text("⚙️", font_size=36).next_to(p2_title, DOWN, buff=0.2)
        p2_desc = Text("The algorithm\nadjusts its dials\nto find patterns", font="Inter", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(p2_icon, DOWN, buff=0.25)
        p2_group = VGroup(p2, p2_title, p2_icon, p2_desc)

        arrow_2 = Arrow(start=RIGHT * 1.5 + DOWN * 0.8, end=RIGHT * 2.1 + DOWN * 0.8, color="#94A3B8", stroke_width=4, buff=0)

        p3 = RoundedRectangle(corner_radius=0.25, height=3.6, width=3.4, fill_color=COLOR_BG_CARD, fill_opacity=1.0, stroke_color="#DDD6FE", stroke_width=2.0).move_to(RIGHT * 4.0 + DOWN * 0.8)
        p3_title = Text("3. Prediction", font="Inter", font_size=18, color="#7C3AED", weight=BOLD).move_to(p3.get_top() + DOWN * 0.45)
        p3_icon = Text("🎯", font_size=36).next_to(p3_title, DOWN, buff=0.2)
        p3_desc = Text("A brand-new item\narrives and gets\nclassified in ms!", font="Inter", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(p3_icon, DOWN, buff=0.25)
        p3_group = VGroup(p3, p3_title, p3_icon, p3_desc)

        self.play(FadeIn(p1_group, shift=RIGHT*0.3), run_time=1.0)
        self.play(Create(arrow_1), FadeIn(p2_group, shift=RIGHT*0.3), run_time=1.0)
        self.play(Create(arrow_2), FadeIn(p3_group, shift=RIGHT*0.3), run_time=1.0)
        self.wait(2.5)

        # -------------------------------------------------------------
        # ACT 5: Core Takeaway
        # -------------------------------------------------------------
        takeaway_card = RoundedRectangle(corner_radius=0.3, height=1.3, width=10.5, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#10B981", stroke_width=2.0).to_edge(DOWN, buff=0.4)
        takeaway_kicker = Text("KEY TAKEAWAY", font="Inter", font_size=13, color="#059669", weight=BOLD).move_to(takeaway_card.get_top() + DOWN * 0.3)
        takeaway_text = Text("Machine Learning means teaching computers to find patterns in examples\nso they can solve new problems on their own.", font="Inter", font_size=16, color="#065F46", weight=BOLD, line_spacing=1.2).next_to(takeaway_kicker, DOWN, buff=0.15)
        takeaway_group = VGroup(takeaway_card, takeaway_kicker, takeaway_text)

        self.play(FadeIn(takeaway_group, shift=UP*0.4), run_time=1.2)
        self.wait(3.5)

