const heading1 = React.createElement(
    "h1",
    {
      key: "h1",
      id: "h1",
      style: { color: "red" },
    },
    "heading 1"
  );
  const heading2 = React.createElement(
    "h1",
    {
      key: "h2",
      id: "h2",
      style: { background: "blue" },
    },
    "heading 2"
  );
  const parent = React.createElement("div", {}, [heading1, heading2]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);