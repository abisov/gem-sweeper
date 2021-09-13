import { Sprite } from '@pixi/sprite';
import { Mode } from 'fs'
import { CardSlot } from './card-slot';
import * as Cards from './cards'
import { RandomFromTo, UniqueRandom } from './utils';

export enum MODE{
    EASY=1,
    MEDIUM=2,
    HARD=3
}



export interface IBoard{
   slots : CardSlot[],
   mode : Mode,
   isActive : boolean,
   multiplier : number,
   PopulateBoard() : void,
   AddMultiplier(card : Cards.ICard) : void,
   HideBoard() : void
   
}



export class Board implements IBoard {
    slots : CardSlot[] = [];
    mode: Mode;
    isActive: boolean;
    multiplier : number 
    
    constructor(mode : Mode){
        this.mode = mode;
        this.isActive = false;
        this.multiplier = 0;

    }

    AddMultiplier(card : Cards.ICard) : void{
        this.multiplier += (card.worth ?? 0) * (this.mode as number);
        console.log((this.mode as number));
    }

    private GetGem() : Cards.Card{
        var r : number = Math.random();
        if(r < 0.6){
            return Cards.CardsList[2];
        }
        else if (r < 0.95) {
            return Cards.CardsList[3];
        }
        else{
            return Cards.CardsList[4];
        }

        
    }

    HideBoard() : void{
        for (let i = 0; i < 25; i++) {
            if(this.slots[i] == undefined){

                this.slots.push(new CardSlot(Cards.CardsList[RandomFromTo(2,4)], true, new Sprite))
                
            } 
            this.slots[i].ShowHideCard(false);
            this.slots[i].ChangeCard(this.GetGem());
            
            
        }
    }

    PopulateBoard() : void{
        for (let i = 0; i < 25; i++) {
            if(this.slots[i] == undefined){

                this.slots.push(new CardSlot(Cards.CardsList[RandomFromTo(2,4)], true, new Sprite))
                
            } 
            this.slots[i].ShowHideCard(true);
            this.slots[i].ChangeCard(this.GetGem());
            
        }
        this.PlantBombs();
    }

    private PlantBombs() : void{
        var bombs : number[] = UniqueRandom(0, 24, 5 * (this.mode as number) )
        bombs.forEach(bomb => {
            this.slots[bomb].ChangeCard(Cards.CardsList[1]);
        })
    }
    

    
}

export const board: IBoard = new Board(MODE.EASY);

