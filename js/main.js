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
document.querySelector("#merch .mono").textContent = "04 / Science merchandise";
document.querySelector("#merch h2").textContent = "Science you can wear.";
document.querySelector("#merch .offer-copy > p:nth-of-type(2)").textContent = "Science merchandise for people who enjoy learning and sharing science. Explore the current T-shirts and ask about custom orders.";
document.querySelector("#contact .mono").textContent = "05 / Contact";
document.querySelector("#contact h2").textContent = "Plan a science event.";
document.querySelector("#contact .contact-copy").textContent = "Tell us what you need for a school visit, public talk, film, or workshop. Send a message and we can discuss the details.";
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) initScene(document.querySelector("#space"), scrollState);
