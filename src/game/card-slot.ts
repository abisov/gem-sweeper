import { Sprite } from "@pixi/sprite";
import { Card, CardsList } from "./cards";


export interface ICardSlot{
    ShowHideCard(isHidden : boolean) : void,
    ChangeCard(card : Card) : void,
    GetCard() : Card,
    sprite : Sprite
}

export class CardSlot implements ICardSlot{
    private card : Card;
    private isHidden : boolean;
    sprite: Sprite;

    constructor(card : Card, isHidden : boolean, sprite: Sprite){
        this.card = card;
        this.isHidden = isHidden;
        this.sprite = sprite ?? new Sprite;
    }

    ShowHideCard(isHidden: boolean): void {
        if(isHidden && !this.isHidden){
            this.isHidden = true;
            this.sprite.texture = CardsList[0].texture;
            return;
        }

        if(!isHidden && this.isHidden){
            this.isHidden = false;
            this.sprite.texture = this.card.texture;
            return;
        }

    }

    GetCard() : Card{
        return this.card;
    }

    ChangeCard(card: Card): void {
        this.card = card;
    }

}