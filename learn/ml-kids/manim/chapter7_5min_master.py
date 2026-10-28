#!/usr/bin/env python3
"""
Chapter 7: Learning Without Answers — Full 5-Minute Masterclass (~300 Seconds)
Scientific, minimalist whiteboard animation for school students (Classes 5 to 10).
Rich with simple visual examples: Unlabeled mystery dots, Natural islands, K-Means magnet centers, Supervised vs Unsupervised.
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


class Chapter7FiveMinuteMaster(Scene):
    def construct(self):
        # ---------------------------------------------------------------------
        # PART 1: MYSTERY DATA WITHOUT LABELS (0:00 - 0:55) ~ 55 seconds
        # ---------------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 7 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.45)

        title = Text("Learning Without Answers", font_size=36, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.25)
        sub = Text("What happens when there is no teacher, and no labels are provided?", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(15.0)

        # Show grey unlabelled dots on a blank coordinate field
        axes = Axes(
            x_range=[0, 10, 2],
            y_range=[0, 10, 2],
            x_length=6.0,
            y_length=3.5,
            axis_config={"color": COLOR_MUTED, "stroke_width": 2},
            tips=False
        ).move_to(DOWN * 0.5 + LEFT * 1.5)

        # 2 clear clusters, but all drawn in plain GREY!
        c1_pts = [(1.5, 2.0), (2.2, 1.8), (2.8, 3.0), (1.8, 3.2), (3.0, 2.2), (2.4, 2.5)]
        c2_pts = [(7.0, 7.5), (8.2, 8.0), (6.8, 6.8), (8.0, 7.0), (7.5, 8.5), (8.5, 7.8)]
        all_pts = c1_pts + c2_pts

        grey_dots = VGroup(*[
            Dot(axes.c2p(x, y), radius=0.12, color=COLOR_MUTED)
            for x, y in all_pts
        ])

        mystery_card = RoundedRectangle(corner_radius=0.2, height=3.0, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(RIGHT * 3.8 + DOWN * 0.5)
        mt = Text("No Answers Given!", font_size=15, color=COLOR_TITLE, weight=BOLD).move_to(mystery_card.get_top() + DOWN * 0.35)
        mt1 = Text("• All dots are grey.", font_size=13, color=COLOR_BODY).next_to(mt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        mt2 = Text("• Nobody told the computer\n  what each dot means.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(mt1, DOWN, buff=0.2, aligned_edge=LEFT)
        mt3 = Text("• Can the computer still\n  find structure?", font_size=13, color=COLOR_BLUE, weight=BOLD, line_spacing=1.2).next_to(mt2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_mystery = VGroup(mystery_card, mt, mt1, mt2, mt3)

        self.play(Create(axes), FadeIn(grey_dots), FadeIn(g_mystery, shift=LEFT*0.3), run_time=1.8)
        self.wait(33.7)

        # ---------------------------------------------------------------------
        # PART 2: NATURAL GROUPS (CLUSTERING) (0:55 - 1:50) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p2 = Text("Natural Islands: Clustering", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p2), FadeOut(g_mystery), FadeOut(sub), run_time=1.2)

        p2_sub = Text("Even without labels, your eyes immediately spot two separate island clusters!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p2_sub, shift=UP*0.2), run_time=1.0)
        self.wait(11.2)

        # Encircle cluster 1 and cluster 2 with dashed ellipses
        c1_ring = DashedVMobject(Ellipse(width=2.5, height=2.0, color=COLOR_BLUE, stroke_width=2.5)).move_to(axes.c2p(2.3, 2.4))
        c1_lbl = Text("Cluster 1 (Bottom Left)", font_size=13, color=COLOR_BLUE, weight=BOLD).next_to(c1_ring, DOWN, buff=0.2)

        c2_ring = DashedVMobject(Ellipse(width=2.5, height=2.2, color=COLOR_ORANGE, stroke_width=2.5)).move_to(axes.c2p(7.6, 7.6))
        c2_lbl = Text("Cluster 2 (Top Right)", font_size=13, color=COLOR_ORANGE, weight=BOLD).next_to(c2_ring, UP, buff=0.2)

        self.play(Create(c1_ring), Write(c1_lbl), Create(c2_ring), Write(c2_lbl), run_time=1.8)
        self.wait(33.7)

        # ---------------------------------------------------------------------
        # PART 3: K-MEANS IN ACTION (THE MAGNETS) (1:50 - 2:45) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p3 = Text("K-Means: The Magnet Centers", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p3),
            FadeOut(c1_ring), FadeOut(c1_lbl), FadeOut(c2_ring), FadeOut(c2_lbl), FadeOut(p2_sub),
            run_time=1.2
        )

        p3_sub = Text("Step 1: Drop 2 random magnets. Step 2: Assign nearest dots. Step 3: Slide magnets to center!", font_size=15, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p3_sub, shift=UP*0.2), run_time=1.0)
        self.wait(11.2)

        # Initial random magnets (Centroids)
        m1 = Dot(axes.c2p(2.0, 6.0), radius=0.2, color=COLOR_BLUE)
        m1_x = Text("X", font_size=18, color=WHITE, weight=BOLD).move_to(m1)
        magnet1 = VGroup(m1, m1_x)

        m2 = Dot(axes.c2p(7.0, 3.0), radius=0.2, color=COLOR_ORANGE)
        m2_x = Text("X", font_size=18, color=WHITE, weight=BOLD).move_to(m2)
        magnet2 = VGroup(m2, m2_x)

        self.play(GrowFromCenter(magnet1), GrowFromCenter(magnet2), run_time=1.5)
        self.wait(11.2)

        # Assign colors based on closest magnet!
        colored_c1 = [Dot(axes.c2p(x, y), radius=0.12, color=COLOR_BLUE) for x, y in c1_pts]
        colored_c2 = [Dot(axes.c2p(x, y), radius=0.12, color=COLOR_ORANGE) for x, y in c2_pts]
        self.play(
            *[Transform(grey_dots[i], colored_c1[i]) for i in range(len(c1_pts))],
            *[Transform(grey_dots[len(c1_pts) + j], colored_c2[j]) for j in range(len(c2_pts))],
            run_time=1.5
        )
        self.wait(11.2)

        # Now slide magnets to the genuine center of each cluster!
        target_m1 = axes.c2p(2.3, 2.45)
        target_m2 = axes.c2p(7.6, 7.6)
        self.play(magnet1.animate.move_to(target_m1), magnet2.animate.move_to(target_m2), run_time=2.0)
        self.wait(33.7)

        # ---------------------------------------------------------------------
        # PART 4: SUPERVISED VS UNSUPERVISED (2:45 - 3:35) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p4 = Text("Supervised vs Unsupervised Learning", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p4),
            FadeOut(axes), FadeOut(grey_dots), FadeOut(magnet1), FadeOut(magnet2), FadeOut(p3_sub),
            run_time=1.5
        )

        p4_sub = Text("How do these two major branches of Machine Learning compare?", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p4_sub, shift=UP*0.2), run_time=1.0)
        self.wait(11.2)

        card_sup = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        st = Text("👨‍🏫 Supervised Learning", font_size=16, color=COLOR_BLUE, weight=BOLD).move_to(card_sup.get_top() + DOWN * 0.35)
        st1 = Text("• Teacher provides labels", font_size=14, color=COLOR_BODY).next_to(st, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        st2 = Text("• (Features + Answer)", font_size=13, color=COLOR_MUTED).next_to(st1, DOWN, buff=0.15, aligned_edge=LEFT)
        st3 = Text("• Learns to predict label", font_size=14, color=COLOR_BODY).next_to(st2, DOWN, buff=0.2, aligned_edge=LEFT)
        st4 = Text("• Examples: Dog vs Cat,\n  House Price Prediction", font_size=13, color=COLOR_BLUE, line_spacing=1.2).next_to(st3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_sup = VGroup(card_sup, st, st1, st2, st3, st4)

        card_unsup = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=2).move_to(RIGHT * 2.8 + DOWN * 0.5)
        ut = Text("🔍 Unsupervised Learning", font_size=16, color=COLOR_GREEN, weight=BOLD).move_to(card_unsup.get_top() + DOWN * 0.35)
        ut1 = Text("• NO labels or teacher", font_size=14, color=COLOR_BODY).next_to(ut, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        ut2 = Text("• (Features only)", font_size=13, color=COLOR_MUTED).next_to(ut1, DOWN, buff=0.15, aligned_edge=LEFT)
        ut3 = Text("• Finds hidden clusters", font_size=14, color=COLOR_BODY).next_to(ut2, DOWN, buff=0.2, aligned_edge=LEFT)
        ut4 = Text("• Examples: Customer groups,\n  Grouping news articles", font_size=13, color=COLOR_GREEN, line_spacing=1.2).next_to(ut3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_unsup = VGroup(card_unsup, ut, ut1, ut2, ut3, ut4)

        self.play(FadeIn(g_sup, shift=LEFT*0.3), FadeIn(g_unsup, shift=RIGHT*0.3), run_time=1.5)
        self.wait(37.5)

        # ---------------------------------------------------------------------
        # PART 5: SUMMARY & CHAPTER 8 TEASER (3:35 - 4:25) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p5 = Text("Summary: Learning Without Answers", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p5), FadeOut(g_sup), FadeOut(g_unsup), FadeOut(p4_sub), run_time=1.2)

        sum_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(DOWN * 0.6)
        s1 = Text("1. Unsupervised learning discovers patterns and groupings without labels.", font_size=15, color=COLOR_BODY).move_to(sum_card.get_top() + DOWN * 0.6 + LEFT * 0.5)
        s2 = Text("2. Clustering groups items that have similar features close together.", font_size=15, color=COLOR_BODY).next_to(s1, DOWN, buff=0.25, aligned_edge=LEFT)
        s3 = Text("3. K-Means uses moving magnet centers (centroids) to find cluster hearts.", font_size=15, color=COLOR_BODY).next_to(s2, DOWN, buff=0.25, aligned_edge=LEFT)
        s4 = Text("4. Used everywhere: customer recommendation, genetics, galaxy astronomy!", font_size=15, color=COLOR_BODY).next_to(s3, DOWN, buff=0.25, aligned_edge=LEFT)

        next_ch = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.2, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=1.5).next_to(s4, DOWN, buff=0.35).set_x(sum_card.get_x())
        next_txt = Text("🌳 Up Next in Chapter 8: Decision Trees — Asking 20 smart yes/no questions!", font_size=13, color="#1D4ED8", weight=BOLD).move_to(next_ch)

        g_sum = VGroup(sum_card, s1, s2, s3, s4, next_ch, next_txt)
        self.play(FadeIn(g_sum, shift=UP*0.25), run_time=1.5)
        self.wait(46.8)

