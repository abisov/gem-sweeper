import React from 'react';
import { MainBalance } from '../game/balance';
import './footer.scss';


export class footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="balance">
                    <p>{MainBalance.GetValue()}$</p>
                    <a id='deposit'>Deposit</a>
                </div>
            </footer>
        )
    }
}

export default footer
