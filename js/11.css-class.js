const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = document.querySelectorAll("li");
function run() {
  console.log(itemList.className);
  // text.className = "card dark";
  console.log(itemList.classList);
  itemList.classList.forEach((c) => {
    console.log(c);
  });
  // insert a class into class list
  // text.classList.add("dark");
  // text.classList.remove("card");
  text.classList.toggle("hidden");
  text.classList.replace("card", "dark");
  // add style property to element
  text.style.lineHeight = "10";
  items.forEach((item, index) => {
    item.style.color = "red";
    if (index === 2) {
      item.style.color = "blue";
    }
  });
}
// run is callback function, if = run(), it will execute on load and onclick will end up with undefined value
document.querySelector("button").onclick = run;
