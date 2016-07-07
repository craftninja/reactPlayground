let Hello = React.createClass({
  getInitialState: function () {
    return {who: "Florence"}
  },
  handleChange: function (event) {
    let nextState = { who: event.target.value};
    this.setState(nextState);
  },
  render: function () {
    let message;

    if (this.state.who == "") {
      message = "Hello?"
    } else {
      message = "Oh, hello there, " + this.state.who + "."
    }

    return <div>
      <h1>{message}</h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.who}
      />
    </div>
  }
})
ReactDOM.render(
  <Hello />,
  document.getElementById("hello")
)
