const form = document.getElementById("item-form");
function onSubmit(e) {
  e.preventDefault();
  console.log("submit");
  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;
  console.log(item, priority);
  if (item.length < 6) {
    console.log(`input must be at least 6 characters`);
  } else {
    form.submit();
  }
}
// form.addEventListener("submit", onSubmit);
// The FormData object can automatically compile all form data into key/value pairs
function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const item = formData.get("item");
  const priority = formData.get("priority");
  const entries = formData.entries();
  console.log(entries);
  for (let entry of entries) {
    console.log(entry[0], entry[1]);
  }
  console.log(item, priority);
}
form.addEventListener("submit", onSubmit2);
