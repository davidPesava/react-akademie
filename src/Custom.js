import React, { Component } from "react";

class Custom extends Component {
  render() {
    let textes = ["text1", "text2", "text3"];

    const listItems = textes.map(text => <li>{text}</li>);

    return (
      <div className="Custom">
        <header className="App-header">
          <ul>{listItems}</ul>
        </header>
      </div>
    );
  }
}

export default Custom;
