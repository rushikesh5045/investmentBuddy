import React from "react";

import './Box.css'


const Box = (props)=>{

        return(
            <div className="hi">
                <label htmlFor={props.for}   > {props.children}</label><br></br>
                <input type={props.type} onChange={props.onChange} name={props.name} value={props.value} placeholder={props.placeholder}/>
            </div>
        )

}

export default Box;