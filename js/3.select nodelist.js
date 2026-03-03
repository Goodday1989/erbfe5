// select multiple elements and return a NodeList (array-like object)
// 1. selector by className
const listItems = document.querySelectorAll(".item");
console.log(listItems);
// listItems.style.color = "red"; //wont' work because listitems is a NodeList, not an element
// get all text content including children
console.log(listItems[0].innerText);
// get first element in the NodeList and change to red
listItems[3].style.color = "red";
listItems.forEach((item, index) => {
  item.style.color = "blue";
  if (index === 1) {
    item.remove();
  }
  // changing innerText will replace everything
  if (index === 0) {
    item.innerText = "blueberry";
  }
  // proper way to change specific text
  if (index === 0) {
    item.innerHTML = `blueberry<button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`;
  }
});
// nodeList has internal forEach, HTMLcollection doesn't have forEach, but we can convert it to an array and use forEach
