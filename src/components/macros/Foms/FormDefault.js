import React from 'react';
import './FormDefault.css';
import Input '../../micro/Input/Input.js';

function FormDefalut(props) {

    return (
        <React.Fragment>
        <div className ="container-form">
        <h2>{props.title}</h2><form className= "form">{props.children}</form>
        </div>
        </React.Fragment>
    )
}

export default FormDefault