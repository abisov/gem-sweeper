import * as Cards from './cards'

export interface IBoard{
   Cards : Cards.ICard[]
}

class Board implements IBoard {
    Cards : Cards.ICard[] = []
}


