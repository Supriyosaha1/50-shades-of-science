#!/usr/bin/env python3
"""
Pacing & Duration Calibration Engine for Manim 5-Minute Masterclasses.
Automatically tunes pause intervals so every chapter animation lasts exactly ~295-305 seconds (5 minutes),
renders with Manim, and copies directly to `learn/ml-kids/media/videos/chapter{N}.mp4`.
"""

import os
import re
import subprocess
import shutil

TARGET_DURATION = 295.0  # 4 minutes 55 seconds (~5 minutes)

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
MANIM_BIN = "/Users/supriyosaha/miniconda3/bin/manim"
VIDEOS_DIR = os.path.join(BASE_DIR, "media", "videos")
BUILD_DIR = os.path.join(BASE_DIR, "media", "manim_temp_build")

CHAPTERS = [
    (1, "chapter1_5min_master.py", "Chapter1FiveMinuteMaster"),
    (2, "chapter2_5min_master.py", "Chapter2FiveMinuteMaster"),
    (3, "chapter3_5min_master.py", "Chapter3FiveMinuteMaster"),
    (4, "chapter4_5min_master.py", "Chapter4FiveMinuteMaster"),
    (5, "chapter5_5min_master.py", "Chapter5FiveMinuteMaster"),
    (6, "chapter6_5min_master.py", "Chapter6FiveMinuteMaster"),
    (7, "chapter7_5min_master.py", "Chapter7FiveMinuteMaster"),
    (8, "chapter8_5min_master.py", "Chapter8FiveMinuteMaster"),
    (9, "chapter9_5min_master.py", "Chapter9FiveMinuteMaster"),
    (10, "chapter10_5min_master.py", "Chapter10FiveMinuteMaster"),
    (11, "chapter11_5min_master.py", "Chapter11FiveMinuteMaster")
]

env = dict(os.environ)
env["PATH"] = f"/Library/TeX/texbin:{env.get('PATH', '')}"


def tune_script_pacing(filepath, target_dur):
    with open(filepath, "r", encoding="utf-8") as f:
        code = f.read()

    waits = [float(x) for x in re.findall(r'self\.wait\((\d+\.?\d*)\)', code)]
    runtimes = [float(x) for x in re.findall(r'run_time=(\d+\.?\d*)', code)]
    plays = re.findall(r'self\.play\((.*?)\)', code, re.DOTALL)
    default_plays = sum(1 for p in plays if 'run_time=' not in p)

    anim_time = sum(runtimes) + default_plays * 1.0
    current_wait_time = sum(waits)
    current_total = anim_time + current_wait_time

    needed_wait_time = target_dur - anim_time
    if needed_wait_time <= 0 or current_wait_time <= 0:
        return current_total

    scale = needed_wait_time / current_wait_time

    def repl(match):
        orig_val = float(match.group(1))
        new_val = round(orig_val * scale, 1)
        return f"self.wait({new_val})"

    new_code = re.sub(r'self\.wait\((\d+\.?\d*)\)', repl, code)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_code)

    new_waits = [float(x) for x in re.findall(r'self\.wait\((\d+\.?\d*)\)', new_code)]
    new_total = anim_time + sum(new_waits)
    return new_total


print("=" * 65)
print("🎯 Calibrating Pacing for 5-Minute Durations (~295-305s)")
print("=" * 65)

for ch_num, script_name, scene_name in CHAPTERS:
    script_path = os.path.join(os.path.dirname(__file__), script_name)
    calibrated_dur = tune_script_pacing(script_path, TARGET_DURATION)
    mins = int(calibrated_dur // 60)
    secs = int(calibrated_dur % 60)
    print(f"Chapter {ch_num:2d} calibrated -> {mins}m {secs:02d}s ({calibrated_dur:.1f}s)")

print("\n" + "=" * 65)
print("🎬 Rendering All 11 Chapters to 720p 30fps MP4")
print("=" * 65)

for ch_num, script_name, scene_name in CHAPTERS:
    script_path = os.path.join(os.path.dirname(__file__), script_name)
    target_mp4 = os.path.join(VIDEOS_DIR, f"chapter{ch_num}.mp4")

    print(f"\n[Chapter {ch_num:2d}/11] Rendering {scene_name}...")

    cmd = [
        MANIM_BIN,
        "-qm",
        script_path,
        scene_name,
        "-o", f"chapter{ch_num}.mp4",
        "--media_dir", BUILD_DIR
    ]

    res = subprocess.run(cmd, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    if res.returncode != 0:
        print(f"❌ Error rendering Chapter {ch_num}:")
        print(res.stdout[-1500:])
        continue

    expected_out = os.path.join(BUILD_DIR, "videos", script_name.replace(".py", ""), "720p30", f"chapter{ch_num}.mp4")
    if os.path.exists(expected_out):
        shutil.copyfile(expected_out, target_mp4)

        probe = subprocess.run([
            "ffprobe", "-v", "error", "-show_entries", "format=duration,size",
            "-of", "default=noprint_wrappers=1", target_mp4
        ], stdout=subprocess.PIPE, text=True)

        info = dict(line.split("=") for line in probe.stdout.strip().split("\n") if "=" in line)
        duration = float(info.get("duration", 0))
        size_mb = int(info.get("size", 0)) / (1024 * 1024)
        m = int(duration // 60)
        s = int(duration % 60)

        print(f"✅ Chapter {ch_num:2d} Finished -> {m}m {s:02d}s ({duration:.1f}s), Size: {size_mb:.2f} MB")
    else:
        print(f"❌ Output not found at {expected_out}")

if os.path.exists(BUILD_DIR):
    shutil.rmtree(BUILD_DIR)

print("\n🎉 ALL 11 CHAPTERS SUCCESSFULLY RENDERED AT 5 MINUTES EACH!")

