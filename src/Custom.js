import React  from "react";



function addedItems(textes) {
    return textes.map(text => <li>{text}</li>);
}


let names = ["A","B","C"];

export const listItems =  addedItems(names);





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
