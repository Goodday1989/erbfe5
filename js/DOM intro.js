console.log(window);
console.dir(window.document);
console.log(document.body);
console.log(document.links[0]);
// document.body.innerHTML = "<h1>hello from body</h1>";
// inspect text portion of html element
// console.log(document.body.innerText);
// write something into document
// document.write(`hello from java`);
// document.getElementById("main").innerHTML = "<h1>hello</h1>";
document.querySelector("#main h1").innerText = "H";
