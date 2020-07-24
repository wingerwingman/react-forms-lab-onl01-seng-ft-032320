import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>
          Remaining characters:{" "}
          {this.props.maxChars - this.state.inputValue.length}
        </p>
        <input onChange={this.handleChange} value={this.state.inputValue} type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
