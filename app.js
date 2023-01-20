import React, { Component } from "react";
import ReactDOM from "react-dom/client";
// const heading1 = React.createElement(
//   "h1",
//   {
//     key: "h1",
//     id: "h1",
//     style: { color: "red" },
//   },
//   "heading 1"
// );
// const heading2 = React.createElement(
//   "h1",
//   {
//     key: "h2",
//     id: "h2",
//     style: { background: "blue" },
//   },
//   "heading 2"
// );

const Title = () => (
  <h1 id="title" key="h2">JSX heading</h1>
);

// React Component
// - Functional way
// - Class Based Component - old

// const HeaderComponent = function () {
//   return (
//     <div>
//       <h1>Namma React Functional Component</h1>
//     </div>
//   );
// }

const HeaderComponent = () => {
  return (
    <div>
      {Title()} 
        {/* <Title /> 
        Title() and <Title /> are the same.
        */}
      <h1>Namma React Functional Component</h1>
      <h2>This is learning project</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);