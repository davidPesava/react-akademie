import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Custom, {NUM_OF_ITEMS} from "./Custom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

let textes = ["text1", "text2", "text3"];
const listItems = textes.map(text => <li>{text}</li>);

ReactDOM.render(<Custom name={listItems} />, document.getElementById("textes"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
