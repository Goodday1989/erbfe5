// create Element("html element",props,children)//
const App = () => {
  return React.createElement("div", { style: { color: "red" } }, [
    H1({ name: "nomad", gender: "male", age: 20 }),
    H1({ name: "mad", gender: "female", age: 10 }),
    H1({ name: "no", gender: "male", age: 30 }),
  ]);
};
const H1 = ({ name, age, gender }) => {
  age = age + 1; // functional part
  return [
    React.createElement("p", null, name),
    React.createElement("p", null, gender),
    React.createElement("p", null, age),
  ]; // jsx part => html
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
