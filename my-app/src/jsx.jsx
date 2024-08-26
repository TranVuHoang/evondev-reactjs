// rsc + tab
import React from "react";

const Jsx = () => {
  const element = <div id="root">Hello world</div>;
  const elementR = React.createElement("div", { id: "root" }, "Hello world!");

  const elementB = (
    <div>
      <span>Hello</span> <span>World!</span>
    </div>
  );

  const elementC = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello"),
      " ",
      React.cloneElement("span", null, "World"),
    ],
  });

  return (
    <div className="">
      <div className="heading" id="heading">
        This is heading
      </div>
      <div id="heading-2"></div>
    </div>
  );
};

export default Jsx;
