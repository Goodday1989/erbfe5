const itemInput = document.getElementById("item-input");
const priority = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");
function onInput(event) {
  heading.textContent = event.target.value;
}
itemInput.addEventListener("input", onInput);
function onChecked(e) {
  const isChecked = e.target.checked;
  if (isChecked) {
    heading.textContent = "recurring item";
  } else {
    heading.textContent = itemInput.value;
  }
}
checkbox.addEventListener("change", onChecked);
function onFocus() {
  console.log("input is focused");
  itemInput.style.backgroundColor = "yellow";
  itemInput.style.outlineColor = "blue";
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "5px";
}
function onBlur() {
  console.log("input is blurred");
  itemInput.style.backgroundColor = "green";
  itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
priority.addEventListener("change", onInput);
