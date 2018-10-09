import React from "react";
import data from "../data.json"


class ButtonAddRecord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: data};
    }

    addRecord = () => {

        let newData = data;
        newData.push({
            "name": "Inventi",
            "type": "income",
            "value": 643,
            "created": 1487911188000,
            "id": 1487911188000
        });

        this.setState({ data: newData})
    }





    render() {



        return (
            <button  onClick={this.addRecord}>Add Record</button>
        );
    }
}

export default ButtonAddRecord
