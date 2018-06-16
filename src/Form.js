import React from 'react';

const Form = (props) => {
    return (
    <div>
        <input type="text" value={props.userInputValue} onChange={(event) => props.onChange(event)} placeholder="Please Enter A Name" />

        <button onClick={() => { props.onClick() }}>Add name</button>
    </div>
);
}

export default Form;
