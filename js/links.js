let page = window.location.pathname
let links = ["/", "cities", "helloJSX"].map(function(link, index) {
  return React.createElement(
    "a",
    {
      href: link,
      className:
        page == "/" + link || page == link ? "button button-primary" : "button",
      key: "link" + index
    },
    link === "/" ? "Oh hai" : link
  )
})
ReactDOM.render(
  React.createElement("div", null, links),
  document.getElementById("links")
);
