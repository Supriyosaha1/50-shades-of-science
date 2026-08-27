export function createResizeHandler(camera, renderer, updateScroll) {
  return () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); updateScroll(); };
}
