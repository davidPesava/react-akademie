import React, {Component} from "react";
import axios from "../util/axios";


const withTransactions = WrapperComponent => {

    class Wrapper extends Component {


        state = {
            transactions: []
        }


        componentDidMount() {

            axios.get("/transactions").then(response => {
                this.setState({transactions: response.data});
            })

        }


        render() {
            return (<WrapperComponent {...this.state} {...this.props}/>)
        }
    }

    return Wrapper;
}


export default withTransactions