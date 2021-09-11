import React from 'react';
import './footer.scss';


export class footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="balance">
                    <p>534.34$</p>
                    <a id='deposit'>Deposit</a>
                </div>
            </footer>
        )
    }
}

export default footer
