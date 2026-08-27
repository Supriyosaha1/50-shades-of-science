import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

export function createParticles(scene) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(1100 * 3);
  for (let index = 0; index < positions.length; index += 3) { positions[index] = (Math.random() - .5) * 24; positions[index + 1] = (Math.random() - .5) * 16; positions[index + 2] = (Math.random() - .5) * 12; }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xd5f56b, size: .024, transparent: true, opacity: .75 }));
  scene.add(particles);
  return particles;
}
