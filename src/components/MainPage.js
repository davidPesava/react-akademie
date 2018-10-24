import React, {Component} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import Modal from 'react-modal';

import Record from "../components/Record"

import axios from "../util/axios";
import withTransactions from "./withTransactions";


const Button = styled.button`
  color: white;
  background-color: #6DAFBA;
  padding:1rem;
  border:none;
  margin-right: 2rem;
  
   &.last-button {
    margin-right: 0;
  }
  
   &.menu-button {
    width: 175px;
    margin-bottom: 5px;
    margin-right: 0;
  }
  
  &.add-transaction {
    background-color: #45C48B;
  }
  
  
  & a {
     width: 100%;
    margin-bottom: 5px;
    }
  
 
`;

const Header = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
    width: 25%;
    float: left;
`;

const Section = styled.div`
    width: 75%;
    float: left;
`;

const Heading = styled.h1`
    margin-right: 1rem;
    margin-top: 0.5rem;
`;

const ButtonsContainer = styled.div`
    margin-bottom: 1rem;
    padding-bottom: 0.3rem;
    justify-content: flex-end;
    display: flex;
`;

const Label = styled.label`
    width: 80px;
    display: inline-block;
`;


const customStyles = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '60%'
    }
};


Modal.setAppElement('#root')


class MainPage extends Component {

    constructor() {
        super();

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    state = {
        newTransaction: {
            name: '',
            value: 0,
            type: "income"
        },
        modalIsOpen: false,
        filterType: 0
    };


    filterTransactions = () => {

        const {filterType} = this.state;
        const {transactions} = this.props;

        switch (filterType) {
            case 0:
            default:
                return transactions;

            case 1:
                return transactions.filter(
                    transactions => transactions.type === "income"
                );


            case 2:
                return transactions.filter(
                    transactions => transactions.type === "expense"
                );
        }
    };

    filterI = () => {
        this.setState({filterType: 1})

    }


    filterE = () => {
        this.setState({filterType: 2})

    }

    filterA = () => {
        this.setState({filterType: 0})

    }


    handleInputChange = event => {
        const newTransactionCopy = {...this.state.newTransaction}
        newTransactionCopy[event.target.id] = event.target.value
        this.setState({newTransaction: newTransactionCopy})
    }

    addTransaction = event => {

        axios.post('/transactions', {
            "name": this.state.newTransaction.name,
            "type": this.state.newTransaction.type,
            "value": this.state.newTransaction.value,
            "id": this.state.newTransaction.id
        })


            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        event.preventDefault();
        this.setState(prevState => ({
            transactions: [...prevState.transactions.concat(prevState.newTransaction)]
            //transactions: prevState.transactions.concat(prevState.newTransaction
        }));
        this.closeModal();
    };


    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }


    isExpense = (type, amount) => {
        if (type === 'expense') {
            return '- ' + amount;
        } else {
            return '+ ' + amount;
        }
    }


    refreshRecords = () => {
        axios.get("/transactions").then(response => {
            this.setState({transactions: response.data});
        })
    }

    removeRecord = (removingId) => {
        axios.delete('/transactions/' + removingId).then(this.refreshRecords)
    }

    render() {
        const {newTransaction: {name, value, type}} = this.state
        return (
            <div>
                <Header>
                    <Heading>Wallet app</Heading>

                    <Link to="/overview" className="menu-button"><Button
                        className="menu-button">Overview</Button></Link>

                    <Button className="menu-button add-transaction" onClick={this.openModal}>Add Transaction +</Button>

                </Header>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="ADD transaction"
                    style={customStyles}
                >

                    <form>
                        <Label htmlFor="name">Name:</Label>
                        <input id="name" type="text" value={name} onChange={this.handleInputChange}/> <br/>
                        <Label htmlFor="value">Amount:</Label>
                        <input id="value" type="number" value={value} onChange={this.handleInputChange}/><br/>
                        <Label htmlFor="type">Type:</Label>
                        <select id="type" value={type} onChange={this.handleInputChange}>
                            <option value='income'>income</option>
                            <option value='expense'>expense</option>
                        </select>
                        <br/>
                        <Button onClick={this.addTransaction} className="add-transaction">Add</Button>
                    </form>
                    <br/>

                    <Button onClick={this.closeModal}>Close</Button>


                </Modal>

                <Section>
                    <ButtonsContainer>
                        <Button onClick={this.filterI}>Incomes</Button>
                        <Button onClick={this.filterE}>Expenses</Button>
                        <Button className="last-button" onClick={this.filterA}>All</Button>
                    </ButtonsContainer>


                    {this.filterTransactions().map(({name, value, type, id}) => (
                        <div>
                            <div onClick={() => {
                                this.removeRecord(id)
                            }}>{id}  </div>

                            <Record key={id} name={name} value={this.isExpense(type, value)} type={type} id={id}/>
                        </div>
                    ))}
                </Section>
            </div>

        );
    }
}

export default withTransactions(MainPage);
