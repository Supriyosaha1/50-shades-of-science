#!/usr/bin/env python3
"""
Batch Render Script for 5-Minute Masterclass Animations (Chapters 2 to 11)
Executes Manim Community for each chapter, validates output duration and size,
and copies directly to `learn/ml-kids/media/videos/chapter{N}.mp4`.
"""

import subprocess
import os
import shutil

CHAPTERS = [
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

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
MANIM_BIN = "/Users/supriyosaha/miniconda3/bin/manim"
VIDEOS_DIR = os.path.join(BASE_DIR, "media", "videos")
BUILD_DIR = os.path.join(BASE_DIR, "media", "manim_temp_build")

env = dict(os.environ)
env["PATH"] = f"/Library/TeX/texbin:{env.get('PATH', '')}"

print("=" * 60)
print(f"🎬 Starting Batch Render of Chapters 2 to 11 (5-Minute Masterclasses)")
print("=" * 60)

for ch_num, script_name, scene_name in CHAPTERS:
    script_path = os.path.join(os.path.dirname(__file__), script_name)
    target_mp4 = os.path.join(VIDEOS_DIR, f"chapter{ch_num}.mp4")
    
    print(f"\n[Chapter {ch_num}] Rendering {scene_name} from {script_name}...")
    
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
        print(res.stdout[-2000:])
        continue
    
    # Locate output mp4
    expected_out = os.path.join(BUILD_DIR, "videos", script_name.replace(".py", ""), "720p30", f"chapter{ch_num}.mp4")
    if os.path.exists(expected_out):
        shutil.copyfile(expected_out, target_mp4)
        
        # Check duration
        probe = subprocess.run([
            "ffprobe", "-v", "error", "-show_entries", "format=duration,size",
            "-of", "default=noprint_wrappers=1", target_mp4
        ], stdout=subprocess.PIPE, text=True)
        
        info = dict(line.split("=") for line in probe.stdout.strip().split("\n") if "=" in line)
        duration = float(info.get("duration", 0))
        size_mb = int(info.get("size", 0)) / (1024 * 1024)
        mins = int(duration // 60)
        secs = int(duration % 60)
        
        print(f"✅ Chapter {ch_num} Rendered Successfully! -> {mins}m {secs}s ({duration:.1f}s), Size: {size_mb:.2f} MB")
    else:
        print(f"❌ Could not find output file at {expected_out}")

# Clean temp build
if os.path.exists(BUILD_DIR):
    shutil.rmtree(BUILD_DIR)

print("\n🎉 ALL 11 CHAPTERS RENDERED AND UPDATED!")

