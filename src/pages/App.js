import React from "react";

import Record from "../components/Record"

import data from "../data.json"


const App = () => (
    <div>
        <header>
            <h1>basic page for Wallet app</h1>

            {data.map(item => (
                <Record name={item.name} id={item.id} created={item.created} type={item.type} value={item.value}/>
            ))}


        </header>
    </div>
);

export default App;
