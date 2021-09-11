import React, { Component } from 'react';
import './game-view.scss';
import Game from '../game/game.tsx';

export class game_view extends Component {
    render() {
        return (
            <div className='gameView'>
                <div className="mockgame">
                    <Game/>
                </div>
            </div>
        )
    }
}

export default game_view
