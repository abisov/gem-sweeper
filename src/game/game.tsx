import React from 'react';
import * as PIXI from 'pixi.js';
import * as Cards from './cards'




export class game extends React.Component {
    
    app: any;
    gameCanvas: any;

    constructor(props : any){
        super(props);
    }

    componentDidMount() {
        this.app = new PIXI.Application({backgroundAlpha: 0, height: 1600, width: 1600 });
        this.gameCanvas.appendChild(this.app.view);
        
        
        this.app.start();
        
        this.LoadTextures();

        this.BoardSetup();
       
        

        
       

        
        

      }
      
      
    componentWillUnmount() {
    this.app.stop();
    }

    LoadTextures() : void {
        Cards.Back.texture = PIXI.Texture.from(Cards.Back.path, {resourceOptions: {scale:3}});
        Cards.Thieve.texture = PIXI.Texture.from(Cards.Thieve.path, {resourceOptions: {scale:3}});
        Cards.Emerald.texture = PIXI.Texture.from(Cards.Emerald.path, {resourceOptions: {scale:3}});
        Cards.Ruby.texture = PIXI.Texture.from(Cards.Ruby.path, {resourceOptions: {scale:3}});
        Cards.Diamond.texture = PIXI.Texture.from(Cards.Diamond.path, {resourceOptions: {scale:3}});
    }

    BoardSetup() : void {
        const container = new PIXI.Container();

        this.app.stage.addChild(container);

        
        
        for (let i = 0; i < 25; i++) {
            const card = new PIXI.Sprite(Cards.Back.texture);
            
            card.anchor.set(0.5);
            card.x = (i % 5) * 270;
            card.y = Math.floor(i / 5) * 270;
            container.addChild(card);
        }

        container.x = this.app.screen.width / 2;
        container.y = this.app.screen.height / 2;

        
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;
    }
    
    render() {
        let component = this;
        return (
        <div ref={(thisDiv) => {component.gameCanvas = thisDiv}} />
        );
    }
}

export default game
