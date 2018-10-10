import React from "react";

import Record from "../components/Record"

import data from "../data.json"


class App extends React.Component {

    state = {data: []};

    componentDidMount() {
        this.setState({data: data})
    }


    addRecord = () => {
        this.setState(prevState => ({data: [
                ...prevState.data,
                {
                    "name": "aliqua officia",
                    "type": "income",
                    "value": 57,
                    "created": 1494025746000,
                    "id": 1494025746000
                }
            ]}));
    }

    render() {

        return (

            <div>

                <header>
                    <h1>basic page for Wallet app</h1>
                </header>

                <section>


                    <button onClick={this.addRecord}>Add Record</button>


                    <div className="records">

                        {data.map(item => (
                            <Record
                                name={item.name}
                                id={item.id}
                                created={item.created}
                                type={item.type}
                                value={item.value}
                                key = {item.id}
                            />
                        ))}

                    </div>


                </section>


            </div>
        )
    }
}

export default App;
