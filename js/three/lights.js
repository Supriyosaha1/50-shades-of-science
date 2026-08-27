import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

export function createLights(scene) {
  scene.add(new THREE.AmbientLight(0x74847d, 1.05));
  const blue = new THREE.SpotLight(0x385dff, 110, 19, Math.PI / 5, .7, 1.5); blue.position.set(-5, 5, 4); blue.castShadow = true; blue.shadow.mapSize.set(1024, 1024); scene.add(blue, blue.target);
  const copper = new THREE.SpotLight(0xff6948, 125, 19, Math.PI / 5, .7, 1.5); copper.position.set(5, 3, 2); copper.castShadow = true; copper.shadow.mapSize.set(1024, 1024); scene.add(copper, copper.target);
  const fill = new THREE.PointLight(0x8de4d0, 17, 12); fill.position.set(0, -2, 3); scene.add(fill);
  return { blue, copper };
}
