import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import * as Cards from './cards'



export class game extends Component {
    
    app: PIXI.Application;
    gameCanvas: HTMLDivElement;

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.app = new PIXI.Application({backgroundAlpha: 0});
        this.gameCanvas.appendChild(this.app.view);
        const container = new PIXI.Container();
        this.app.stage.addChild(container);

        //get cards textures
        // Cards.Back.texture = PIXI.Texture.from(Cards.Back.path);
        // Cards.Thieve.texture = PIXI.Texture.from(Cards.Thieve.path);
        // Cards.Emerald.texture = PIXI.Texture.from(Cards.Emerald.path);
        // Cards.Ruby.texture = PIXI.Texture.from(Cards.Ruby.path);
        // Cards.Diamond.texture = PIXI.Texture.from(Cards.Diamond.path);
        //console.log(Cards);
        this.app.start();

        //Generate Field{

        // for (let i = 0; i < 25; i++) {
        //     const bunny = new PIXI.Sprite(Cards.Back.texture);
        //     bunny.anchor.set(0.5);
        //     bunny.x = (i % 5) * 40;
        //     bunny.y = Math.floor(i / 5) * 40;
        //     container.addChild(bunny);
        // }

        // Move container to the center
        container.x = this.app.screen.width / 2;
        container.y = this.app.screen.height / 2;

        // Center bunny sprite in local container coordinates
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;
        

      }
      
      
    componentWillUnmount() {
    this.app.stop();
    }


    
    render() {
        let component = this;
    return (
      <div ref={(thisDiv) => {component.gameCanvas = thisDiv}} />
    );
    }
}

export default game
