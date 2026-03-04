// remove single item
function removeCLearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}
removeCLearButton();
const removeFirstItem = () => {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");
  ul.removeChild(li);
};
removeFirstItem();
// remove a group of items
function removeItemGroup() {
  const li = document.querySelectorAll("li");
  li.forEach((item, index) => {
    index % 2 === 0 ? item.remove() : 0;
  });
}
removeItemGroup();
