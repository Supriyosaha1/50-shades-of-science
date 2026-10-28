#!/usr/bin/env python3
"""
Chapter 9: Neural Networks — Full 5-Minute Masterclass (~300 Seconds)
Scientific, minimalist whiteboard animation for school students (Classes 5 to 10).
Rich with simple visual examples: Brain neurons, Weight importance dials, Threshold activation, 3-layer network, Backprop error flow.
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


class Chapter9FiveMinuteMaster(Scene):
    def construct(self):
        # ---------------------------------------------------------------------
        # PART 1: INSPIRED BY THE BRAIN (0:00 - 0:55) ~ 55 seconds
        # ---------------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 9 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.45)

        title = Text("Neural Networks: Artificial Brains", font_size=34, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.25)
        sub = Text("Billions of simple switches working together in teams can recognize any pattern!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(15.2)

        # Biological vs Artificial comparison
        c1 = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        c1_t = Text("🧠 Human Brain Neuron", font_size=16, color=COLOR_BLUE, weight=BOLD).move_to(c1.get_top() + DOWN * 0.35)
        c1_1 = Text("• 86 Billion neurons", font_size=14, color=COLOR_BODY).next_to(c1_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        c1_2 = Text("• Dendrites receive signals", font_size=14, color=COLOR_BODY).next_to(c1_1, DOWN, buff=0.2, aligned_edge=LEFT)
        c1_3 = Text("• Synapses strengthen with practice", font_size=14, color=COLOR_BODY).next_to(c1_2, DOWN, buff=0.2, aligned_edge=LEFT)
        c1_4 = Text("• Axon fires an electric spark!", font_size=14, color=COLOR_GREEN, weight=BOLD).next_to(c1_3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_c1 = VGroup(c1, c1_t, c1_1, c1_2, c1_3, c1_4)

        c2 = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=2).move_to(RIGHT * 2.8 + DOWN * 0.5)
        c2_t = Text("⚡ Artificial Neuron", font_size=16, color=COLOR_GREEN, weight=BOLD).move_to(c2.get_top() + DOWN * 0.35)
        c2_1 = Text("• Mathematical inputs (numbers)", font_size=14, color=COLOR_BODY).next_to(c2_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        c2_2 = Text("• Weights = Importance multipliers", font_size=14, color=COLOR_BODY).next_to(c2_1, DOWN, buff=0.2, aligned_edge=LEFT)
        c2_3 = Text("• Sums everything up", font_size=14, color=COLOR_BODY).next_to(c2_2, DOWN, buff=0.2, aligned_edge=LEFT)
        c2_4 = Text("• Fires 1 (YES) or 0 (NO)!", font_size=14, color=COLOR_BLUE, weight=BOLD).next_to(c2_3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_c2 = VGroup(c2, c2_t, c2_1, c2_2, c2_3, c2_4)

        self.play(FadeIn(g_c1, shift=LEFT*0.3), FadeIn(g_c2, shift=RIGHT*0.3), run_time=1.5)
        self.wait(38.1)

        # ---------------------------------------------------------------------
        # PART 2: ANATOMY OF A SINGLE NEURON (0:55 - 1:50) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p2 = Text("Inside a Single Neuron", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p2), FadeOut(g_c1), FadeOut(g_c2), FadeOut(sub), run_time=1.2)

        p2_sub = Text("Input clues get multiplied by weights, added up, and checked against a threshold switch", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p2_sub, shift=UP*0.2), run_time=1.0)
        self.wait(11.4)

        # 2 Inputs on left
        in1 = Circle(radius=0.45, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=2).move_to(LEFT * 4.0 + UP * 0.8)
        in1_t = Text("x₁\nSunny?", font_size=11, color="#1D4ED8", weight=BOLD, line_spacing=1.0).move_to(in1)
        g_in1 = VGroup(in1, in1_t)

        in2 = Circle(radius=0.45, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=2).move_to(LEFT * 4.0 + DOWN * 1.2)
        in2_t = Text("x₂\nFriends?", font_size=11, color="#1D4ED8", weight=BOLD, line_spacing=1.0).move_to(in2)
        g_in2 = VGroup(in2, in2_t)

        # Central Neuron Body
        neuron_core = Circle(radius=1.1, fill_color="#F8FAFC", fill_opacity=1.0, stroke_color=COLOR_PURPLE, stroke_width=3).move_to(DOWN * 0.2)
        sum_lbl = Text("Sum: Σ\nw₁·x₁ + w₂·x₂", font_size=13, color=COLOR_PURPLE, weight=BOLD, line_spacing=1.1).move_to(neuron_core.get_center() + UP * 0.3)
        act_line = Line(neuron_core.get_left() + RIGHT * 0.2, neuron_core.get_right() + LEFT * 0.2, color="#E2E8F0", stroke_width=1.5).move_to(neuron_core.get_center())
        act_lbl = Text("Activation Switch", font_size=11, color=COLOR_MUTED).move_to(neuron_core.get_center() + DOWN * 0.4)
        g_neuron = VGroup(neuron_core, sum_lbl, act_line, act_lbl)

        # Connecting wires with weights
        wire1 = Line(in1.get_right(), neuron_core.get_left() + UP * 0.4, color=COLOR_BLUE, stroke_width=3)
        w1_lbl = Text("w₁ = +3", font_size=13, color=COLOR_BLUE, weight=BOLD).next_to(wire1.get_center(), UP, buff=0.1)

        wire2 = Line(in2.get_right(), neuron_core.get_left() + DOWN * 0.4, color=COLOR_BLUE, stroke_width=3)
        w2_lbl = Text("w₂ = +5", font_size=13, color=COLOR_BLUE, weight=BOLD).next_to(wire2.get_center(), DOWN, buff=0.1)

        # Output Arrow on right
        out_arrow = Arrow(neuron_core.get_right(), RIGHT * 4.0 + DOWN * 0.2, color=COLOR_GREEN, stroke_width=4, buff=0.1)
        out_badge = RoundedRectangle(corner_radius=0.18, height=0.7, width=2.5, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#10B981", stroke_width=1.5).next_to(out_arrow, RIGHT, buff=0.2)
        out_txt = Text("OUTPUT: 1\nPlay Cricket! 🏏", font_size=12, color="#065F46", weight=BOLD, line_spacing=1.1).move_to(out_badge)
        g_out = VGroup(out_arrow, out_badge, out_txt)

        self.play(FadeIn(g_in1), FadeIn(g_in2), run_time=1.2)
        self.play(Create(wire1), Write(w1_lbl), Create(wire2), Write(w2_lbl), run_time=1.5)
        self.play(GrowFromCenter(g_neuron), run_time=1.5)
        self.wait(7.6)
        self.play(Create(g_out), run_time=1.5)
        self.wait(34.3)

        # ---------------------------------------------------------------------
        # PART 3: CONNECTING NEURONS INTO LAYERS (1:50 - 2:45) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p3 = Text("Connecting Layers of Neurons", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p3),
            FadeOut(g_in1), FadeOut(g_in2), FadeOut(wire1), FadeOut(w1_lbl), FadeOut(wire2), FadeOut(w2_lbl),
            FadeOut(g_neuron), FadeOut(g_out), FadeOut(p2_sub),
            run_time=1.2
        )

        p3_sub = Text("Input Layer spots edges → Hidden Layer builds shapes → Output Layer identifies the object!", font_size=15, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p3_sub, shift=UP*0.2), run_time=1.0)
        self.wait(11.4)

        # 3 Layers: 3 inputs, 4 hidden, 2 output
        # Input Layer
        in_dots = VGroup(*[
            Circle(radius=0.3, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=2).move_to(LEFT * 3.5 + UP * (1.2 - i*1.2) + DOWN * 0.2)
            for i in range(3)
        ])
        in_lbl = Text("Input Layer\n(Pixels / Clues)", font_size=12, color="#1D4ED8", weight=BOLD, line_spacing=1.1).next_to(in_dots, DOWN, buff=0.3)

        # Hidden Layer
        hid_dots = VGroup(*[
            Circle(radius=0.3, fill_color="#FAF5FF", fill_opacity=1.0, stroke_color="#A855F7", stroke_width=2).move_to(DOWN * 0.2 + UP * (1.5 - i*1.0))
            for i in range(4)
        ])
        hid_lbl = Text("Hidden Layer\n(Shapes / Features)", font_size=12, color="#7C3AED", weight=BOLD, line_spacing=1.1).next_to(hid_dots, DOWN, buff=0.3)

        # Output Layer
        out_dots = VGroup(*[
            Circle(radius=0.3, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#10B981", stroke_width=2).move_to(RIGHT * 3.5 + UP * (0.6 - i*1.2) + DOWN * 0.2)
            for i in range(2)
        ])
        out_lbl = Text("Output Layer\n(Cat 🐱 vs Dog 🐶)", font_size=12, color="#059669", weight=BOLD, line_spacing=1.1).next_to(out_dots, DOWN, buff=0.3)

        # Dense wires
        wires = VGroup()
        for i_dot in in_dots:
            for h_dot in hid_dots:
                wires.add(Line(i_dot.get_right(), h_dot.get_left(), color="#CBD5E1", stroke_width=1.2))

        for h_dot in hid_dots:
            for o_dot in out_dots:
                wires.add(Line(h_dot.get_right(), o_dot.get_left(), color="#CBD5E1", stroke_width=1.2))

        self.play(FadeIn(in_dots), Write(in_lbl), run_time=1.2)
        self.play(Create(wires), FadeIn(hid_dots), Write(hid_lbl), FadeIn(out_dots), Write(out_lbl), run_time=2.0)
        self.wait(38.1)

        # ---------------------------------------------------------------------
        # PART 4: HOW NEURAL NETS LEARN (BACKPROPAGATION) (2:45 - 3:35) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p4 = Text("Learning: Forward Flow & Error Flow", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p4),
            FadeOut(in_dots), FadeOut(in_lbl), FadeOut(hid_dots), FadeOut(hid_lbl),
            FadeOut(out_dots), FadeOut(out_lbl), FadeOut(wires), FadeOut(p3_sub),
            run_time=1.2
        )

        p4_sub = Text("Forward Pass makes a guess → Calculate mistake → Backward Pass nudges every wire weight!", font_size=15, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p4_sub, shift=UP*0.2), run_time=1.0)
        self.wait(11.4)

        f_card = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        ft = Text("1. Forward Pass ➡️", font_size=16, color=COLOR_BLUE, weight=BOLD).move_to(f_card.get_top() + DOWN * 0.35)
        ft1 = Text("• Pixels flow into input nodes.", font_size=13, color=COLOR_BODY).next_to(ft, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        ft2 = Text("• Each neuron multiplies & sums.", font_size=13, color=COLOR_BODY).next_to(ft1, DOWN, buff=0.2, aligned_edge=LEFT)
        ft3 = Text("• Output layer produces a guess:", font_size=13, color=COLOR_BODY).next_to(ft2, DOWN, buff=0.2, aligned_edge=LEFT)
        ft4 = Text("  '80% Cat, 20% Dog'", font_size=14, color=COLOR_BLUE, weight=BOLD).next_to(ft3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_f = VGroup(f_card, ft, ft1, ft2, ft3, ft4)

        b_card = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(RIGHT * 2.8 + DOWN * 0.5)
        bt = Text("2. Backward Pass ⬅️", font_size=16, color=COLOR_RED, weight=BOLD).move_to(b_card.get_top() + DOWN * 0.35)
        bt1 = Text("• Real truth was: DOG (100%)!", font_size=13, color=COLOR_BODY).next_to(bt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        bt2 = Text("• Calculate the error gap.", font_size=13, color=COLOR_BODY).next_to(bt1, DOWN, buff=0.2, aligned_edge=LEFT)
        bt3 = Text("• Send error backwards\n  through every wire connection.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(bt2, DOWN, buff=0.2, aligned_edge=LEFT)
        bt4 = Text("• Nudge weights slightly!", font_size=14, color=COLOR_GREEN, weight=BOLD).next_to(bt3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_b = VGroup(b_card, bt, bt1, bt2, bt3, bt4)

        self.play(FadeIn(g_f, shift=LEFT*0.3), FadeIn(g_b, shift=RIGHT*0.3), run_time=1.5)
        self.wait(38.1)

        # ---------------------------------------------------------------------
        # PART 5: SUMMARY & CHAPTER 10 TEASER (3:35 - 4:25) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p5 = Text("Summary: Neural Networks", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p5), FadeOut(g_f), FadeOut(g_b), FadeOut(p4_sub), run_time=1.2)

        sum_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(DOWN * 0.6)
        s1 = Text("1. Neural networks are composed of layers of simple mathematical neurons.", font_size=15, color=COLOR_BODY).move_to(sum_card.get_top() + DOWN * 0.6 + LEFT * 0.5)
        s2 = Text("2. Weights act like volume knobs determining how important each clue is.", font_size=15, color=COLOR_BODY).next_to(s1, DOWN, buff=0.25, aligned_edge=LEFT)
        s3 = Text("3. Layers combine basic features (edges) into complex concepts (faces & voices).", font_size=15, color=COLOR_BODY).next_to(s2, DOWN, buff=0.25, aligned_edge=LEFT)
        s4 = Text("4. Learning works by nudging weights step by step through Backpropagation.", font_size=15, color=COLOR_BODY).next_to(s3, DOWN, buff=0.25, aligned_edge=LEFT)

        next_ch = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.2, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=1.5).next_to(s4, DOWN, buff=0.35).set_x(sum_card.get_x())
        next_txt = Text("🚀 Up Next in Chapter 10: Learning Through Rewards — Trial and error like a video game!", font_size=13, color="#1D4ED8", weight=BOLD).move_to(next_ch)

        g_sum = VGroup(sum_card, s1, s2, s3, s4, next_ch, next_txt)
        self.play(FadeIn(g_sum, shift=UP*0.25), run_time=1.5)
        self.wait(47.6)

