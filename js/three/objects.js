import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

export function createObjects(scene) {
  const material = new THREE.MeshPhysicalMaterial({ color: 0xd9dfe4, metalness: .98, roughness: .13, clearcoat: 1, clearcoatRoughness: .06, envMapIntensity: 1.7 });
  const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.35, .42, 180, 28, 2, 3), material);
  knot.castShadow = true; knot.receiveShadow = true; scene.add(knot);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(18, 18), new THREE.ShadowMaterial({ color: 0x000000, opacity: .38 }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -2.05; ground.receiveShadow = true; scene.add(ground);
  return { knot, material };
}
