import React, { Component } from 'react';
import './game-form.scss';

export class game_form extends Component {
    render() {
        return (
            <div className="formBody">

                <span>Bet Amount</span>
                <input id='betAmount' type="number" min='0' />
                <span>Number Of Thieves</span>
                <div className="numberOfThieves">
                    <input type="radio" id="fiveThieves" name="nThieves" value="5" defaultChecked></input>
                    <input type="radio" id="tenThieves" name="nThieves" value="10" ></input>
                    <input type="radio" id="fifteenThieves" name="nThieves" value="15" ></input>
                </div>

                <a className="Start-Cashout btn">Start Game</a>
            </div>
        )
    }
}

export default game_form
