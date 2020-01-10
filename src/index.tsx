import React, { useState, useEffect } from "react";
import { render } from "./renderer";
import Container from "./Container";

const root = document.getElementById("root")!;
const container = new Container(vnode => {
  console.log("updating", vnode);
  root.innerHTML = JSON.stringify(vnode, undefined, 2);
});

class ClassComp extends React.Component {
  render() {
    return <div>class Comp</div>;
  }
}

const MyComp = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 10000);

    return () => clearInterval(timer);
  }, []);
  const isEven = count % 2 === 0;

  return (
    <div className="mycomp" style={{ color: isEven ? "red" : "blue" }}>
      {isEven ? <div>even</div> : null}
      <span className="foo">hello world {count}</span>
    </div>
  );
};

render(
  <main className="root">
    <ClassComp />
    <MyComp />
    <span className="bar">--custom renderer</span>
  </main>,
  container,
  () => {
    console.log("rendered");
  }
);
