let Cities = React.createClass({
  getInitialState: function() {
    return {city: ""}
  },
  handleChange: function (event) {
    let nextState = { city: event.target.value};
    this.setState(nextState);
  },
  render: function () {
    let message;

    if (cityDeets[this.state.city.toLowerCase()]) {
      message = cityDeets[this.state.city.toLowerCase()];
    } else if (this.state.city !== "") {
      message = this.state.city + "? 🤔 Never heard of it."
    }

    return <div>
      <h1>What is your favorite city?</h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.city}
      />
      <h3>{message}</h3>
    </div>
  }
})


ReactDOM.render(
  <Cities />,
  document.getElementById("cities")
)
