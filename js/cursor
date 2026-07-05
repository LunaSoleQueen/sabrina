// =====================================================
// Luxury Smoke Cursor
// =====================================================

const cursor = document.querySelector(".luxury-cursor");
const dot = document.querySelector(".luxury-cursor-dot");

if (cursor && dot && window.matchMedia("(pointer:fine)").matches) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let dotX = mouseX;
    let dotY = mouseY;

    // Finom követés
    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.18;
        cursorY += (mouseY - cursorY) * 0.18;

        dotX += (mouseX - dotX) * 0.45;
        dotY += (mouseY - dotY) * 0.45;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";

        dot.style.left = dotX + "px";
        dot.style.top = dotY + "px";

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    window.addEventListener("mousemove", e => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        createSmoke(e.clientX, e.clientY);

    });

    // Hover effekt
    document.querySelectorAll("a,button,.btn").forEach(el => {

        el.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
        });

        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
        });

    });

    // Kattintás
    window.addEventListener("mousedown", () => {
        cursor.classList.add("click");
    });

    window.addEventListener("mouseup", () => {
        cursor.classList.remove("click");
    });

}

// =====================================================
// Smoke Trail
// =====================================================

function createSmoke(x, y) {

    if (Math.random() > 0.45) return;

    const smoke = document.createElement("div");
    smoke.className = "smoke-particle";

    const size = 12 + Math.random() * 18;

    smoke.style.width = size + "px";
    smoke.style.height = size + "px";

    smoke.style.left = (x - size / 2) + "px";
    smoke.style.top = (y - size / 2) + "px";

    const hue = 35 + Math.random() * 25;

    smoke.style.boxShadow =
        `0 0 ${20 + Math.random()*25}px hsla(${hue},100%,75%,0.45)`;

    document.body.appendChild(smoke);

    let opacity = 0.6;
    let scale = 1;
    let dx = (Math.random() - 0.5) * 1.5;
    let dy = -0.5 - Math.random();

    function animate() {

        opacity -= 0.018;
        scale += 0.018;

        x += dx;
        y += dy;

        smoke.style.left = x + "px";
        smoke.style.top = y + "px";

        smoke.style.opacity = opacity;
        smoke.style.transform = `scale(${scale})`;

        if (opacity <= 0) {

            smoke.remove();
            return;

        }

        requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);

}
