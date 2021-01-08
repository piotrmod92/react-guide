import React from 'react';

const Char = (props) => {

    const inlineStyle = {
        border: '1px solid black',
        display: 'block',
        margin: '10px auto',
        padding: '16px',
        textAlign: 'center',
        width: '50px'
    }

    return (
        <div id={props.id} style={inlineStyle} onClick={props.click}>
            {props.children}
        </div>
    )
};

export default Char;