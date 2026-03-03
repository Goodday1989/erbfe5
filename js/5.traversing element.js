let output;
// a. get child elements from parent element
const parent = document.querySelector(".parent");
console.log(parent);
output = parent.children;
console.log(output);
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
parent.children[1].style.color = "red";
parent.firstElementChild.style.color = "blue";
parent.lastElementChild.style.color = "green";
// b. get parent element from child element
output = document.getElementsByClassName("item");
secondChild = output[1];
console.log(secondChild);
output = secondChild.parentElement;
// c. get sibling element
output = secondChild.previousElementSibling;
output = secondChild.nextElementSibling;
// =============================================
//NodeList
output = parent.childNodes;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].nodeType; //the return needs to be check against the node type list
//complete node structure
output = parent.childNodes[3].outerHTML;
//from parent to child node
output = parent.firstChild;
output = parent.lastChild;
output = parent.lastChild.textContent = "hello";
// traverse the dom from child to parent
const childnode = document.querySelector(".item");
output = childnode; //first li
output = childnode.parentNode; //ul
// traverse the dom from sibling to sibling
output = childnode.nextSibling;
// ======================================
// why nodeList ? nodeList return a static value, it will not change when dom changes, while html collection will change when the dom changes
console.log(output);
