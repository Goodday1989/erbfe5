// a. add event listener with callback function
const logo = document.querySelector("header");
logo.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
});
// b. rewrite to callback function
function onClick(event) {
  console.log(event.target); //return element that trigger the event, in this case the img
  console.log(event.currentTarget); //return element that the event listener is attached to, in this case is the container
  event.target.style.backgroundColor = "red";
  console.log(event.clientX); // absolute value from page position
  console.log(event.clientY);
  console.log(event.offsetX); //from element position
  console.log(event.offsetY);
}
logo.addEventListener("click", onClick);
// prevent default is to stop the link from functioning
document.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault();
  console.log(`link is clicked`);
});
function onDrag(e) {
  document.querySelector("h1").textContent = `x:${e.clientX},y:${e.clientY}`;
}
logo.addEventListener("drag", onDrag);
