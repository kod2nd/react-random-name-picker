import React from 'react';

const RandomButton = (props) => {
    return (
        <div>
            <button onClick={() => props.handleClick()}>Get lucky winner!</button>
        </div>
    )
};

export default RandomButton;
