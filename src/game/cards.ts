//export const cards = new Map();
import Back_Image from './Cards/Back.svg';
import Thieve_Image from './Cards/Thieve.svg';
import Emerald_Image from './Cards/Emerald.svg';
import Ruby_Image from './Cards/Ruby.svg';
import Diamond_Image from './Cards/Diamond.svg';
import { board } from './board-generator';


export enum CARD_TYPES {
    BACK,
    GEM,
    BOMB
}
export enum GEM_TYPES {
    NONE,
    EMERALD,
    RUBY,
    DIAMOND
}





export interface ICard{
    readonly id : number,
    readonly name : string,
    readonly type : CARD_TYPES,
    readonly path : string,
    readonly worth? : number,
    readonly gem_type? : GEM_TYPES,
    texture? : any
}



export function getRealWorth(gem: Card) : number{
    return (gem.worth * (board.mode as number));
}



export class Card implements ICard {

    readonly id : number;
    readonly name : string;
    readonly type : CARD_TYPES;
    readonly path : string;
    readonly worth : number;
    readonly gem_type : GEM_TYPES;
    texture : any;

    constructor(id : number, name : string, type : CARD_TYPES, path : string, worth? : number, get_type? : GEM_TYPES){
        this.id = id;
        this.name = name;
        this.type = type;
        this.path = path;
        this.worth = worth ?? 0;
        this.gem_type = get_type ?? GEM_TYPES.NONE;
        
    }

    
    
    
}

//Register Cards
export const CardsList : Card[] = [
    new Card(0, 'Back', CARD_TYPES.BACK, Back_Image),
    new Card(1, 'Thieve', CARD_TYPES.BOMB, Thieve_Image),
    new Card(2, 'Emerald', CARD_TYPES.GEM, Emerald_Image, 0.2, GEM_TYPES.EMERALD),
    new Card(3, 'Ruby', CARD_TYPES.GEM, Ruby_Image, 0.4, GEM_TYPES.RUBY),
    new Card(4, 'Emerald', CARD_TYPES.GEM, Diamond_Image, 0.8, GEM_TYPES.DIAMOND)
]
    


// export const Back : ICard = new Card(0, 'Back', CARD_TYPES.BACK, Back_Image);


// export const Thieve : ICard = new Card(1, 'Thieve', CARD_TYPES.BOMB, Thieve_Image);


// export const Emerald : ICard = new Card(2, 'Emerald', CARD_TYPES.GEM, Emerald_Image, 0.2, GEM_TYPES.EMERALD);


// export const Ruby : ICard = new Card(3, 'Ruby', CARD_TYPES.GEM, Ruby_Image, 0.4, GEM_TYPES.RUBY);


// export const Diamond : ICard = new Card(4, 'Emerald', CARD_TYPES.GEM, Diamond_Image, 0.8, GEM_TYPES.DIAMOND);





