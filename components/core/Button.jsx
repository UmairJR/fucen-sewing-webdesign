import React from 'react';

const Button = (props) => {
    return (
        <button type={props.type?props.type:'button'} style={props.style} id={props.id} className={`btn fs--${props.btnSize ? props.btnSize : "18"} ${props.className ? props.className : ''}`} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
    );
}

export default Button;
