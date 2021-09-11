//export const cards = new Map();
import Back_Image from './Cards/Back.svg';
import Thieve_Image from './Cards/Thieve.svg';
import Emerald_Image from './Cards/Emerald.svg';
import Ruby_Image from './Cards/Ruby.svg';
import Diamond_Image from './Cards/Diamond.svg';


export enum CARD_TYPES {
    BACK,
    GEM,
    BOMB
}
export enum GEM_TYPES {
    EMERALD,
    RUBY,
    DIAMOND
}

export enum MODE{
    EASY=1,
    MEDIUM=2,
    HARD=3
}

export var currentMode : MODE = MODE.EASY;

export interface ICard{
    readonly id : number,
    readonly name : string,
    readonly type : CARD_TYPES,
    readonly path : string,
    texture? : any
}

export interface IGemCard extends ICard{
    readonly worth : number,
    readonly gem_type : GEM_TYPES

}

export function getRealWorth(gem: IGemCard) : number{
    return (gem.worth * currentMode);
}

// TODO
// const => Classes

export const Back : ICard = {
    id : 0,
    name : 'Back',
    type : CARD_TYPES.BACK,
    path : Back_Image
}

export const Thieve : ICard = {
    id : 1,
    name : 'Thieve',
    type : CARD_TYPES.BOMB,
    path : Thieve_Image
}

export const Emerald : IGemCard = {
    id : 2,
    name : 'Emerald',
    worth : 0.2,
    type : CARD_TYPES.GEM,
    path : Emerald_Image,
    gem_type : GEM_TYPES.EMERALD
}

export const Ruby : IGemCard = {
    id : 3,
    name : 'Ruby',
    worth : 0.4,
    type : CARD_TYPES.GEM,
    path : Ruby_Image,
    gem_type : GEM_TYPES.RUBY
}

export const Diamond : IGemCard = {
    id : 4,
    name : 'Diamond',
    worth : 0.8,
    type : CARD_TYPES.GEM,
    path : Diamond_Image,
    gem_type : GEM_TYPES.DIAMOND
}




