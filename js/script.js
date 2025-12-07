const text = "So... Uhh... Hi?";
let index = 0;

function typeEffect() {
  const element = document.getElementById("typeText");
  if (!element) return;

  element.textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(typeEffect, 120);
  }
}

typeEffect();

document.querySelectorAll(".slider-track").forEach((track) => {
  const slides = track.children;
  for (let i = 0; i < 2; i++) {
    track.appendChild(slides[i].cloneNode(true));
  }
});
