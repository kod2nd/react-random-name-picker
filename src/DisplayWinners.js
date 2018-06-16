import React from 'react';

const DisplayWinners = (props) => {
    return (
        <div>
            <h3 id="display-winners">{props.winnerSelector.map((name, index) => {
                // const isWinner = props.winnerSelector.luckyWinnerIndex === index;
                // return <div className={isWinner ? "winner" : ""} key={index}>{name}</div>

                // ======= Alternative Solution =========
                if (props.winnerIndex === index) {
                    return <div className="winner" key={index}>{name}</div>
                } else {
                    return <div className="" key={index}>{name}</div>
                }
            })}</h3>
        </div>
    );
}

export default DisplayWinners;
