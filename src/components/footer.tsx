import React from 'react';
import { MainBalance } from '../game/balance';
import './footer.scss';


export class footer extends React.Component {

    balance: any; 
    

   

    componentDidMount(){
        this.balance =  (document.getElementById('balance') as HTMLElement);
        MainBalance.SetElement(this.balance);
        
    }
    
    

    render() {
        return (
            <footer>
                <div className="balance">
                    <p id='balance' >{MainBalance.GetValue()}$</p>
                    <a id='deposit'>Deposit</a>
                </div>
            </footer>
        )
    }
}

export default footer
