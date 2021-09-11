//import React, { PureComponent } from 'react'

import React from "react"
import './header.scss';

// const headerStyle = {
//     boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.247)'
// }

export class header extends React.Component {
    render() {
        
        return (
            <header >
                <h1>Gem Sweeper</h1>
                <div className="profile-icon"></div>
            </header>
        )
    }
}

export default header;
