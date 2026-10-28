#!/usr/bin/env python3
"""
Chapter 11: Real-World Machine Learning & Ethics — Full 5-Minute Masterclass (~300 Seconds)
Scientific, minimalist whiteboard animation for school students (Classes 5 to 10).
Rich with simple visual examples: Everyday apps, Daytime/Nighttime car data flaw, Voice recognition bias, Graduation pledge.
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


class Chapter11FiveMinuteMaster(Scene):
    def construct(self):
        # ---------------------------------------------------------------------
        # PART 1: MACHINE LEARNING IN EVERYDAY LIFE (0:00 - 0:55) ~ 55 seconds
        # ---------------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 11 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.45)

        title = Text("Machine Learning in the Real World", font_size=34, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.25)
        sub = Text("From your phone to hospital doctors — ML helps humans solve difficult problems!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(16.1)

        # 4 Everyday Examples
        g_apps = VGroup()
        app_data = [
            ("🎙️ Voice Assistants", "Turning soundwaves into words"),
            ("📷 Smartphone Cameras", "Auto-focusing on human faces"),
            ("🗺️ Map Navigation", "Predicting traffic jams in real time"),
            ("🏥 Healthcare & Science", "Helping doctors detect illnesses early")
        ]
        for i, (head, desc) in enumerate(app_data):
            col = i % 2
            row = i // 2
            box = RoundedRectangle(corner_radius=0.2, height=1.5, width=4.8, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5)
            box.move_to(LEFT * 2.8 + RIGHT * (col * 5.6) + DOWN * (0.1 + row * 1.8))
            h = Text(head, font_size=15, color=COLOR_TITLE, weight=BOLD).move_to(box.get_top() + DOWN * 0.35)
            d = Text(desc, font_size=12, color=COLOR_MUTED).next_to(h, DOWN, buff=0.2)
            g_apps.add(VGroup(box, h, d))

        self.play(FadeOut(sub), FadeIn(g_apps, shift=UP*0.3), run_time=1.5)
        self.wait(40.2)

        # ---------------------------------------------------------------------
        # PART 2: DATA QUALITY — GARBAGE IN, GARBAGE OUT (0:55 - 1:50) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p2 = Text("Data Quality: Garbage In, Garbage Out", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p2), FadeOut(g_apps), run_time=1.2)

        p2_sub = Text("An ML model only learns what is inside its training data — no more, no less!", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p2_sub, shift=UP*0.2), run_time=1.0)
        self.wait(12.0)

        c_train = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        ct_t = Text("☀️ Training Data (Flawed)", font_size=16, color=COLOR_RED, weight=BOLD).move_to(c_train.get_top() + DOWN * 0.35)
        ct_1 = Text("• Self-driving car camera", font_size=14, color=COLOR_BODY).next_to(ct_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        ct_2 = Text("• Trained on 50,000 photos...", font_size=13, color=COLOR_BODY).next_to(ct_1, DOWN, buff=0.15, aligned_edge=LEFT)
        ct_3 = Text("  ALL taken on sunny afternoons!", font_size=13, color=COLOR_RED, weight=BOLD).next_to(ct_2, DOWN, buff=0.15, aligned_edge=LEFT)
        ct_4 = Text("• Zero night photos!\n• Zero heavy rain photos!", font_size=13, color=COLOR_MUTED, line_spacing=1.2).next_to(ct_3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_ctrain = VGroup(c_train, ct_t, ct_1, ct_2, ct_3, ct_4)

        c_test = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(RIGHT * 2.8 + DOWN * 0.5)
        cte_t = Text("🌧️ Real World Deployment", font_size=16, color=COLOR_TITLE, weight=BOLD).move_to(c_test.get_top() + DOWN * 0.35)
        cte_1 = Text("• Car drives at midnight in rain.", font_size=13, color=COLOR_BODY).next_to(cte_t, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        cte_2 = Text("• Computer gets completely\n  confused by headlight glare!", font_size=13, color=COLOR_RED, line_spacing=1.2).next_to(cte_1, DOWN, buff=0.2, aligned_edge=LEFT)
        cte_3 = Text("⚠️ If data is incomplete,\npredictions will be dangerously wrong!", font_size=13, color=COLOR_RED, weight=BOLD, line_spacing=1.2).next_to(cte_2, DOWN, buff=0.25, aligned_edge=LEFT)
        g_ctest = VGroup(c_test, cte_t, cte_1, cte_2, cte_3)

        self.play(FadeIn(g_ctrain, shift=LEFT*0.3), FadeIn(g_ctest, shift=RIGHT*0.3), run_time=1.5)
        self.wait(40.2)

        # ---------------------------------------------------------------------
        # PART 3: BIAS AND FAIRNESS (1:50 - 2:45) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p3 = Text("What Is Bias? Ensuring Fairness", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p3), FadeOut(g_ctrain), FadeOut(g_ctest), FadeOut(p2_sub), run_time=1.2)

        p3_sub = Text("When an algorithm is unfair, the problem is almost always biased training data!", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p3_sub, shift=UP*0.2), run_time=1.0)
        self.wait(12.0)

        bias_card = RoundedRectangle(corner_radius=0.25, height=3.4, width=9.6, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(DOWN * 0.5)
        bt = Text("🗣️ The Voice Assistant Example", font_size=17, color=COLOR_TITLE, weight=BOLD).move_to(bias_card.get_top() + DOWN * 0.4)

        b1 = Text("• A company tests their smart speaker: It understands adult parents 99% of the time.", font_size=14, color=COLOR_BODY).next_to(bt, DOWN, buff=0.3, aligned_edge=LEFT).shift(LEFT * 2.8)
        b2 = Text("• But when a 7-year-old child speaks, it fails half the time!", font_size=14, color=COLOR_RED).next_to(b1, DOWN, buff=0.2, aligned_edge=LEFT)
        b3 = Text("• Why? The engineers only recorded adults when collecting voice samples!", font_size=14, color=COLOR_BODY).next_to(b2, DOWN, buff=0.2, aligned_edge=LEFT)

        fix_box = RoundedRectangle(corner_radius=0.18, height=0.65, width=9.0, fill_color="#ECFDF5", fill_opacity=1.0, stroke_color="#10B981", stroke_width=1.5).next_to(b3, DOWN, buff=0.25).set_x(bias_card.get_x())
        fix_txt = Text("✨ The Fix: Collect training voices from kids of all accents and pitches fairly!", font_size=13, color="#065F46", weight=BOLD).move_to(fix_box)
        g_fix = VGroup(fix_box, fix_txt)

        g_bias = VGroup(bias_card, bt, b1, b2, b3, g_fix)
        self.play(FadeIn(g_bias, shift=UP*0.3), run_time=1.5)
        self.wait(40.2)

        # ---------------------------------------------------------------------
        # PART 4: WHAT ML CAN AND CANNOT DO (2:45 - 3:35) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p4 = Text("What ML Can and CANNOT Do", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p4), FadeOut(g_bias), FadeOut(p3_sub), run_time=1.2)

        p4_sub = Text("Machine learning is a mathematical tool — not a magic sentient human mind!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p4_sub, shift=UP*0.2), run_time=1.0)
        self.wait(12.0)

        card_can = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#86EFAC", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        cant = Text("✅ What ML Is Great At", font_size=16, color=COLOR_GREEN, weight=BOLD).move_to(card_can.get_top() + DOWN * 0.35)
        cant1 = Text("• Spotting subtle statistical patterns", font_size=13, color=COLOR_BODY).next_to(cant, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        cant2 = Text("• Processing millions of items in seconds", font_size=13, color=COLOR_BODY).next_to(cant1, DOWN, buff=0.2, aligned_edge=LEFT)
        cant3 = Text("• Performing repetitive math without fatigue", font_size=13, color=COLOR_BODY).next_to(cant2, DOWN, buff=0.2, aligned_edge=LEFT)
        cant4 = Text("• Calculating probability confidence", font_size=13, color=COLOR_GREEN, weight=BOLD).next_to(cant3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_can = VGroup(card_can, cant, cant1, cant2, cant3, cant4)

        card_cant = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#FCA5A5", stroke_width=2).move_to(RIGHT * 2.8 + DOWN * 0.5)
        cnt = Text("❌ What ML CANNOT Do", font_size=16, color=COLOR_RED, weight=BOLD).move_to(card_cant.get_top() + DOWN * 0.35)
        cnt1 = Text("• Cannot feel empathy or emotions", font_size=13, color=COLOR_BODY).next_to(cnt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        cnt2 = Text("• Has NO common sense about the world", font_size=13, color=COLOR_BODY).next_to(cnt1, DOWN, buff=0.2, aligned_edge=LEFT)
        cnt3 = Text("• Cannot understand 'meaning' or truth", font_size=13, color=COLOR_BODY).next_to(cnt2, DOWN, buff=0.2, aligned_edge=LEFT)
        cnt4 = Text("• Needs human wisdom & ethical guidance!", font_size=13, color=COLOR_RED, weight=BOLD).next_to(cnt3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_cant = VGroup(card_cant, cnt, cnt1, cnt2, cnt3, cnt4)

        self.play(FadeIn(g_can, shift=LEFT*0.3), FadeIn(g_cant, shift=RIGHT*0.3), run_time=1.5)
        self.wait(40.2)

        # ---------------------------------------------------------------------
        # PART 5: GRADUATION & THE YOUNG SCIENTIST PLEDGE (3:35 - 4:25) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p5 = Text("🎓 Congratulations, Young AI Scientist!", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p5), FadeOut(g_can), FadeOut(g_cant), FadeOut(p4_sub), run_time=1.2)

        grad_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=2).move_to(DOWN * 0.6)
        gt = Text("Your Machine Learning Pledge 🌟", font_size=17, color=COLOR_BLUE, weight=BOLD).move_to(grad_card.get_top() + DOWN * 0.4)
        gp1 = Text("1. Stay Curious: Ask how algorithms work behind the screen.", font_size=15, color=COLOR_BODY).next_to(gt, DOWN, buff=0.3, aligned_edge=LEFT).shift(LEFT * 2.2)
        gp2 = Text("2. Demand Good Data: Always check for missing voices and bias.", font_size=15, color=COLOR_BODY).next_to(gp1, DOWN, buff=0.25, aligned_edge=LEFT)
        gp3 = Text("3. Build for Good: Create technology that helps people, animals, and planet Earth!", font_size=15, color=COLOR_GREEN, weight=BOLD).next_to(gp2, DOWN, buff=0.25, aligned_edge=LEFT)

        final_badge = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.2, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=1.5).next_to(gp3, DOWN, buff=0.3).set_x(grad_card.get_x())
        final_txt = Text("🎉 You have completed all 11 Chapters of the Machine Learning Visual Textbook!", font_size=13, color="#1D4ED8", weight=BOLD).move_to(final_badge)

        g_grad = VGroup(grad_card, gt, gp1, gp2, gp3, final_badge, final_txt)
        self.play(FadeIn(g_grad, shift=UP*0.25), run_time=1.5)
        self.wait(50.2)

