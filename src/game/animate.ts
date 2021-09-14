
import * as PIXI from 'pixi.js';
import { CardSlot } from "./card-slot";
import { Card } from "./cards";
import { app } from "./game";

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

export function ShowMultiplierPopup(slot : CardSlot, texture : PIXI.Texture){
    const ticker = new PIXI.Ticker();
    ticker.start();
    ticker.add(() => {
        

    });
}