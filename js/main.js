import { initScene } from "./three/scene.js";
import { initScrollReveal } from "./animations/scroll.js";
import { initCursor } from "./animations/cursor.js";
import { initNavigation } from "./components/navigation.js";
import { initTopics } from "./components/topics.js";
import { initModal } from "./components/modal.js";
import { initBookingForm } from "./components/booking-form.js";

const scrollState = { target: 0, rotation: 0, color: null };
const modal = initModal();
initNavigation(); initTopics(); initBookingForm(modal); initScrollReveal(); initCursor();
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) initScene(document.querySelector("#space"), scrollState);
