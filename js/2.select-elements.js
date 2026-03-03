// 1. get single element from the dom
console.log(document.getElementById("app-title"));
// 2. get element attributes
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
// 3 .get element attributes by getAttribute method
console.log(document.getElementById("app-title").getAttribute("id"));
console.log(document.getElementById("app-title").getAttribute("class"));
// 4. update attributes by dot notation
document.getElementById("app-title").id = "new-title";
document.getElementById("new-title").className = "new-title";
// 5. update attributes by setAttribute method (attribute,value)
document.getElementById("new-title").setAttribute("id", "app-title");
document.getElementById("app-title").setAttribute("class", "text-green");
// 6. save the element to a variable for various operations
const title = document.getElementById("app-title");
console.log(title.textContent);
// html text - faster and direct access
title.textContent = "Hello World";
// inner text - slower and involve css style calculation
title.innerText = "Hello Again";
// inner HTML - can insert html tag
title.innerHTML = "<i>Shopping List</i>";
// 7. update inline cc style by dot notation change css properties in camelCase
title.style.color = "blue";
title.style.fontSize = "40px";
title.style.backgroundColor = "yellow";
// 8. querySelector , return first result - single element
console.log(document.querySelector("h1")); //select by tag name
console.log(document.querySelector("#app-title")); //select by id
console.log(document.querySelector(".container")); //select by class
console.log(document.querySelectorAll("input[type='text']")); //select by attribute
console.log(document.querySelector("li:nth-child(2)")); //select by pseudo class
const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Mango Juice";
secondItem.style.color = "orange";
const list = document.querySelector("ul");
console.log(list);
// narrow down the search scope by chaining querySelector
const firstItem = list.querySelector("li");
firstItem.style.color = "purple";
// ================================
// all the above methods are return single html element
