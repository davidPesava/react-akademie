import React  from "react";


export const NUM_OF_ITEMS = 5;

const Custom = (props) => (
    <div className="Custom">
        <header className="App-header">
            <ul>
                <li>{props.name}</li>
            </ul>
        </header>
    </div>
)


export default Custom;
