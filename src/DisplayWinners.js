import React from 'react';

const DisplayWinners = (props) => (
    <div>
                <h3>{props.names.map((name, index) => {
          // const isWinner = this.state.luckyWinnerIndex === index;
          // return <div className={isWinner ? "winner" : ""} key={index}>{name}</div>

          // ======= Alternative Solution =========
          if (this.state.luckyWinnerIndex === index) {
            return <div className="winner" key={index}>{name}</div>
          } else {
            return <div className="" key={index}>{name}</div>
          }
        })}</h3>
    </div>
);

export default DisplayWinners;
