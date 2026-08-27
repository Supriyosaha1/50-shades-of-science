export function initCursor() {
  if (matchMedia("(pointer: coarse)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cursor = document.createElement("span"); cursor.className = "custom-cursor"; document.body.append(cursor); let x = 0, y = 0, targetX = 0, targetY = 0;
  addEventListener("pointermove", event => { targetX = event.clientX; targetY = event.clientY; cursor.classList.add("is-ready"); });
  document.querySelectorAll("a,button,input,textarea").forEach(item => { item.addEventListener("pointerenter", () => cursor.classList.add("is-hover")); item.addEventListener("pointerleave", () => cursor.classList.remove("is-hover")); });
  function tick() { x += (targetX - x) * .2; y += (targetY - y) * .2; cursor.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`; requestAnimationFrame(tick); } tick();
}
