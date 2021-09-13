import { Round } from "./utils";

interface IBalance {
    GetValue() : number,
    Deposit(sum : number) : string,
    Charge(sum : number) : string
}





class Balance implements IBalance {
    
    private value : number = 0;

    

    constructor(sum : number){
        this.value = Round(sum, 2);
    }


    Element : any;

    SetElement(Element : HTMLElement){
        this.Element = Element;
    }

    GetValue() : number{
        return Round(this.value, 2);
    }

    Set(sum : number) : number {
        return this.value = sum;
    }

    Deposit(sum : number) : string {
        this.value += sum;
        return ''
    }

    Charge(sum : number) : string {
        if(sum <= this.value ) this.value = this.value - sum;;
        return ''
    }

    CheckIfBalance(sum : number) : number{
        return MainBalance.GetValue() >= sum ? sum : BetBalance.GetValue();
    }

}

export const MainBalance = new Balance(1212.11);
export const BetBalance = new Balance(0);
export const CurBetBalance = new Balance(0);
