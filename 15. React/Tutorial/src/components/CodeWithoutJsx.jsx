import React from "react";

function CodeWithoutJsx() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello World")
  );
}

export default CodeWithoutJsx;
