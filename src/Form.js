import React from 'react';

const Form = (props) => {
    return (
    <form>
        <input type="text" value={props.userInputValue} onChange={(event) => props.handleChange(event)} placeholder="Please Enter A Name" />

        <button onClick={(event) => { props.handleUpdateNamesClick(event) }}>Add name</button>
    </form>
);
}

export default Form;
