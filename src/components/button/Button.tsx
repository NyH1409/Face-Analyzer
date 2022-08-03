import React from "react";
import "./style.css"


export const Button : React.FC<any> = (props:any)=>{
    const { title } = props;
    return(
        <>
            <button className="border-info">{title}</button>
        </>
    )
}