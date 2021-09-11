import React, { Component } from 'react';
import './game-view.scss';
import Game from '../game/game';

export class game_view extends Component {
    render() {
        return (
            <div className='gameView'>
                
                    <Game/>
                
            </div>
        )
    }
}

export default game_view
