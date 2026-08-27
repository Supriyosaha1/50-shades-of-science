export function bindPointer(pointer) {
  return event => { pointer.x = (event.clientX / innerWidth - .5) * 2; pointer.y = (event.clientY / innerHeight - .5) * 2; };
}
