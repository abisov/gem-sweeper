import React, { Component } from 'react';
import './game-form.scss';

export class game_form extends Component {
    render() {
        return (
            <div className="formBody">

                <span className='label' >Bet Amount</span>
                <div className="bedAmountBody">
                    <input id='betAmount' type="number" min='0.01' max='99999' step='0.01' defaultValue='10.00'/>
                    <a id="halfAmount" className="changeAmount" ></a>
                    <a id="doubleAmount" className="changeAmount" ></a>
                    <a id="maxAmount" className="changeAmount" ></a>
                </div>
                <span className='label'>Number Of Thieves</span>
                <div className="numberOfThieves">
                    <div className="input_container">
                        <input type="radio" id="fiveThieves" name="nThieves" value="5" defaultChecked></input>
                        <span className="checkmark">5</span>
                    </div>
                    <div className="input_container">
                        <input type="radio" id="tenThieves" name="nThieves" value="10" ></input>
                        <span className="checkmark">10</span>
                    </div>
                    <div className="input_container">
                        <input type="radio" id="fifteenThieves" name="nThieves" value="15" ></input>
                        <span className="checkmark">15</span>
                    </div>
                    
                </div>

                <a className="Start-Cashout btn">Start Game</a>
            </div>
        )
    }
}

export default game_form
