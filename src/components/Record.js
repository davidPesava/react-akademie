import React from "react";

import Id from "./Id";
import Type from "./Type";
import Created from "./Created"
import Name from "./Name";
import Value from "./Value";




const Record = (props) => (
    <div className="single-record">
        <Id IdId={props.id}  />
        <Name nameName={props.name}  />
        <Value valueValue={props.value}/>
        <Type typeName = {props.type} />
        <Created createdAt = {props.created} />
    </div>
)


export default Record