import React from "react";
import {Link} from 'react-router-dom'
import withTransactions from "../components/withTransactions";


const Overview = () => <Link to="/">MainPage</Link>;


export default withTransactions(Overview);
