// =========================
// LUXURY GLOBAL EFFECTS
// =========================

// smooth mouse parallax
document.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX / window.innerWidth - 0.5) * 10;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 10;

  const bg = document.getElementById("bg-video");
  if (bg) {
    bg.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
  }
});

// subtle cursor glow trail (extra feel)
const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width = "20px";
glow.style.height = "20px";
glow.style.borderRadius = "50%";
glow.style.background = "rgba(212,175,55,0.3)";
glow.style.pointerEvents = "none";
glow.style.zIndex = "9999";
glow.style.transition = "0.05s";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
