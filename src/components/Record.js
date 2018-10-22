import React from "react";

//import Id from "./Id";
//import Type from "./Type";
//import Created from "./Created"
import Name from "./Name";
import Value from "./Value";
import styled from "styled-components";

//import axios from "../util/axios";


const RecordContainer = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;  
  display: flex;
  border-bottom: 1px solid lightgray;
  
  
`;


//axios.delete('/transactions', {data:props.id})



const Record = (props) => (
    <RecordContainer className="register">
        <Name nameName={props.name}  />
        <div className={props.type}> <Value valueValue={props.value}/></div>
    </RecordContainer>
)
export default Record