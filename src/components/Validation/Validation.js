import React from 'react';

const Validation = (props) => {

    const valid = props.length > 5; 
    return (
        <p>{valid ? 'Text long enough' : 'Text too short'}</p>
    )
};

export default Validation;