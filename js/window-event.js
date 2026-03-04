window.addEventListener("load", () => {
  console.log("page loaded");
});
window.addEventListener("DOMContentLoaded", () => console.log("DOM loaded"));
window.addEventListener("resize", () => {
  console.log(`window resized`);
  document.querySelector("h1").innerText =
    `resized to ${window.innerHeight} x ${window.innerWidth}`;
});
window.addEventListener("scroll", () => {
  console.log(`window scrolled`);
  document.querySelector("h1").innerText =
    `scrolled to ${window.scrollX} x ${window.scrollY}`;
  if (window.scrollY > 70) {
    document.body.style.background = "lightblue";
  } else {
    document.body.style.background = "white";
  }
});
window.addEventListener("focus", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "darkblue";
  });
});
window.addEventListener("blur", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black";
  });
});
const p = document.querySelector("p");
p.addEventListener("click", () => {
  console.log("paragraph clicked");
});
