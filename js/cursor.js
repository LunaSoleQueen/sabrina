const dot = document.querySelector(".cursor-dot");

if (!dot) {
    console.log("cursor-dot missing");
} else {

    window.addEventListener("mousemove", (e) => {

        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";

        spawnSparkle(e.clientX, e.clientY);

    });

}

function spawnSparkle(x, y){

    if (Math.random() > 0.4) return;

    const s = document.createElement("div");
    s.className = "sparkle";

    const size = 5 + Math.random() * 8;

    s.style.width = size + "px";
    s.style.height = size + "px";

    s.style.left = x + "px";
    s.style.top = y + "px";

    document.body.appendChild(s);

    let opacity = 1;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    let scale = 1;

    function animate() {
        opacity -= 0.03;
        scale += 0.02;

        x += dx;
        y += dy;

        s.style.left = x + "px";
        s.style.top = y + "px";
        s.style.opacity = opacity;
        s.style.transform = `scale(${scale})`;

        if (opacity <= 0) {
            s.remove();
            return;
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}
