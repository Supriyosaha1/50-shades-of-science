#!/usr/bin/env python3
"""
Manim Master Animations for All 11 Chapters of the ML Visual Textbook
Scientific, minimalist whiteboard animations explaining each chapter in one continuous visual shot.
"""

from manim import *

# Whiteboard Theme
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
COLOR_RED = "#DC2626"
COLOR_PURPLE = "#7C3AED"
COLOR_CARD = "#FFFFFF"
COLOR_BORDER = "#CBD5E1"


def create_header(chapter_num, chapter_title, concept_subtitle):
    badge = RoundedRectangle(corner_radius=0.2, height=0.55, width=4.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
    badge_txt = Text(f"CHAPTER {chapter_num} · ONE-SHOT ANIMATION", font="Inter", font_size=15, color="#1E40AF", weight=BOLD)
    badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.5)

    title = Text(chapter_title, font="Inter", font_size=34, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.3)
    sub = Text(concept_subtitle, font="Inter", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.2)
    return VGroup(badge_group, title, sub)


# =========================================================================
# Chapter 1: What is Machine Learning?
# =========================================================================
class Chapter1Animation(Scene):
    def construct(self):
        hdr = create_header(1, "What Is Machine Learning?", "How humans and computers learn from examples")
        self.play(FadeIn(hdr[0], shift=DOWN*0.3), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.5)

        # Act 1: Fruit Clues & Brain Memory
        apple = Circle(radius=1.0, fill_color=COLOR_RED, fill_opacity=0.95, stroke_color="#991B1B", stroke_width=3).move_to(LEFT * 3.5 + DOWN * 0.5)
        leaf = Arc(radius=0.4, start_angle=0, angle=PI/2, stroke_color="#15803D", stroke_width=4).next_to(apple, UP, buff=-0.1)
        lbl_apple = Text("Red Apple", font="Inter", font_size=18, color=COLOR_TITLE, weight=BOLD).next_to(apple, DOWN, buff=0.25)
        fruit_group = VGroup(apple, leaf, lbl_apple)

        card = RoundedRectangle(corner_radius=0.25, height=2.6, width=4.8, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(RIGHT * 2.2 + DOWN * 0.5)
        c_title = Text("Clues Measured by Brain", font="Inter", font_size=16, color=COLOR_TITLE, weight=BOLD).move_to(card.get_top() + DOWN * 0.35)
        c1 = Text("• Color: Red", font="Inter", font_size=15, color=COLOR_BODY).next_to(c_title, DOWN, buff=0.25, aligned_edge=LEFT)
        c2 = Text("• Shape: Round", font="Inter", font_size=15, color=COLOR_BODY).next_to(c1, DOWN, buff=0.18, aligned_edge=LEFT)
        c3 = Text("• Skin: Smooth", font="Inter", font_size=15, color=COLOR_BODY).next_to(c2, DOWN, buff=0.18, aligned_edge=LEFT)
        card_group = VGroup(card, c_title, c1, c2, c3)

        self.play(GrowFromCenter(fruit_group), FadeIn(card_group, shift=LEFT*0.3), run_time=1.5)
        self.wait(2.0)

        # Green Apple Surprise
        green_apple = Circle(radius=1.0, fill_color=COLOR_GREEN, fill_opacity=0.95, stroke_color="#166534", stroke_width=3).move_to(apple)
        green_lbl = Text("Green Apple 🍏", font="Inter", font_size=18, color="#15803D", weight=BOLD).move_to(lbl_apple)
        c1_green = Text("• Color: Green (Changed!)", font="Inter", font_size=15, color="#15803D", weight=BOLD).move_to(c1, aligned_edge=LEFT)

        self.play(Transform(apple, green_apple), Transform(lbl_apple, green_lbl), Transform(c1, c1_green), run_time=1.2)
        self.wait(2.0)

        self.play(FadeOut(fruit_group), FadeOut(card_group), run_time=0.8)

        # Act 2: 3 Pillars Pipeline
        p1 = RoundedRectangle(corner_radius=0.2, height=3.2, width=3.2, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=2).move_to(LEFT * 4.0 + DOWN * 0.6)
        t1 = Text("1. Data", font="Inter", font_size=17, color=COLOR_BLUE, weight=BOLD).move_to(p1.get_top() + DOWN * 0.4)
        i1 = Text("📦", font_size=32).next_to(t1, DOWN, buff=0.15)
        d1 = Text("Collect real\nexamples of\napples & oranges", font="Inter", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(i1, DOWN, buff=0.2)
        g1 = VGroup(p1, t1, i1, d1)

        arr1 = Arrow(LEFT * 2.2 + DOWN * 0.6, LEFT * 1.6 + DOWN * 0.6, color="#94A3B8", stroke_width=3, buff=0)

        p2 = RoundedRectangle(corner_radius=0.2, height=3.2, width=3.2, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=2).move_to(DOWN * 0.6)
        t2 = Text("2. Training", font="Inter", font_size=17, color=COLOR_GREEN, weight=BOLD).move_to(p2.get_top() + DOWN * 0.4)
        i2 = Text("⚙️", font_size=32).next_to(t2, DOWN, buff=0.15)
        d2 = Text("Algorithm finds\nthe boundary\npattern line", font="Inter", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(i2, DOWN, buff=0.2)
        g2 = VGroup(p2, t2, i2, d2)

        arr2 = Arrow(RIGHT * 1.6 + DOWN * 0.6, RIGHT * 2.2 + DOWN * 0.6, color="#94A3B8", stroke_width=3, buff=0)

        p3 = RoundedRectangle(corner_radius=0.2, height=3.2, width=3.2, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#DDD6FE", stroke_width=2).move_to(RIGHT * 4.0 + DOWN * 0.6)
        t3 = Text("3. Prediction", font="Inter", font_size=17, color=COLOR_PURPLE, weight=BOLD).move_to(p3.get_top() + DOWN * 0.4)
        i3 = Text("🎯", font_size=32).next_to(t3, DOWN, buff=0.15)
        d3 = Text("New mystery\nfruit arrives &\nis recognized!", font="Inter", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(i3, DOWN, buff=0.2)
        g3 = VGroup(p3, t3, i3, d3)

        self.play(FadeIn(g1, shift=RIGHT*0.3), run_time=0.8)
        self.play(Create(arr1), FadeIn(g2, shift=RIGHT*0.3), run_time=0.8)
        self.play(Create(arr2), FadeIn(g3, shift=RIGHT*0.3), run_time=0.8)
        self.wait(3.0)


# =========================================================================
# Chapter 2: Understanding Data
# =========================================================================
class Chapter2Animation(Scene):
    def construct(self):
        hdr = create_header(2, "Understanding Data", "How information turns into tables, features, and maps")
        self.play(FadeIn(hdr[0], shift=DOWN*0.3), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.5)

        # Tabular Dataset
        table_card = RoundedRectangle(corner_radius=0.25, height=3.8, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(DOWN * 0.6)
        t_header = Text("Pet Dataset (Rows = Examples, Columns = Features)", font="Inter", font_size=17, color=COLOR_TITLE, weight=BOLD).move_to(table_card.get_top() + DOWN * 0.4)

        row_header = Text("Pet Name     Height (cm)    Weight (kg)    Ear Shape    Label", font="monospace", font_size=14, color=COLOR_BLUE, weight=BOLD).next_to(t_header, DOWN, buff=0.35)
        r1 = Text("Bruno 🐶         52 cm          18 kg        Floppy     Dog", font="monospace", font_size=13, color=COLOR_BODY).next_to(row_header, DOWN, buff=0.25)
        r2 = Text("Luna 🐱          24 cm           4 kg        Pointy     Cat", font="monospace", font_size=13, color=COLOR_BODY).next_to(r1, DOWN, buff=0.2)
        r3 = Text("Max 🐶           48 cm          15 kg        Floppy     Dog", font="monospace", font_size=13, color=COLOR_BODY).next_to(r2, DOWN, buff=0.2)
        r4 = Text("Milo 🐱          26 cm           5 kg        Pointy     Cat", font="monospace", font_size=13, color=COLOR_BODY).next_to(r3, DOWN, buff=0.2)

        self.play(FadeIn(table_card), Write(t_header), FadeIn(row_header), run_time=1.2)
        self.play(FadeIn(VGroup(r1, r2, r3, r4), shift=UP*0.2), run_time=1.5)
        self.wait(2.5)

        # Highlight Features vs Labels
        feat_rect = Rectangle(height=2.3, width=5.6, stroke_color=COLOR_BLUE, stroke_width=2.5, fill_color=COLOR_BLUE, fill_opacity=0.08).move_to(LEFT * 0.4 + DOWN * 1.05)
        feat_txt = Text("Features (Inputs X)", font="Inter", font_size=14, color=COLOR_BLUE, weight=BOLD).next_to(feat_rect, UP, buff=0.1)

        label_rect = Rectangle(height=2.3, width=1.5, stroke_color=COLOR_GREEN, stroke_width=2.5, fill_color=COLOR_GREEN, fill_opacity=0.08).move_to(RIGHT * 3.6 + DOWN * 1.05)
        label_txt = Text("Label (Output Y)", font="Inter", font_size=14, color=COLOR_GREEN, weight=BOLD).next_to(label_rect, UP, buff=0.1)

        self.play(Create(feat_rect), FadeIn(feat_txt), Create(label_rect), FadeIn(label_txt), run_time=1.5)
        self.wait(3.0)


# =========================================================================
# Chapter 3: Classification & Nearest Neighbors
# =========================================================================
class Chapter3Animation(Scene):
    def construct(self):
        hdr = create_header(3, "Classification", "Drawing boundaries & k-Nearest Neighbors")
        self.play(FadeIn(hdr[0]), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.0)

        axes = Axes(x_range=[0, 10, 2], y_range=[0, 10, 2], x_length=6.0, y_length=4.0, axis_config={"color": "#94A3B8", "include_numbers": True, "font_size": 13}).move_to(DOWN * 0.7 + LEFT * 0.5)
        x_lbl = Text("Size →", font="Inter", font_size=14, color=COLOR_BODY, weight=BOLD).next_to(axes.x_axis, DOWN, buff=0.25)
        y_lbl = Text("Weight →", font="Inter", font_size=14, color=COLOR_BODY, weight=BOLD).next_to(axes.y_axis, LEFT, buff=0.25).rotate(PI/2)

        self.play(Create(axes), Write(x_lbl), Write(y_lbl), run_time=1.2)

        # Red cluster (Cats) and Blue cluster (Dogs)
        cats = VGroup(*[Dot(axes.c2p(x, y), radius=0.12, color=COLOR_AMBER) for x, y in [(2, 3), (3, 2), (2.5, 4), (3.5, 3)]])
        dogs = VGroup(*[Dot(axes.c2p(x, y), radius=0.12, color=COLOR_BLUE) for x, y in [(7, 8), (8, 7), (7.5, 8.5), (8.5, 7.5)]])
        self.play(Create(cats), Create(dogs), run_time=1.2)

        # Mystery Query Point
        query = Dot(axes.c2p(3.2, 3.8), radius=0.18, color=COLOR_PURPLE)
        q_label = Text("? Mystery Animal", font="Inter", font_size=14, color=COLOR_PURPLE, weight=BOLD).next_to(query, UP, buff=0.2)
        self.play(GrowFromCenter(query), FadeIn(q_label), run_time=1.0)

        # k=3 Circle & Connectors
        circle_base = Circle(radius=1.2, color=COLOR_PURPLE, stroke_width=2).move_to(query)
        circle_knn = DashedVMobject(circle_base)
        self.play(Create(circle_knn), run_time=1.0)

        vote_txt = Text("3 Closest Neighbors: All Cats 🐱 → Prediction: Cat!", font="Inter", font_size=16, color="#065F46", weight=BOLD).to_edge(DOWN, buff=0.4)
        self.play(Write(vote_txt), run_time=1.0)
        self.wait(3.0)


# =========================================================================
# Chapter 4: Prediction and Regression
# =========================================================================
class Chapter4Animation(Scene):
    def construct(self):
        hdr = create_header(4, "Prediction and Regression", "Fitting a trendline to predict numbers")
        self.play(FadeIn(hdr[0]), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.0)

        axes = Axes(x_range=[10, 40, 10], y_range=[50, 250, 50], x_length=6.5, y_length=4.0, axis_config={"color": "#94A3B8", "include_numbers": True, "font_size": 13}).move_to(DOWN * 0.7)
        x_lbl = Text("Temperature (°C) →", font="Inter", font_size=14, color=COLOR_BODY, weight=BOLD).next_to(axes.x_axis, DOWN, buff=0.25)
        y_lbl = Text("Ice Cream Sales ($) →", font="Inter", font_size=14, color=COLOR_BODY, weight=BOLD).next_to(axes.y_axis, LEFT, buff=0.25).rotate(PI/2)

        self.play(Create(axes), Write(x_lbl), Write(y_lbl), run_time=1.2)

        # Scatter points
        data = [(15, 80), (20, 110), (25, 140), (28, 175), (32, 195), (35, 230)]
        dots = VGroup(*[Dot(axes.c2p(x, y), radius=0.12, color=COLOR_BLUE) for x, y in data])
        self.play(Create(dots), run_time=1.2)

        # Regression line y = mx + c
        p_start = axes.c2p(12, 60)
        p_end = axes.c2p(38, 240)
        line = Line(p_start, p_end, color=COLOR_RED, stroke_width=3.5)
        line_lbl = Text("Best Fit Line (y = mx + b)", font="Inter", font_size=15, color=COLOR_RED, weight=BOLD).next_to(line.get_top(), LEFT, buff=0.2)

        self.play(Create(line), FadeIn(line_lbl), run_time=1.5)
        self.wait(3.0)


# =========================================================================
# Chapter 9: Neural Networks
# =========================================================================
class Chapter9Animation(Scene):
    def construct(self):
        hdr = create_header(9, "Neural Networks", "Simulating brain neurons with weights and activations")
        self.play(FadeIn(hdr[0]), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.0)

        # Input nodes
        inputs = VGroup(*[Circle(radius=0.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BLUE, stroke_width=2.5) for _ in range(3)]).arrange(DOWN, buff=0.6).move_to(LEFT * 3.5 + DOWN * 0.6)
        in_lbl = Text("Input Layer (X)", font="Inter", font_size=14, color=COLOR_BLUE, weight=BOLD).next_to(inputs, UP, buff=0.3)

        # Hidden nodes
        hidden = VGroup(*[Circle(radius=0.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_GREEN, stroke_width=2.5) for _ in range(4)]).arrange(DOWN, buff=0.4).move_to(DOWN * 0.6)
        hid_lbl = Text("Hidden Layer (Features)", font="Inter", font_size=14, color=COLOR_GREEN, weight=BOLD).next_to(hidden, UP, buff=0.3)

        # Output node
        output = Circle(radius=0.45, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_PURPLE, stroke_width=3).move_to(RIGHT * 3.5 + DOWN * 0.6)
        out_lbl = Text("Output (Prediction)", font="Inter", font_size=14, color=COLOR_PURPLE, weight=BOLD).next_to(output, UP, buff=0.3)

        self.play(Create(inputs), Write(in_lbl), Create(hidden), Write(hid_lbl), Create(output), Write(out_lbl), run_time=1.5)

        # Connection lines
        synapses1 = VGroup(*[Line(i.get_center(), h.get_center(), stroke_color="#CBD5E1", stroke_width=1.5) for i in inputs for h in hidden])
        synapses2 = VGroup(*[Line(h.get_center(), output.get_center(), stroke_color="#CBD5E1", stroke_width=1.5) for h in hidden])

        self.play(Create(synapses1), Create(synapses2), run_time=1.5)

        # Forward signal pulse
        pulse1 = VGroup(*[Dot(i.get_center(), radius=0.1, color=COLOR_BLUE) for i in inputs])
        self.play(pulse1.animate.move_to(hidden.get_center()), run_time=1.0)
        self.play(FadeOut(pulse1), output.animate.set_fill("#DDD6FE", opacity=1.0), run_time=0.8)

        pred = Text("Predicted: Happy Dog 🐶 (98% Confidence)", font="Inter", font_size=16, color=COLOR_GREEN, weight=BOLD).to_edge(DOWN, buff=0.4)
        self.play(Write(pred), run_time=1.0)
        self.wait(3.0)


# =========================================================================
# Chapter 5: Mistakes and Learning (Loss & Gradient Descent)
# =========================================================================
class Chapter5Animation(Scene):
    def construct(self):
        hdr = create_header(5, "Mistakes and Learning", "Measuring loss & rolling down gradient descent")
        self.play(FadeIn(hdr[0]), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.0)

        # Loss Bowl (Parabola)
        axes = Axes(x_range=[-4, 4, 1], y_range=[0, 16, 4], x_length=6.0, y_length=3.8, axis_config={"color": "#94A3B8"}).move_to(DOWN * 0.7)
        bowl = axes.plot(lambda x: x**2, color=COLOR_BLUE, stroke_width=3.5)
        b_lbl = Text("Loss Bowl: Height = Size of Mistake", font="Inter", font_size=15, color=COLOR_BLUE, weight=BOLD).next_to(bowl, UP, buff=0.2)
        self.play(Create(axes), Create(bowl), FadeIn(b_lbl), run_time=1.2)

        # Marble rolling down
        marble = Dot(axes.c2p(-3, 9), radius=0.18, color=COLOR_RED)
        m_lbl = Text("High Error!", font="Inter", font_size=13, color=COLOR_RED, weight=BOLD).next_to(marble, LEFT, buff=0.2)
        self.play(GrowFromCenter(marble), FadeIn(m_lbl), run_time=0.8)

        # Roll to bottom
        p1 = axes.c2p(-1.8, 1.8**2)
        p2 = axes.c2p(-0.7, 0.7**2)
        p_bottom = axes.c2p(0, 0)

        step_txt = Text("Gradient Descent: Nudge dials downhill to minimum mistake!", font="Inter", font_size=16, color=COLOR_GREEN, weight=BOLD).to_edge(DOWN, buff=0.4)
        self.play(
            marble.animate.move_to(p_bottom),
            FadeOut(m_lbl),
            Write(step_txt),
            run_time=2.0
        )
        win_dot = Circle(radius=0.3, color=COLOR_GREEN, stroke_width=3).move_to(p_bottom)
        self.play(Create(win_dot), run_time=0.8)
        self.wait(2.5)


# =========================================================================
# Chapter 6: Training and Testing (Overfitting & Generalization)
# =========================================================================
class Chapter6Animation(Scene):
    def construct(self):
        hdr = create_header(6, "Training and Testing", "Rote memorization vs true understanding")
        self.play(FadeIn(hdr[0]), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.0)

        # 80/20 Vault Split
        v1 = RoundedRectangle(corner_radius=0.25, height=3.4, width=6.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BLUE, stroke_width=2).move_to(LEFT * 2.2 + DOWN * 0.7)
        v1_title = Text("Training Set (80%)", font="Inter", font_size=16, color=COLOR_BLUE, weight=BOLD).move_to(v1.get_top() + DOWN * 0.4)
        v1_desc = Text("Computer practices on these examples.\nAdjusts internal dials to learn patterns.", font="Inter", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(v1_title, DOWN, buff=0.3)
        g1 = VGroup(v1, v1_title, v1_desc)

        v2 = RoundedRectangle(corner_radius=0.25, height=3.4, width=3.8, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_GREEN, stroke_width=2).move_to(RIGHT * 3.4 + DOWN * 0.7)
        v2_title = Text("Test Vault (20%) 🔒", font="Inter", font_size=16, color=COLOR_GREEN, weight=BOLD).move_to(v2.get_top() + DOWN * 0.4)
        v2_desc = Text("Locked until test day!\nProves the machine can\ngeneralize to new items.", font="Inter", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(v2_title, DOWN, buff=0.3)
        g2 = VGroup(v2, v2_title, v2_desc)

        self.play(FadeIn(g1, shift=RIGHT*0.3), FadeIn(g2, shift=LEFT*0.3), run_time=1.5)

        note = Text("Golden Rule: Never test a model on data it already memorized!", font="Inter", font_size=16, color="#065F46", weight=BOLD).to_edge(DOWN, buff=0.4)
        self.play(Write(note), run_time=1.2)
        self.wait(3.0)


# =========================================================================
# Chapter 7: Learning Without Answers (Clustering)
# =========================================================================
class Chapter7Animation(Scene):
    def construct(self):
        hdr = create_header(7, "Learning Without Answers", "Clustering mystery data into natural groups")
        self.play(FadeIn(hdr[0]), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.0)

        # Unlabeled scattered gray dots
        pts = [
            (-3, 1), (-2.5, 0.5), (-3.2, 0.2), (-2.2, 1.2),  # Group 1
            (2.5, 1.2), (3.2, 0.8), (2.8, 0.2), (3.5, 1.5),  # Group 2
            (0, -1.8), (-0.6, -2.2), (0.7, -2.0), (-0.2, -2.5) # Group 3
        ]
        dots = VGroup(*[Dot(point=[x, y, 0], radius=0.14, color="#94A3B8") for x, y in pts])
        lbl = Text("Unlabeled Data: No answers provided!", font="Inter", font_size=16, color=COLOR_TITLE, weight=BOLD).next_to(dots, UP, buff=0.4)
        self.play(Create(dots), Write(lbl), run_time=1.2)
        self.wait(1.5)

        # K-Means Cluster Centroids (Magnets) appear
        m1 = Dot(point=[-2.7, 0.7, 0], radius=0.22, color=COLOR_RED)
        m2 = Dot(point=[3.0, 0.9, 0], radius=0.22, color=COLOR_BLUE)
        m3 = Dot(point=[0, -2.1, 0], radius=0.22, color=COLOR_GREEN)

        self.play(
            FadeOut(lbl),
            GrowFromCenter(m1), GrowFromCenter(m2), GrowFromCenter(m3),
            dots[0:4].animate.set_color(COLOR_RED),
            dots[4:8].animate.set_color(COLOR_BLUE),
            dots[8:12].animate.set_color(COLOR_GREEN),
            run_time=1.8
        )

        c_txt = Text("K-Means: Automatically discovered 3 distinct natural clusters!", font="Inter", font_size=16, color=COLOR_TITLE, weight=BOLD).to_edge(DOWN, buff=0.4)
        self.play(Write(c_txt), run_time=1.0)
        self.wait(3.0)


# =========================================================================
# Chapter 8: Decision Trees
# =========================================================================
class Chapter8Animation(Scene):
    def construct(self):
        hdr = create_header(8, "Decision Trees", "Asking yes/no questions like a 20-questions game")
        self.play(FadeIn(hdr[0]), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.0)

        # Root Node
        root = RoundedRectangle(corner_radius=0.2, height=0.7, width=3.8, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BLUE, stroke_width=2).move_to(UP * 1.2)
        r_txt = Text("Has feathers? 🪶", font="Inter", font_size=15, color=COLOR_BLUE, weight=BOLD).move_to(root)
        g_root = VGroup(root, r_txt)

        # Left branch (Yes -> Bird)
        arr_yes = Arrow(root.get_bottom() + LEFT * 0.8, LEFT * 3.0 + DOWN * 0.5, color=COLOR_GREEN, stroke_width=3, buff=0)
        lbl_yes = Text("YES", font="Inter", font_size=13, color=COLOR_GREEN, weight=BOLD).next_to(arr_yes, LEFT, buff=0.1)
        leaf_bird = RoundedRectangle(corner_radius=0.2, height=0.7, width=3.2, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color=COLOR_GREEN, stroke_width=2).move_to(LEFT * 3.2 + DOWN * 0.9)
        txt_bird = Text("Bird 🦜 (100% Pure)", font="Inter", font_size=14, color="#065F46", weight=BOLD).move_to(leaf_bird)
        g_bird = VGroup(leaf_bird, txt_bird)

        # Right branch (No -> Can fly?)
        arr_no = Arrow(root.get_bottom() + RIGHT * 0.8, RIGHT * 3.0 + DOWN * 0.5, color=COLOR_RED, stroke_width=3, buff=0)
        lbl_no = Text("NO", font="Inter", font_size=13, color=COLOR_RED, weight=BOLD).next_to(arr_no, RIGHT, buff=0.1)
        node_swim = RoundedRectangle(corner_radius=0.2, height=0.7, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BLUE, stroke_width=2).move_to(RIGHT * 3.2 + DOWN * 0.9)
        txt_swim = Text("Can swim? 🏊", font="Inter", font_size=15, color=COLOR_BLUE, weight=BOLD).move_to(node_swim)
        g_swim = VGroup(node_swim, txt_swim)

        self.play(FadeIn(g_root, shift=DOWN*0.3), run_time=1.0)
        self.play(Create(arr_yes), FadeIn(lbl_yes), FadeIn(g_bird), run_time=1.2)
        self.play(Create(arr_no), FadeIn(lbl_no), FadeIn(g_swim), run_time=1.2)
        self.wait(3.0)


# =========================================================================
# Chapter 10: Learning Through Rewards (Reinforcement Learning)
# =========================================================================
class Chapter10Animation(Scene):
    def construct(self):
        hdr = create_header(10, "Learning Through Rewards", "Trial and error with points, treats, and penalties")
        self.play(FadeIn(hdr[0]), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.0)

        # Robot agent
        bot = Text("🤖", font_size=48).move_to(LEFT * 4.0 + DOWN * 0.5)
        self.play(GrowFromCenter(bot), run_time=0.8)

        # Treat (+10) and Fire (-10)
        fire = Text("🔥", font_size=38).move_to(LEFT * 0.5 + UP * 0.3)
        fire_lbl = Text("Penalty (-10 pts)", font="Inter", font_size=13, color=COLOR_RED, weight=BOLD).next_to(fire, UP, buff=0.15)

        cookie = Text("🍪", font_size=38).move_to(RIGHT * 3.5 + DOWN * 0.5)
        cookie_lbl = Text("Reward (+10 pts)", font="Inter", font_size=13, color=COLOR_GREEN, weight=BOLD).next_to(cookie, UP, buff=0.15)

        self.play(FadeIn(fire), FadeIn(fire_lbl), FadeIn(cookie), FadeIn(cookie_lbl), run_time=1.0)

        # Path 1: Avoid fire, go to cookie
        path = CurvedArrow(bot.get_right() + RIGHT*0.2, cookie.get_left() + LEFT*0.2, angle=-0.5, color=COLOR_GREEN, stroke_width=4)
        self.play(Create(path), bot.animate.move_to(RIGHT * 2.5 + DOWN * 0.5), run_time=2.0)

        rl_txt = Text("Reinforcement Learning: Agent learns optimal actions by maximizing total rewards!", font="Inter", font_size=15, color=COLOR_TITLE, weight=BOLD).to_edge(DOWN, buff=0.4)
        self.play(Write(rl_txt), run_time=1.0)
        self.wait(3.0)


# =========================================================================
# Chapter 11: Real World & Ethics
# =========================================================================
class Chapter11Animation(Scene):
    def construct(self):
        hdr = create_header(11, "Real World & Ethics", "Building fair, honest, and helpful machine intelligence")
        self.play(FadeIn(hdr[0]), Write(hdr[1]), FadeIn(hdr[2]), run_time=1.5)
        self.wait(1.0)

        # Garbage In, Garbage Out
        card1 = RoundedRectangle(corner_radius=0.25, height=3.5, width=4.8, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(LEFT * 3.0 + DOWN * 0.7)
        c1_t = Text("Garbage In = Garbage Out ⚠️", font="Inter", font_size=15, color=COLOR_RED, weight=BOLD).move_to(card1.get_top() + DOWN * 0.4)
        c1_d = Text("If training data is biased,\nblurry, or unfair, the\nmodel will repeat those\nsame mistakes blindly!", font="Inter", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(c1_t, DOWN, buff=0.25)
        g1 = VGroup(card1, c1_t, c1_d)

        # Responsible AI
        card2 = RoundedRectangle(corner_radius=0.25, height=3.5, width=4.8, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=2).move_to(RIGHT * 3.0 + DOWN * 0.7)
        c2_t = Text("Responsible AI 🌟", font="Inter", font_size=15, color=COLOR_GREEN, weight=BOLD).move_to(card2.get_top() + DOWN * 0.4)
        c2_d = Text("Check for fairness,\ntest across diverse groups,\nand pair computer speed\nwith human empathy!", font="Inter", font_size=13, color=COLOR_BODY, line_spacing=1.3).next_to(c2_t, DOWN, buff=0.25)
        g2 = VGroup(card2, c2_t, c2_d)

        self.play(FadeIn(g1, shift=RIGHT*0.3), FadeIn(g2, shift=LEFT*0.3), run_time=1.5)

        motto = Text("AI is a superpower—use it to help people and solve real problems! 🚀", font="Inter", font_size=16, color=COLOR_BLUE, weight=BOLD).to_edge(DOWN, buff=0.4)
        self.play(Write(motto), run_time=1.2)
        self.wait(3.5)

