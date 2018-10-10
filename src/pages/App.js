import React from "react";

import Record from "../components/Record"

import data from "../data.json"


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: data};
    }

    addRecord = () => {

        let newData = data;
        newData.push({
            "name": "Income from button",
            "type": "income",
            "value": 69,
            "created": 1487911188000,
            "id": 1487911188000
        });

        this.setState({data: newData})
    }
    render() {

        return (

        <div>

            <header>
                <h1>basic page for Wallet app</h1>
            </header>

            <section>


                <button  onClick={this.addRecord}>Add Record</button>



                <div className="records">

                    {data.map(item => (
                        <Record name={item.name} id={item.id} created={item.created} type={item.type}
                                value={item.value}/>
                    ))}

                </div>


            </section>


        </div>
        ) }
}

export default App;
