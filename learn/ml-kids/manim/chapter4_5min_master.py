#!/usr/bin/env python3
"""
Chapter 4: Prediction and Regression — Full 5-Minute Masterclass (~300 Seconds)
Scientific, minimalist whiteboard animation for school students (Classes 5 to 10).
Rich with simple visual examples: Summer Ice Cream Sales, Trendline fitting, Residual vertical gaps, Tilt and Height.
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


class Chapter4FiveMinuteMaster(Scene):
    def construct(self):
        # ---------------------------------------------------------------------
        # PART 1: WHAT IS PREDICTION VS CLASSIFICATION? (0:00 - 0:55) ~ 55 seconds
        # ---------------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 4 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.45)

        title = Text("What Is Prediction?", font_size=36, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.25)
        sub = Text("Instead of picking a category (Cat vs Dog), we estimate an exact number!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(11.6)

        # Comparison cards: Classification vs Regression
        c1 = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        c1_t = Text("🏷️ Classification", font_size=16, color=COLOR_BLUE, weight=BOLD).move_to(c1.get_top() + DOWN * 0.35)
        c1_1 = Text("Answers: 'Which category?'", font_size=14, color=COLOR_TITLE, weight=BOLD).next_to(c1_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        c1_2 = Text("• Apple or Orange?", font_size=14, color=COLOR_BODY).next_to(c1_1, DOWN, buff=0.2, aligned_edge=LEFT)
        c1_3 = Text("• Spam or Important Email?", font_size=14, color=COLOR_BODY).next_to(c1_2, DOWN, buff=0.2, aligned_edge=LEFT)
        c1_4 = Text("• Pass or Fail?", font_size=14, color=COLOR_BODY).next_to(c1_3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_c1 = VGroup(c1, c1_t, c1_1, c1_2, c1_3, c1_4)

        c2 = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#A7F3D0", stroke_width=2).move_to(RIGHT * 2.8 + DOWN * 0.5)
        c2_t = Text("📈 Regression (Prediction)", font_size=16, color=COLOR_GREEN, weight=BOLD).move_to(c2.get_top() + DOWN * 0.35)
        c2_1 = Text("Answers: 'How much / What number?'", font_size=14, color=COLOR_TITLE, weight=BOLD).next_to(c2_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        c2_2 = Text("• How many ice creams will sell?", font_size=14, color=COLOR_BODY).next_to(c2_1, DOWN, buff=0.2, aligned_edge=LEFT)
        c2_3 = Text("• What will tomorrow's temperature be?", font_size=14, color=COLOR_BODY).next_to(c2_2, DOWN, buff=0.2, aligned_edge=LEFT)
        c2_4 = Text("• How tall will a plant grow?", font_size=14, color=COLOR_BODY).next_to(c2_3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_c2 = VGroup(c2, c2_t, c2_1, c2_2, c2_3, c2_4)

        self.play(FadeIn(g_c1, shift=LEFT*0.3), FadeIn(g_c2, shift=RIGHT*0.3), run_time=1.5)
        self.wait(29.0)

        # ---------------------------------------------------------------------
        # PART 2: FINDING PATTERNS IN A SCATTER PLOT (0:55 - 1:50) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p2 = Text("Finding the Pattern: Ice Cream Sales", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p2), FadeOut(g_c1), FadeOut(g_c2), FadeOut(sub), run_time=1.2)

        p2_sub = Text("Does outside temperature affect how many ice cream cones people buy?", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p2_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.7)

        axes = Axes(
            x_range=[20, 36, 4],
            y_range=[50, 250, 50],
            x_length=6.5,
            y_length=3.5,
            axis_config={"color": COLOR_MUTED, "stroke_width": 2},
            tips=False
        ).move_to(DOWN * 0.5 + LEFT * 1.5)

        ax_x = Text("Temperature (°C) →", font_size=13, color=COLOR_BODY).next_to(axes.x_axis, DOWN, buff=0.2)
        ax_y = Text("Ice Creams Sold ↑", font_size=13, color=COLOR_BODY).next_to(axes.y_axis, LEFT, buff=0.2).rotate(PI/2)

        # Data points for Monday through Sunday
        # (Temp, Cones): (22, 70), (25, 100), (28, 140), (30, 165), (32, 195), (34, 220), (26, 120)
        pts_data = [(22, 70), (25, 100), (26, 120), (28, 140), (30, 165), (32, 195), (34, 220)]
        scatter_dots = VGroup(*[
            Dot(axes.c2p(t, c), radius=0.11, color=COLOR_BLUE)
            for t, c in pts_data
        ])

        obs_card = RoundedRectangle(corner_radius=0.2, height=3.0, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(RIGHT * 3.8 + DOWN * 0.5)
        ot = Text("Notice the Pattern", font_size=15, color=COLOR_TITLE, weight=BOLD).move_to(obs_card.get_top() + DOWN * 0.35)
        ot1 = Text("• Hotter days (34°C)\n  sell over 200 cones!", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(ot, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        ot2 = Text("• Cool days (22°C)\n  sell under 100 cones.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(ot1, DOWN, buff=0.2, aligned_edge=LEFT)
        ot3 = Text("• Strong positive trend!", font_size=13, color=COLOR_GREEN, weight=BOLD).next_to(ot2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_obs = VGroup(obs_card, ot, ot1, ot2, ot3)

        self.play(Create(axes), Write(ax_x), Write(ax_y), run_time=1.5)
        self.play(FadeIn(scatter_dots), FadeIn(g_obs, shift=LEFT*0.3), run_time=1.5)
        self.wait(26.1)

        # ---------------------------------------------------------------------
        # PART 3: MAKING PREDICTIONS WITH A LINE (1:50 - 2:45) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p3 = Text("Making Predictions with a Trendline", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p3), FadeOut(g_obs), FadeOut(p2_sub), run_time=1.2)

        p3_sub = Text("We draw a straight line that captures the trend. Now we can predict ANY temperature!", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p3_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.7)

        # Best fit line: y approx 12.5 * x - 210
        # at 20 -> 40, at 36 -> 240
        line_best = Line(axes.c2p(20, 40), axes.c2p(36, 240), color=COLOR_GREEN, stroke_width=3.5)
        self.play(Create(line_best), run_time=1.5)
        self.wait(8.7)

        # Prediction query: What if tomorrow is 31°C?
        q_temp = 31
        q_pred_y = 177.5
        v_trace = DashedLine(axes.c2p(q_temp, 50), axes.c2p(q_temp, q_pred_y), color=COLOR_PURPLE, stroke_width=2.5)
        h_trace = DashedLine(axes.c2p(q_temp, q_pred_y), axes.c2p(20, q_pred_y), color=COLOR_PURPLE, stroke_width=2.5)
        pred_dot = Dot(axes.c2p(q_temp, q_pred_y), radius=0.15, color=COLOR_PURPLE)

        pred_card = RoundedRectangle(corner_radius=0.2, height=3.0, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#C084FC", stroke_width=2).move_to(RIGHT * 3.8 + DOWN * 0.5)
        pt = Text("Tomorrow: 31°C", font_size=15, color=COLOR_PURPLE, weight=BOLD).move_to(pred_card.get_top() + DOWN * 0.35)
        pt1 = Text("1. Go up from 31°C", font_size=13, color=COLOR_BODY).next_to(pt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        pt2 = Text("2. Hit the green line", font_size=13, color=COLOR_BODY).next_to(pt1, DOWN, buff=0.2, aligned_edge=LEFT)
        pt3 = Text("3. Look left at sales:", font_size=13, color=COLOR_BODY).next_to(pt2, DOWN, buff=0.2, aligned_edge=LEFT)
        pt_res = Text("👉 178 Cones!", font_size=16, color=COLOR_GREEN, weight=BOLD).next_to(pt3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_pred = VGroup(pred_card, pt, pt1, pt2, pt3, pt_res)

        self.play(Create(v_trace), GrowFromCenter(pred_dot), run_time=1.5)
        self.play(Create(h_trace), FadeIn(g_pred, shift=LEFT*0.3), run_time=1.5)
        self.wait(26.1)

        # ---------------------------------------------------------------------
        # PART 4: MOVING AND TILTING THE LINE (2:45 - 3:35) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p4 = Text("Changing the Line: Tilt and Height", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p4),
            FadeOut(v_trace), FadeOut(h_trace), FadeOut(pred_dot), FadeOut(g_pred), FadeOut(p3_sub),
            run_time=1.2
        )

        p4_sub = Text("Every straight line has two controls: Slope (Tilt) and Intercept (Height)", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p4_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.7)

        # Show bad line 1: Flat line
        flat_line = Line(axes.c2p(20, 140), axes.c2p(36, 140), color=COLOR_RED, stroke_width=3)
        flat_lbl = Text("Flat Line (Slope = 0) ❌ Ignores temperature!", font_size=13, color=COLOR_RED, weight=BOLD).next_to(axes, UP, buff=0.15)
        self.play(Transform(line_best, flat_line), FadeIn(flat_lbl), run_time=1.5)
        self.wait(14.5)

        # Show bad line 2: Way too steep
        steep_line = Line(axes.c2p(20, 50), axes.c2p(36, 350), color=COLOR_AMBER, stroke_width=3)
        steep_lbl = Text("Too Steep! ❌ Over-predicts hot days wildly!", font_size=13, color=COLOR_AMBER, weight=BOLD).move_to(flat_lbl)
        self.play(Transform(line_best, steep_line), Transform(flat_lbl, steep_lbl), run_time=1.5)
        self.wait(14.5)

        # Back to best fit
        line_good = Line(axes.c2p(20, 40), axes.c2p(36, 240), color=COLOR_GREEN, stroke_width=3.5)
        good_lbl = Text("Just Right! ✨ Follows the dots naturally", font_size=13, color=COLOR_GREEN, weight=BOLD).move_to(flat_lbl)
        self.play(Transform(line_best, line_good), Transform(flat_lbl, good_lbl), run_time=1.5)
        self.wait(17.4)

        # ---------------------------------------------------------------------
        # PART 5: MEASURING RESIDUALS (MISTAKES TO THE LINE) (3:35 - 4:25) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p5 = Text("Measuring Residuals: The Vertical Gaps", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p5), FadeOut(flat_lbl), FadeOut(p4_sub), run_time=1.2)

        p5_sub = Text("For every data point, the distance from the dot to the line is its ERROR (Residual)", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p5_sub, shift=UP*0.2), run_time=1.0)
        self.wait(8.7)

        # Draw red dashed residual lines from each point to the green line
        residual_lines = VGroup()
        for t, c in pts_data:
            line_y = 12.5 * t - 210
            r_line = DashedLine(axes.c2p(t, c), axes.c2p(t, line_y), color=COLOR_RED, stroke_width=2.5)
            residual_lines.add(r_line)

        res_card = RoundedRectangle(corner_radius=0.2, height=3.0, width=3.4, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(RIGHT * 3.8 + DOWN * 0.5)
        rt = Text("The Residual Rule", font_size=15, color=COLOR_TITLE, weight=BOLD).move_to(res_card.get_top() + DOWN * 0.35)
        rt1 = Text("• Red dashed gaps =\n  prediction mistakes.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(rt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.3)
        rt2 = Text("• Dot above line:\n  Model under-guessed.", font_size=13, color=COLOR_BODY, line_spacing=1.2).next_to(rt1, DOWN, buff=0.2, aligned_edge=LEFT)
        rt3 = Text("• Linear Regression\n  makes these gaps\n  as tiny as possible!", font_size=13, color=COLOR_GREEN, line_spacing=1.2).next_to(rt2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_res = VGroup(res_card, rt, rt1, rt2, rt3)

        self.play(Create(residual_lines), FadeIn(g_res, shift=LEFT*0.3), run_time=1.8)
        self.wait(29.0)

        # ---------------------------------------------------------------------
        # PART 6: SUMMARY & CHAPTER 5 TEASER (4:25 - 5:05) ~ 40 seconds
        # ---------------------------------------------------------------------
        title_p6 = Text("Summary: Prediction and Regression", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p6),
            FadeOut(axes), FadeOut(ax_x), FadeOut(ax_y),
            FadeOut(scatter_dots), FadeOut(line_best), FadeOut(residual_lines), FadeOut(g_res), FadeOut(p5_sub),
            run_time=1.5
        )

        sum_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(DOWN * 0.6)
        s1 = Text("1. Regression predicts continuous numbers (Temperature, Sales, Height).", font_size=15, color=COLOR_BODY).move_to(sum_card.get_top() + DOWN * 0.6 + LEFT * 0.5)
        s2 = Text("2. Scatter plots show whether two variables move together in a pattern.", font_size=15, color=COLOR_BODY).next_to(s1, DOWN, buff=0.25, aligned_edge=LEFT)
        s3 = Text("3. A trendline allows predicting answers for brand new inputs.", font_size=15, color=COLOR_BODY).next_to(s2, DOWN, buff=0.25, aligned_edge=LEFT)
        s4 = Text("4. The best line is the one that minimizes all vertical error gaps (Residuals).", font_size=15, color=COLOR_BODY).next_to(s3, DOWN, buff=0.25, aligned_edge=LEFT)

        next_ch = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.2, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=1.5).next_to(s4, DOWN, buff=0.35).set_x(sum_card.get_x())
        next_txt = Text("🎯 Up Next in Chapter 5: Mistakes & Learning — Rolling down the error bowl!", font_size=13, color="#1D4ED8", weight=BOLD).move_to(next_ch)

        g_sum = VGroup(sum_card, s1, s2, s3, s4, next_ch, next_txt)
        self.play(FadeIn(g_sum, shift=UP*0.25), run_time=1.5)
        self.wait(31.8)

