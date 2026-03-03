const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My element");
// <div class="my-element" id="my-element" title="My element"></div>
// a. create a text inside the div
// div.innerText = "Hello World";
// b. create a text node
const text = document.createTextNode("Hello World");
div.appendChild(text);
document.querySelector("ul").appendChild(div);
// ====================================
//use a function to build an element group
function createListItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `${item}<button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`;
  document.querySelector(".items").appendChild(li);
}
createListItem("egg");
// build li element
function createNewItem(item) {
  const li = document.createElement("li");
  // insert text into li element
  li.appendChild(document.createTextNode(item));
  // build button element
  const button = document.createElement("button");
  // insert css class to button element
  button.className = "remove-item btn-link text-red";
  // build icon element
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  // append icon to button element
  button.appendChild(icon);
  // append button to li element
  li.appendChild(button);
  // append li into ul element
  document.querySelector(".items").appendChild(li);
}
createNewItem("milk");
