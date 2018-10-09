import React from "react";
import data from "../data.json"


class ButtonAddRecord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: data};
    }

    addRecord() {
        this.setState({data: "test"});
    }





    render() {



        return (
            <button  onClick={this.addRecord}>Add Record</button>
        );
    }
}

export default ButtonAddRecord
