#!/usr/bin/env python3
"""
Chapter 10: Learning Through Rewards — Full 5-Minute Masterclass (~300 Seconds)
Scientific, minimalist whiteboard animation for school students (Classes 5 to 10).
Rich with simple visual examples: Bicycle training, Agent-Environment loop, Grid maze path learning, Exploration vs Exploitation.
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


class Chapter10FiveMinuteMaster(Scene):
    def construct(self):
        # ---------------------------------------------------------------------
        # PART 1: LEARNING BY TRYING (0:00 - 0:55) ~ 55 seconds
        # ---------------------------------------------------------------------
        badge = RoundedRectangle(corner_radius=0.2, height=0.6, width=5.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#BFDBFE", stroke_width=1.5)
        badge_txt = Text("CHAPTER 10 · 5-MINUTE MASTERCLASS", font_size=16, color="#1E40AF", weight=BOLD)
        badge_group = VGroup(badge, badge_txt).to_edge(UP, buff=0.45)

        title = Text("Reinforcement Learning: Rewards", font_size=34, color=COLOR_TITLE, weight=BOLD).next_to(badge_group, DOWN, buff=0.25)
        sub = Text("Learning to master skills through direct trial, error, points, and practice!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)

        self.play(FadeIn(badge_group, shift=DOWN*0.3), Write(title), run_time=1.5)
        self.play(FadeIn(sub, shift=UP*0.2), run_time=1.2)
        self.wait(15.6)

        # Analogy: Learning to ride a bicycle
        c1 = RoundedRectangle(corner_radius=0.25, height=3.4, width=9.6, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(DOWN * 0.5)
        ct = Text("🚴 How Did You Learn to Ride a Bicycle?", font_size=17, color=COLOR_TITLE, weight=BOLD).move_to(c1.get_top() + DOWN * 0.4)

        t1 = Text("• Nobody showed you 100,000 photos of bicycles to make you balance!", font_size=15, color=COLOR_BODY).next_to(ct, DOWN, buff=0.3, aligned_edge=LEFT).shift(LEFT * 2.8)
        t2 = Text("• You hopped on, wobbled, fell over (Negative Penalty: Ouch! 🩹)", font_size=15, color=COLOR_RED).next_to(t1, DOWN, buff=0.2, aligned_edge=LEFT)
        t3 = Text("• You adjusted your weight, pedaled forward (Positive Reward: Success! 🌟)", font_size=15, color=COLOR_GREEN).next_to(t2, DOWN, buff=0.2, aligned_edge=LEFT)
        t4 = Text("• Your brain learned the exact muscle actions that maximize smooth balance!", font_size=15, color=COLOR_BODY).next_to(t3, DOWN, buff=0.2, aligned_edge=LEFT)

        g_c1 = VGroup(c1, ct, t1, t2, t3, t4)
        self.play(FadeOut(sub), FadeIn(g_c1, shift=UP*0.3), run_time=1.5)
        self.wait(39.0)

        # ---------------------------------------------------------------------
        # PART 2: THE REINFORCEMENT LEARNING LOOP (0:55 - 1:50) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p2 = Text("The Reinforcement Learning Loop", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p2), FadeOut(g_c1), run_time=1.2)

        p2_sub = Text("The Agent takes an Action in the Environment, and receives a Reward and new State", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p2_sub, shift=UP*0.2), run_time=1.0)
        self.wait(11.7)

        # Agent box (Robot)
        agent_box = RoundedRectangle(corner_radius=0.2, height=2.2, width=3.5, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=2).move_to(LEFT * 3.5 + DOWN * 0.5)
        ag_t = Text("🤖 THE AGENT\n(The Learner)", font_size=15, color="#1D4ED8", weight=BOLD, line_spacing=1.2).move_to(agent_box)
        g_agent = VGroup(agent_box, ag_t)

        # Environment box (The World / Game)
        env_box = RoundedRectangle(corner_radius=0.2, height=2.2, width=3.5, fill_color="#FEF3C7", fill_opacity=1.0, stroke_color="#F59E0B", stroke_width=2).move_to(RIGHT * 3.5 + DOWN * 0.5)
        env_t = Text("🌍 ENVIRONMENT\n(Maze or Game)", font_size=15, color="#B45309", weight=BOLD, line_spacing=1.2).move_to(env_box)
        g_env = VGroup(env_box, env_t)

        # Arrows between them
        action_arrow = CurvedArrow(agent_box.get_top() + RIGHT * 0.5, env_box.get_top() + LEFT * 0.5, radius=-4.0, color=COLOR_BLUE)
        act_lbl = Text("Action (Move / Turn)", font_size=13, color=COLOR_BLUE, weight=BOLD).next_to(action_arrow, UP, buff=0.1)

        reward_arrow = CurvedArrow(env_box.get_bottom() + LEFT * 0.5, agent_box.get_bottom() + RIGHT * 0.5, radius=-4.0, color=COLOR_GREEN)
        rew_lbl = Text("Reward (+Points / -Penalty)", font_size=13, color=COLOR_GREEN, weight=BOLD).next_to(reward_arrow, DOWN, buff=0.1)

        self.play(FadeIn(g_agent), FadeIn(g_env), run_time=1.5)
        self.play(Create(action_arrow), Write(act_lbl), run_time=1.5)
        self.play(Create(reward_arrow), Write(rew_lbl), run_time=1.5)
        self.wait(39.0)

        # ---------------------------------------------------------------------
        # PART 3: GRID MAZE LEARNING (1:50 - 2:45) ~ 55 seconds
        # ---------------------------------------------------------------------
        title_p3 = Text("Trial and Error in a Grid Maze", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p3),
            FadeOut(g_agent), FadeOut(g_env), FadeOut(action_arrow), FadeOut(act_lbl),
            FadeOut(reward_arrow), FadeOut(rew_lbl), FadeOut(p2_sub),
            run_time=1.2
        )

        p3_sub = Text("Watch the robot discover the safe path through trial and error!", font_size=17, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p3_sub, shift=UP*0.2), run_time=1.0)
        self.wait(11.7)

        # 3x3 Grid
        grid_sqs = VGroup()
        for r in range(3):
            for c in range(3):
                sq = Square(side_length=1.1, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5)
                sq.move_to(LEFT * 2.8 + RIGHT * (c * 1.15) + DOWN * (r * 1.15) + UP * 0.6)
                grid_sqs.add(sq)

        # Start at (0,0) [top-left], Pit at (1,1) [center], Goal at (2,2) [bottom-right]
        start_lbl = Text("Start 🤖", font_size=12, color=COLOR_BLUE, weight=BOLD).move_to(grid_sqs[0])
        pit_sq = grid_sqs[4].set_fill("#FCA5A5", opacity=1.0)
        pit_lbl = Text("Pit 💥\n-50 pts", font_size=11, color=COLOR_RED, weight=BOLD, line_spacing=1.0).move_to(pit_sq)

        goal_sq = grid_sqs[8].set_fill("#86EFAC", opacity=1.0)
        goal_lbl = Text("Star 🌟\n+100 pts", font_size=11, color=COLOR_GREEN, weight=BOLD, line_spacing=1.0).move_to(goal_sq)

        # Right side progress card
        prog_card = RoundedRectangle(corner_radius=0.2, height=3.4, width=4.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color=COLOR_BORDER, stroke_width=1.5).move_to(RIGHT * 3.4 + DOWN * 0.5)
        pt = Text("Training History", font_size=15, color=COLOR_TITLE, weight=BOLD).move_to(prog_card.get_top() + DOWN * 0.35)
        pt1 = Text("• Episode 1: Walks right into\n  the Pit! Score: -50 ❌", font_size=12, color=COLOR_RED, line_spacing=1.2).next_to(pt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        pt2 = Text("• Episode 5: Remembers center\n  is dangerous. Tries bottom path.", font_size=12, color=COLOR_AMBER, line_spacing=1.2).next_to(pt1, DOWN, buff=0.2, aligned_edge=LEFT)
        pt3 = Text("• Episode 20: Finds clean 4-step\n  route straight to Star! 🏆", font_size=12, color=COLOR_GREEN, weight=BOLD, line_spacing=1.2).next_to(pt2, DOWN, buff=0.2, aligned_edge=LEFT)
        g_prog = VGroup(prog_card, pt, pt1, pt2, pt3)

        self.play(Create(grid_sqs), Write(start_lbl), Write(pit_lbl), Write(goal_lbl), run_time=1.8)
        self.play(FadeIn(g_prog, shift=LEFT*0.3), run_time=1.5)
        self.wait(39.0)

        # ---------------------------------------------------------------------
        # PART 4: EXPLORATION VS EXPLOITATION (2:45 - 3:35) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p4 = Text("Explore or Exploit?", font_size=36, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(
            Transform(title, title_p4),
            FadeOut(grid_sqs), FadeOut(start_lbl), FadeOut(pit_lbl), FadeOut(goal_lbl), FadeOut(g_prog), FadeOut(p3_sub),
            run_time=1.2
        )

        p4_sub = Text("Should the agent try a mysterious new path, or stick to what already worked?", font_size=16, color=COLOR_BLUE).next_to(title, DOWN, buff=0.18)
        self.play(FadeIn(p4_sub, shift=UP*0.2), run_time=1.0)
        self.wait(11.7)

        card_exp = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(LEFT * 2.8 + DOWN * 0.5)
        et = Text("🧭 Exploration (Curiosity)", font_size=16, color=COLOR_BLUE, weight=BOLD).move_to(card_exp.get_top() + DOWN * 0.35)
        et1 = Text("• Try a brand new move!", font_size=14, color=COLOR_BODY).next_to(et, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        et2 = Text("• Might discover a faster shortcut.", font_size=13, color=COLOR_MUTED).next_to(et1, DOWN, buff=0.15, aligned_edge=LEFT)
        et3 = Text("• Might stumble into a pit.", font_size=13, color=COLOR_MUTED).next_to(et2, DOWN, buff=0.15, aligned_edge=LEFT)
        et4 = Text("• Crucial in early training!", font_size=14, color=COLOR_BLUE, weight=BOLD).next_to(et3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_exp = VGroup(card_exp, et, et1, et2, et3, et4)

        card_elp = RoundedRectangle(corner_radius=0.25, height=3.4, width=5.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#86EFAC", stroke_width=2).move_to(RIGHT * 2.8 + DOWN * 0.5)
        xt = Text("🎯 Exploitation (Playing Safe)", font_size=16, color=COLOR_GREEN, weight=BOLD).move_to(card_elp.get_top() + DOWN * 0.35)
        xt1 = Text("• Use the known best path.", font_size=14, color=COLOR_BODY).next_to(xt, DOWN, buff=0.25, aligned_edge=LEFT).shift(LEFT * 0.4)
        xt2 = Text("• Guaranteed safe points.", font_size=13, color=COLOR_MUTED).next_to(xt1, DOWN, buff=0.15, aligned_edge=LEFT)
        xt3 = Text("• Won't discover new tricks.", font_size=13, color=COLOR_MUTED).next_to(xt2, DOWN, buff=0.15, aligned_edge=LEFT)
        xt4 = Text("• Used once training is solid!", font_size=14, color=COLOR_GREEN, weight=BOLD).next_to(xt3, DOWN, buff=0.2, aligned_edge=LEFT)
        g_elp = VGroup(card_elp, xt, xt1, xt2, xt3, xt4)

        self.play(FadeIn(g_exp, shift=LEFT*0.3), FadeIn(g_elp, shift=RIGHT*0.3), run_time=1.5)
        self.wait(39.0)

        # ---------------------------------------------------------------------
        # PART 5: SUMMARY & CHAPTER 11 TEASER (3:35 - 4:25) ~ 50 seconds
        # ---------------------------------------------------------------------
        title_p5 = Text("Summary: Learning Through Rewards", font_size=34, color=COLOR_TITLE, weight=BOLD).move_to(title)
        self.play(Transform(title, title_p5), FadeOut(g_exp), FadeOut(g_elp), FadeOut(p4_sub), run_time=1.2)

        sum_card = RoundedRectangle(corner_radius=0.25, height=3.6, width=10.0, fill_color=COLOR_CARD, fill_opacity=1.0, stroke_color="#93C5FD", stroke_width=2).move_to(DOWN * 0.6)
        s1 = Text("1. Reinforcement Learning learns by acting in an environment and getting feedback.", font_size=15, color=COLOR_BODY).move_to(sum_card.get_top() + DOWN * 0.6 + LEFT * 0.5)
        s2 = Text("2. Positive rewards encourage good decisions; penalties discourage mistakes.", font_size=15, color=COLOR_BODY).next_to(s1, DOWN, buff=0.25, aligned_edge=LEFT)
        s3 = Text("3. Over thousands of rounds, the agent builds an optimal policy strategy.", font_size=15, color=COLOR_BODY).next_to(s2, DOWN, buff=0.25, aligned_edge=LEFT)
        s4 = Text("4. Used to control self-driving cars, teach robots to walk, and beat chess masters!", font_size=15, color=COLOR_BODY).next_to(s3, DOWN, buff=0.25, aligned_edge=LEFT)

        next_ch = RoundedRectangle(corner_radius=0.18, height=0.6, width=9.2, fill_color="#EFF6FF", fill_opacity=1.0, stroke_color="#3B82F6", stroke_width=1.5).next_to(s4, DOWN, buff=0.35).set_x(sum_card.get_x())
        next_txt = Text("⚖️ Up Next in Chapter 11: Real-World ML, Ethics & Fairness — Building helpful AI!", font_size=13, color="#1D4ED8", weight=BOLD).move_to(next_ch)

        g_sum = VGroup(sum_card, s1, s2, s3, s4, next_ch, next_txt)
        self.play(FadeIn(g_sum, shift=UP*0.25), run_time=1.5)
        self.wait(48.7)

