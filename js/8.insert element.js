function insertElement() {
  const filter = document.querySelector(".filter");
  const prepend = document.createElement("h1");
  const append = document.createElement("h1");
  prepend.textContent = "insertAdjacentElement";
  append.textContent = "insertAdjacentElement";
  filter.insertAdjacentElement("beforebegin", prepend);
  filter.insertAdjacentElement("afterend", append);
}
// Separate Nodes: You must create a new element using document.createElement() for each insertion, or use Node.cloneNode() if you need to insert the same structure multiple times. A single DOM node can only exist in one place in the document at a time.
insertElement();
function insertText() {
  const item = document.querySelector("li:first-child");
  item.insertAdjacentText("beforebegin", "before-begin");
  item.insertAdjacentText("afterbegin", "after-begin");
}
insertText();
function insertHTML() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML("beforebegin", "<h2>before-begin</h2>");
  clearBtn.insertAdjacentHTML("afterend", "<h2>after-end</h2>");
}
insertHTML();
function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = "insert-before";
  const thirdItem = document.querySelector("li:nth-child(3)");
  // from parent insert before selected item, involves parent and child
  ul.insertBefore(li, thirdItem);
}
insertBeforeItem();
function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}
function insertAfterItem() {
  const li = document.createElement("li");
  li.textContent = "insert-after-item";
  const thirdItem = document.querySelector("li:nth-child(3");
  insertAfter(li, thirdItem);
}
insertAfterItem();
