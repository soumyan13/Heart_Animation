let bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", function f(event) {
    // console.log(event.offsetX);
    let xPos = event.offsetX;
    let yPos = event.offsetY;
    let spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    bodyEl.appendChild(spanEl);
    let size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});