import React from 'react';
import * as PIXI from 'pixi.js';
import * as Cards from './cards'
import { CardSlot } from './card-slot';
import { board, Board, MODE } from './board-generator';
import { BetBalance, CurBetBalance, MainBalance} from './balance';
import game_form, { IState } from '../components/game-form';

export var app: PIXI.Application;


class Session{

    gForm : game_form = new game_form(0);

    constructor(){

    }

    StartSession(gForm : game_form) : void {
        CurBetBalance.Set(MainBalance.GetValue());
        MainBalance.Charge(gForm.state.amount);
        
        BetBalance.Set(0);
        gForm.UpdateAmount()
        board.multiplier = 0;
        board.mode = gForm.state.mode; 
        board.PopulateBoard();
        board.isActive = true;
        MainBalance.Element.innerHTML =  MainBalance.GetValue() + "$";
        this.gForm = gForm;
        this.gForm.ActivateForm(false);
    }
    
    KillSession() {
        //MainBalance.Deposit(CurBetBalance.GetValue());
        board.HideBoard();
        CurBetBalance.Set(0);
        this.gForm.ActivateForm(true);
        board.isActive = false;
    }
    
    EndSession() {
        MainBalance.Deposit(CurBetBalance.GetValue() * board.multiplier);
        CurBetBalance.Set(0);
        this.gForm.ActivateForm(true);
        board.isActive = false;
        MainBalance.Element.innerHTML =  MainBalance.GetValue() + "$"
        
    }
}

export const session : Session = new Session();






export class game extends React.Component {
    
   gameCanvas: any;
    

    constructor(props : any){
        super(props);
    }

    componentDidMount() {
        app = new PIXI.Application({backgroundAlpha: 0, height: 1600, width: 1600 });
        this.gameCanvas.appendChild(app.view);
        
        
        app.start();
        
        this.LoadTextures(this.BoardSetup.bind(this));

        
       
        

        
       

        
        

    }
      
      
    componentWillUnmount() {
    app.stop();
    }

    LoadTextures(_callback : () => void) : void {
        Cards.CardsList[0].texture = PIXI.Texture.from(Cards.CardsList[0].path, {resourceOptions: {scale:3}});
        Cards.CardsList[1].texture = PIXI.Texture.from(Cards.CardsList[1].path, {resourceOptions: {scale:3}});
        Cards.CardsList[2].texture = PIXI.Texture.from(Cards.CardsList[2].path, {resourceOptions: {scale:3}});
        Cards.CardsList[3].texture = PIXI.Texture.from(Cards.CardsList[3].path, {resourceOptions: {scale:3}});
        Cards.CardsList[4].texture = PIXI.Texture.from(Cards.CardsList[4].path, {resourceOptions: {scale:3}});
        _callback();
    }

    BoardSetup() : void {
        const container = new PIXI.Container();

        app.stage.addChild(container);

        

        
        for (let i = 0; i < 25; i++) {
            const card = new PIXI.Sprite(Cards.CardsList[0].texture);
            card.interactive = true;
            card.buttonMode = true;
            
            board.PopulateBoard();

            let card_slot : CardSlot = board.slots[i];
            card_slot.sprite = card;

            
            card.on('pointerdown', this.CardInteraction.bind(card_slot));
            card.anchor.set(0.5);
            card.x = (i % 5) * 270;
            card.y = Math.floor(i / 5) * 270;
            container.addChild(card);
        }

        container.x = app.screen.width / 2;
        container.y = app.screen.height / 2;

        
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;
    }

    
    private CardInteraction() : void{
        let slot = this;
        if (board.isActive){   
            // @ts-ignore
            this.ShowHideCard(false);
        }

        
        
        
    }
    
    render() {
        let component = this;
        return (
        <div ref={(thisDiv) => {component.gameCanvas = thisDiv}} />
        );
    }
}



export default game
