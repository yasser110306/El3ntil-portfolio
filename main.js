// page new cursor
document.body.style.cursor = "none";
const coords = { x: 0, y: 0 };
const cursors = document.querySelectorAll(".cursor");

cursors.forEach((circle) => {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", (e) => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursors.forEach((element, index) => {
    element.style.left = x - 12 + "px";
    element.style.top = y - 12 + "px";

    element.x = x;
    element.y = y;

    const nextCircle = cursors[index + 1] || cursors[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;

    element.style.scale = (cursors.length - index) / cursors.length;
  });
  requestAnimationFrame(animateCircles);
}
animateCircles();
