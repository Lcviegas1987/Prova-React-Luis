import React from 'react'
import './FormDefault.css'
import Input from  '../../micro/Forms/Input/Input'

function Input(props) {

    return(
        <>
        <div className="input-container">
            <label>{props.label}:</label>
            <input type={props.type}/>
        </div>
        </>
    )
}
export default Input