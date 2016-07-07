let pages = ["/", "cities"].map(function(page, index) {
  return React.createElement(
    "a",
    {href: page, className: "button", key: "link" + index},
    page === "/" ? "Oh hai" : page
  )
})
ReactDOM.render(
  React.createElement("div", null, pages),
  document.getElementById("links")
);
