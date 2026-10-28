#!/usr/bin/env python3
"""
Chapter 2: Understanding Data — Full 5-Minute Masterclass (~300 Seconds)
Scientific, minimalist whiteboard animation for school students (Classes 5 to 10).
Rich with simple, visual, tactile examples: Sports Day, Pet Rescue, Flower Petals, and Coordinate Maps.
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


class Chapter2FiveMinuteMaster(Scene):
    def construct(self):
        # ---------------------------------------------------------------------
        # PART 1: WHAT IS DATA? (0:00 - 0:55) ~ 55 seconds
        # ---------------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 2 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.45)

        title = Text("What Is Data?", font_size=36, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.25)
        sub = Text("Information about the world, recorded so computers can compare and learn", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(10.9)

        # Example 1: Sports Day observation
        p1_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=9.6, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(DOWN * 0.5)
        p1_heading = Text("🏃 School Sports Day: Recording an Athlete", font_size=18, color=COLOR_TITLE, weight=BOLD).move_to(p1_card.get_top() + DOWN * 0.4)
        
        obs1 = Text("• Name: Aisha", font_size=16, color=COLOR_BODY).next_to(p1_heading, DOWN, buff=0.3, aligned_edge=LEFT).shift(LEFT * 2.8)
        obs2 = Text("• Age: 11 years old", font_size=16, color=COLOR_BODY).next_to(obs1, DOWN, buff=0.2, aligned_edge=LEFT)
        obs3 = Text("• 100m Dash Time: 14.8 seconds", font_size=16, color=COLOR_BODY).next_to(obs2, DOWN, buff=0.2, aligned_edge=LEFT)
        obs4 = Text("• Shoe Size: 5", font_size=16, color=COLOR_BODY).next_to(obs3, DOWN, buff=0.2, aligned_edge=LEFT)
        
        right_box = RoundedRectangle(corner_radius=0.2, height=2.4, width=3.8, fill_color="#F1F5F9", fill_opacity=1.0, stroke_color="#CBD5E1", stroke_width=1).move_to(p1_card.get_right() + LEFT * 2.3 + DOWN * 0.2)
        rb_txt1 = Text("Raw Observations", font_size=14, color=COLOR_MUTED, weight=BOLD).move_to(right_box.get_top() + DOWN * 0.35)
        rb_txt2 = Text("Numbers & Words\nrecorded from the\nreal physical world", font_size=14, color=COLOR_BODY, line_spacing=1.3).next_to(rb_txt1, DOWN, buff=0.2)
        
        p1_content = VGroup(p1_card, p1_heading, obs1, obs2, obs3, obs4, right_box, rb_txt1, rb_txt2)
        self.play(FadeOut(sub), FadeIn(p1_content, shift=UP*0.3), run_time=1.5)
        self.wait(24.6)

        # ---------------------------------------------------------------------
        # PART 2: WHAT IS AN EXAMPLE? (ROWS IN A TABLE) (0:55 - 1:50) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p2 = Text("Examples (Data Points)", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p2), FadeOut(p1_content), run_time=1.2)

        p2_sub = Text("Each single row in our table represents ONE complete item or animal", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p2_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.2)

        # Table showing 4 pet shelter examples
        tbl_bg = RoundedRectangle(corner_radius=0.25, height=3.8, width=10.6, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(DOWN * 0.6)
        
        # Headers
        th_item = Text("Animal", font_size=15, color=COLOR_MUTED, weight=BOLD).move_to(tbl_bg.get_top() + DOWN * 0.4 + LEFT * 3.8)
        th_w = Text("Weight (kg)", font_size=15, color=COLOR_MUTED, weight=BOLD).move_to(tbl_bg.get_top() + DOWN * 0.4 + LEFT * 1.3)
        th_h = Text("Height (cm)", font_size=15, color=COLOR_MUTED, weight=BOLD).move_to(tbl_bg.get_top() + DOWN * 0.4 + RIGHT * 1.3)
        th_l = Text("Category (Label)", font_size=15, color=COLOR_MUTED, weight=BOLD).move_to(tbl_bg.get_top() + DOWN * 0.4 + RIGHT * 3.8)
        th_line = Line(tbl_bg.get_left() + RIGHT * 0.4, tbl_bg.get_right() + LEFT * 0.4, stroke_color="#E2E8F0", stroke_width=1.5).next_to(th_item, DOWN, buff=0.2).set_x(tbl_bg.get_x())
        
        # Row 1 (Buddy)
        r1_bg = RoundedRectangle(corner_radius=0.15, height=0.55, width=9.8, fill_color="#EFF6FF", fill_opacity=0.9, stroke_color="#93C5FD", stroke_width=1).move_to(th_line.get_center() + DOWN * 0.4)
        r1_c1 = Text("🐶 Buddy", font_size=14, color=COLOR_TITLE, weight=BOLD).move_to(r1_bg.get_left() + RIGHT * 1.1)
        r1_c2 = Text("14.0 kg", font_size=14, color=COLOR_BODY).move_to(th_w).set_y(r1_bg.get_y())
        r1_c3 = Text("42 cm", font_size=14, color=COLOR_BODY).move_to(th_h).set_y(r1_bg.get_y())
        r1_c4 = Text("Dog", font_size=14, color=COLOR_BLUE, weight=BOLD).move_to(th_l).set_y(r1_bg.get_y())
        row1 = VGroup(r1_bg, r1_c1, r1_c2, r1_c3, r1_c4)

        # Row 2 (Luna)
        r2_bg = RoundedRectangle(corner_radius=0.15, height=0.55, width=9.8, fill_color="#FEF3C7", fill_opacity=0.9, stroke_color="#FDE68A", stroke_width=1).next_to(r1_bg, DOWN, buff=0.12)
        r2_c1 = Text("🐱 Luna", font_size=14, color=COLOR_TITLE, weight=BOLD).move_to(r2_bg.get_left() + RIGHT * 1.1)
        r2_c2 = Text("4.2 kg", font_size=14, color=COLOR_BODY).move_to(th_w).set_y(r2_bg.get_y())
        r2_c3 = Text("24 cm", font_size=14, color=COLOR_BODY).move_to(th_h).set_y(r2_bg.get_y())
        r2_c4 = Text("Cat", font_size=14, color=COLOR_AMBER, weight=BOLD).move_to(th_l).set_y(r2_bg.get_y())
        row2 = VGroup(r2_bg, r2_c1, r2_c2, r2_c3, r2_c4)

        # Row 3 (Max)
        r3_bg = RoundedRectangle(corner_radius=0.15, height=0.55, width=9.8, fill_color="#EFF6FF", fill_opacity=0.9, stroke_color="#93C5FD", stroke_width=1).next_to(r2_bg, DOWN, buff=0.12)
        r3_c1 = Text("🐶 Max", font_size=14, color=COLOR_TITLE, weight=BOLD).move_to(r3_bg.get_left() + RIGHT * 1.1)
        r3_c2 = Text("18.5 kg", font_size=14, color=COLOR_BODY).move_to(th_w).set_y(r3_bg.get_y())
        r3_c3 = Text("51 cm", font_size=14, color=COLOR_BODY).move_to(th_h).set_y(r3_bg.get_y())
        r3_c4 = Text("Dog", font_size=14, color=COLOR_BLUE, weight=BOLD).move_to(th_l).set_y(r3_bg.get_y())
        row3 = VGroup(r3_bg, r3_c1, r3_c2, r3_c3, r3_c4)

        # Row 4 (Milo)
        r4_bg = RoundedRectangle(corner_radius=0.15, height=0.55, width=9.8, fill_color="#FEF3C7", fill_opacity=0.9, stroke_color="#FDE68A", stroke_width=1).next_to(r3_bg, DOWN, buff=0.12)
        r4_c1 = Text("🐱 Milo", font_size=14, color=COLOR_TITLE, weight=BOLD).move_to(r4_bg.get_left() + RIGHT * 1.1)
        r4_c2 = Text("3.8 kg", font_size=14, color=COLOR_BODY).move_to(th_w).set_y(r4_bg.get_y())
        r4_c3 = Text("22 cm", font_size=14, color=COLOR_BODY).move_to(th_h).set_y(r4_bg.get_y())
        r4_c4 = Text("Cat", font_size=14, color=COLOR_AMBER, weight=BOLD).move_to(th_l).set_y(r4_bg.get_y())
        row4 = VGroup(r4_bg, r4_c1, r4_c2, r4_c3, r4_c4)

        tbl_group = VGroup(tbl_bg, th_item, th_w, th_h, th_l, th_line, row1, row2, row3, row4)
        self.play(FadeIn(tbl_group, shift=UP*0.25), run_time=1.5)
        self.wait(16.4)

        # Highlight Row 1 specifically
        callout_box = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.6, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=1.5).to_edge(DOWN, buff=0.15)
        callout_txt = Text("👉 One Row = ONE Example (Data Point). All columns describe that single animal!", font_size=13, color="#065F46", weight=BOLD).move_to(callout_box)
        callout = VGroup(callout_box, callout_txt)
        
        self.play(Indicate(row1, scale_factor=1.02, color=COLOR_GREEN), FadeIn(callout, shift=UP*0.2), run_time=1.5)
        self.wait(24.6)

        # ---------------------------------------------------------------------
        # PART 3: FEATURES — THE CLUES WE MEASURE (1:50 - 2:45) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p3 = Text("Features (The Clues We Measure)", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p3), FadeOut(tbl_group), FadeOut(callout), FadeOut(p2_sub), run_time=1.2)

        p3_sub = Text("A Feature is an individual property we measure as a number (Weight, Height, Width)", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p3_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.2)

        # Problem: What if we only use ONE feature?
        feat_card1 = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(LEFT * 2.8 + DOWN * 0.5)
        fc1_title = Text("1 Feature Only: Weight", font_size=16, color=COLOR_TITLE, weight=BOLD).move_to(feat_card1.get_top() + DOWN * 0.35)
        fc1_t1 = Text("Chubby Cat: 6.0 kg", font_size=15, color=COLOR_AMBER, weight=BOLD).next_to(fc1_title, DOWN, buff=0.3, aligned_edge=LEFT).shift(LEFT * 0.5)
        fc1_t2 = Text("Small Puppy: 6.0 kg", font_size=15, color=COLOR_BLUE, weight=BOLD).next_to(fc1_t1, DOWN, buff=0.2, aligned_edge=LEFT)
        fc1_warn = Text("⚠️ Confusion!\nBoth weigh 6.0 kg!\nA computer guessing by weight\nalone will fail!", font_size=13, color=COLOR_RED, line_spacing=1.2).next_to(fc1_t2, DOWN, buff=0.25, aligned_edge=LEFT)
        g_feat1 = VGroup(feat_card1, fc1_title, fc1_t1, fc1_t2, fc1_warn)

        # Solution: Add a SECOND feature!
        feat_card2 = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2.0).move_to(RIGHT * 2.8 + DOWN * 0.5)
        fc2_title = Text("2 Features: Weight + Height", font_size=16, color=COLOR_BLUE, weight=BOLD).move_to(feat_card2.get_top() + DOWN * 0.35)
        fc2_t1 = Text("Chubby Cat: 6kg, 22cm tall", font_size=15, color=COLOR_AMBER, weight=BOLD).next_to(fc2_title, DOWN, buff=0.3, aligned_edge=LEFT).shift(LEFT * 0.5)
        fc2_t2 = Text("Small Puppy: 6kg, 38cm tall", font_size=15, color=COLOR_BLUE, weight=BOLD).next_to(fc2_t1, DOWN, buff=0.2, aligned_edge=LEFT)
        fc2_success = Text("✨ Separated!\nPuppy legs are longer!\nAdding features gives the\ncomputer the missing clue!", font_size=13, color=COLOR_GREEN, line_spacing=1.2).next_to(fc2_t2, DOWN, buff=0.25, aligned_edge=LEFT)
        g_feat2 = VGroup(feat_card2, fc2_title, fc2_t1, fc2_t2, fc2_success)

        self.play(FadeIn(g_feat1, shift=LEFT*0.3), run_time=1.5)
        self.wait(19.1)
        self.play(FadeIn(g_feat2, shift=RIGHT*0.3), run_time=1.5)
        self.wait(24.6)

        # ---------------------------------------------------------------------
        # PART 4: LABELS — ATTACHING THE GROUND TRUTH (2:45 - 3:35) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p4 = Text("Labels (The True Answer)", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p4), FadeOut(g_feat1), FadeOut(g_feat2), FadeOut(p3_sub), run_time=1.2)

        p4_sub = Text("The Label is the correct answer attached to each example for training", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p4_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.2)

        # Flashcard visualization
        fc_box = RoundedRectangle(corner_radius=0.3, height=3.6, width=7.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=2).move_to(DOWN * 0.5)
        fc_top = Text("STUDY FLASHCARD FOR MACHINE LEARNING", font_size=13, color=COLOR_MUTED, weight=BOLD).move_to(fc_box.get_top() + DOWN * 0.35)
        
        fc_f1 = Text("• Clue 1 (Feature): Whiskers = Long", font_size=15, color=COLOR_BODY).next_to(fc_top, DOWN, buff=0.35, aligned_edge=LEFT).shift(LEFT * 1.8)
        fc_f2 = Text("• Clue 2 (Feature): Sound = Meow", font_size=15, color=COLOR_BODY).next_to(fc_f1, DOWN, buff=0.2, aligned_edge=LEFT)
        fc_f3 = Text("• Clue 3 (Feature): Climbing = High Trees", font_size=15, color=COLOR_BODY).next_to(fc_f2, DOWN, buff=0.2, aligned_edge=LEFT)
        
        fc_sep = Line(fc_box.get_left() + RIGHT * 0.5, fc_box.get_right() + LEFT * 0.5, stroke_color="#CBD5E1", stroke_width=1.5).next_to(fc_f3, DOWN, buff=0.25).set_x(fc_box.get_x())
        
        ans_badge = RoundedRectangle(corner_radius=0.18, height=0.65, width=4.5, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#10B981", stroke_width=1.5).next_to(fc_sep, DOWN, buff=0.2)
        ans_txt = Text("🏷️ TRUE LABEL: CAT 🐱", font_size=15, color="#065F46", weight=BOLD).move_to(ans_badge)
        g_ans = VGroup(ans_badge, ans_txt)

        g_flashcard = VGroup(fc_box, fc_top, fc_f1, fc_f2, fc_f3, fc_sep)
        self.play(FadeIn(g_flashcard, shift=UP*0.3), run_time=1.5)
        self.wait(13.7)
        self.play(GrowFromCenter(g_ans), run_time=1.2)
        self.wait(24.6)

        # ---------------------------------------------------------------------
        # PART 5: PATTERNS IN DATA — TURNING TABLES INTO MAPS (3:35 - 4:25) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p5 = Text("Patterns in Data: Turning Tables into Maps", font_size=32, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p5), FadeOut(g_flashcard), FadeOut(g_ans), FadeOut(p4_sub), run_time=1.2)

        p5_sub = Text("When we plot features on a 2D grid, data points naturally form clusters!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p5_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.2)

        # Axes
        axes = Axes(
            x_range=[0, 10, 2],
            y_range=[0, 10, 2],
            x_length=6.0,
            y_length=3.5,
            axis_config={"color": COLOR_MUTED, "stroke_width": 2},
            tips=False
        ).move_to(DOWN * 0.5 + LEFT * 1.5)

        x_lbl = Text("Weight (kg) →", font_size=14, color=COLOR_BODY).next_to(axes.x_axis, DOWN, buff=0.25)
        y_lbl = Text("Height (cm) ↑", font_size=14, color=COLOR_BODY).next_to(axes.y_axis, LEFT, buff=0.25).rotate(PI/2)

        # Clusters: Cats (low weight, low height) vs Dogs (high weight, high height)
        cat_dots = VGroup(*[
            Dot(axes.c2p(x, y), radius=0.1, color=COLOR_AMBER)
            for x, y in [(1.5, 2.0), (2.0, 1.8), (2.5, 3.0), (1.8, 3.2), (3.0, 2.5), (2.2, 2.4)]
        ])
        cat_lbl = Text("🐱 Cats Cluster", font_size=14, color=COLOR_AMBER, weight=BOLD).next_to(cat_dots, UP, buff=0.2)

        dog_dots = VGroup(*[
            Dot(axes.c2p(x, y), radius=0.1, color=COLOR_BLUE)
            for x, y in [(6.5, 7.0), (7.0, 8.0), (8.0, 6.5), (8.5, 8.2), (7.5, 7.2), (6.8, 8.5)]
        ])
        dog_lbl = Text("🐶 Dogs Cluster", font_size=14, color=COLOR_BLUE, weight=BOLD).next_to(dog_dots, UP, buff=0.2)

        # Legend card on the right
        legend_card = RoundedRectangle(corner_radius=0.2, height=3.2, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(RIGHT * 3.8 + DOWN * 0.5)
        leg_t = Text("Cluster Insight", font_size=15, color=COLOR_TITLE, weight=BOLD).move_to(legend_card.get_top() + DOWN * 0.35)
        leg_c1 = Text("• Cats stay bottom-left", font_size=13, color=COLOR_AMBER).next_to(leg_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        leg_c2 = Text("• Dogs stay top-right", font_size=13, color=COLOR_BLUE).next_to(leg_c1, DOWN, buff=0.2, aligned_edge=LEFT)
        leg_c3 = Text("• Clean space in between\n  allows drawing a line!", font_size=13, color=COLOR_GREEN, line_spacing=1.2).next_to(leg_c2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_legend = VGroup(legend_card, leg_t, leg_c1, leg_c2, leg_c3)

        self.play(Create(axes), Write(x_lbl), Write(y_lbl), run_time=1.5)
        self.play(FadeIn(cat_dots), Write(cat_lbl), FadeIn(dog_dots), Write(dog_lbl), FadeIn(g_legend, shift=LEFT*0.3), run_time=1.8)
        self.wait(24.6)

        # ---------------------------------------------------------------------
        # PART 6: SUMMARY & CHAPTER 3 TEASER (4:25 - 5:05) ~ 40 seconds
        # ---------------------------------------------------------------------
        title_p6 = Text("Summary: The Foundation of Machine Learning", font_size=32, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p6),
            FadeOut(p5_sub), FadeOut(axes), FadeOut(x_lbl), FadeOut(y_lbl),
            FadeOut(cat_dots), FadeOut(cat_lbl), FadeOut(dog_dots), FadeOut(dog_lbl), FadeOut(g_legend),
            run_time=1.5
        )

        sum_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(DOWN * 0.6)
        s1 = Text("1. Data = Real-world information recorded systematically.", font_size=16, color=COLOR_BODY).move_to(sum_card.get_top() + DOWN * 0.6 + LEFT * 0.5)
        s2 = Text("2. Examples (Rows) = Individual items or observations.", font_size=16, color=COLOR_BODY).next_to(s1, DOWN, buff=0.25, aligned_edge=LEFT)
        s3 = Text("3. Features (Columns) = Clues measured as numbers (Height, Weight).", font_size=16, color=COLOR_BODY).next_to(s2, DOWN, buff=0.25, aligned_edge=LEFT)
        s4 = Text("4. Labels = The true answer (Cat vs Dog) used to check predictions.", font_size=16, color=COLOR_BODY).next_to(s3, DOWN, buff=0.25, aligned_edge=LEFT)

        next_ch = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.2, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=1.5).next_to(s4, DOWN, buff=0.35).set_x(sum_card.get_x())
        next_txt = Text("🚀 Up Next in Chapter 3: Classification — Drawing lines to separate groups!", font_size=14, color="#1D4ED8", weight=BOLD).move_to(next_ch)

        g_sum = VGroup(sum_card, s1, s2, s3, s4, next_ch, next_txt)
        self.play(FadeIn(g_sum, shift=UP*0.25), run_time=1.5)
        self.wait(30.1)
