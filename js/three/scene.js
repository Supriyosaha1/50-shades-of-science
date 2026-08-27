import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";
import { createObjects } from "./objects.js";
import { createLights } from "./lights.js";
import { createParticles } from "./particles.js";
import { createResizeHandler } from "./resize.js";
import { bindPointer } from "./interactions.js";

export function initScene(canvas, scrollState) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, .1, 100); camera.position.set(0, .25, 7);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.setSize(innerWidth, innerHeight); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
  const { knot, material } = createObjects(scene); const lights = createLights(scene); const particles = createParticles(scene);
  const colors = [new THREE.Color(0xd9dfe4), new THREE.Color(0x173d91), new THREE.Color(0x087d5c), new THREE.Color(0xb75a35)];
  const current = { rotation: 0, color: colors[0].clone() }; const pointer = { x: 0, y: 0 }; let active = true;
  const updateScroll = () => { const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1); const progress = scrollY / max; const section = Math.min(3, Math.floor(progress * 3 + .5)); scrollState.target = progress; scrollState.rotation = progress * Math.PI * 2; scrollState.color = colors[section]; document.documentElement.style.setProperty("--scene-progress", progress); };
  const onResize = createResizeHandler(camera, renderer, updateScroll); const onPointer = bindPointer(pointer);
  addEventListener("scroll", updateScroll, { passive: true }); addEventListener("resize", onResize); addEventListener("pointermove", onPointer); document.addEventListener("visibilitychange", () => { active = !document.hidden; }); updateScroll();
  function animate() { requestAnimationFrame(animate); if (!active) return; current.rotation = THREE.MathUtils.lerp(current.rotation, scrollState.rotation, .075); current.color.lerp(scrollState.color, .075); const time = performance.now() * .00045; knot.rotation.y = current.rotation + time; knot.rotation.x = Math.sin(current.rotation * .5) * .22 + Math.sin(time * 1.7) * .1; knot.rotation.z = Math.cos(time) * .08; knot.position.y = Math.sin(time * 2.2) * .12; knot.position.x = Math.sin(time * .7) * .08; material.color.copy(current.color); camera.position.x = pointer.x * .22 + Math.sin(current.rotation) * .35; camera.position.y = .25 - pointer.y * .14 + Math.cos(current.rotation * .5) * .18; camera.lookAt(knot.position.x, knot.position.y, 0); lights.blue.target.position.copy(knot.position); lights.copper.target.position.copy(knot.position); particles.rotation.y = time * .25; renderer.render(scene, camera); }
  animate(); return { updateScroll, dispose: () => { removeEventListener("scroll", updateScroll); removeEventListener("resize", onResize); removeEventListener("pointermove", onPointer); renderer.dispose(); } };
}
