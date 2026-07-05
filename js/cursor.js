const dot = document.querySelector(".cursor-dot");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";

    createSparkle(mouseX, mouseY);
});

/* csillag por */
function createSparkle(x, y){

    if(Math.random() > 0.35) return;

    const s = document.createElement("div");
    s.className = "sparkle";

    const size = 6 + Math.random()*10;

    s.style.width = size + "px";
    s.style.height = size + "px";

    s.style.left = x + "px";
    s.style.top = y + "px";

    document.body.appendChild(s);

    let opacity = 1;
    let dx = (Math.random()-0.5)*2;
    let dy = (Math.random()-0.5)*2;
    let scale = 1;

    function animate(){
        opacity -= 0.02;
        scale += 0.02;

        x += dx;
        y += dy;

        s.style.left = x + "px";
        s.style.top = y + "px";
        s.style.opacity = opacity;
        s.style.transform = `scale(${scale})`;

        if(opacity <= 0){
            s.remove();
            return;
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}
