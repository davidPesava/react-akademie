import React from "react";

import Record from "../components/Record"
import ButtonAddRecord from "../components/ButtonAddRecord"

import data from "../data.json"


const App = () => (
    <div>
        <header>
            <h1>basic page for Wallet app</h1>
        </header>

        <section>



            <div className="buttonSection">
                <ButtonAddRecord/>
            </div>



            <div className="records">

            {data.map(item => (
               <Record name={item.name} id={item.id} created={item.created} type={item.type} value={item.value}/>
            ))}

            </div>


        </section>


    </div>
);

export default App;
