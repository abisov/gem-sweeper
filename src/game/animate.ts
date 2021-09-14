
import * as PIXI from 'pixi.js';
import { board } from './board-generator';
import { CardSlot } from "./card-slot";
import { Card } from "./cards";
import { app } from "./game";
import { RandomFromTo, Round } from './utils';

export function RotateCard(slot : CardSlot, texture : PIXI.Texture) : void{
    const ticker = new PIXI.Ticker();
    var rot : number = - 0.1;
    ticker.start();
    ticker.add(() => {
        
        slot.sprite.setTransform(slot.sprite.position.x, slot.sprite.position.y, slot.sprite.scale.x + rot);
        if(slot.sprite.scale.x < 0){
            
            rot = 0.1;
            slot.sprite.texture = texture;
        } 
        
        if(slot.sprite.scale.x > 1) {
            slot.sprite.setTransform(slot.sprite.position.x, slot.sprite.position.y, 1);
            
            ticker.stop();
        }
        
    })
}

export function ShowMultiplierPopup(slot : CardSlot){
    const ticker = new PIXI.Ticker();

    const style = new PIXI.TextStyle({
        dropShadow: true,
        dropShadowAlpha: 0.2,
        dropShadowBlur: 8,
        fill: '#'+Math.floor(Math.random()*16777215).toString(16),
        fontFamily: "Impact, Charcoal, sans-serif",
        fontSize: RandomFromTo(100,160),
        strokeThickness: 3
    });
    var text = new PIXI.Text('+' + Round(slot.GetCard().worth * (board.mode as number), 1) + 'X', style)
    app.stage.addChild(text);
    text.x = slot.sprite.x + slot.sprite.width - text.width/2 - RandomFromTo(0, 100);
    text.y = slot.sprite.y + slot.sprite.height - text.height/2 - RandomFromTo(0, 100);
    text.alpha = 0;
    var addAlpha : number = 0.05;
    ticker.start();
    ticker.add(() => {
        text.alpha += addAlpha;
        
        if(text.alpha >= 1) addAlpha = -0.005;
        if(text.alpha <= 0){
            text.destroy();
            ticker.stop();
        } 
    });
}