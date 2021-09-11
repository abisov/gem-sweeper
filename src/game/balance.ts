interface IBalance {
    GetValue() : number,
    Deposit(sum : number) : string,
    Charge(sum : number) : string
}

class Balance implements IBalance {
    
    private value : number = 0;

    constructor(sum : number){
        this.value = sum;
    }

    GetValue() : number{
        return this.value;
    }

    Deposit(sum : number) : string {
        this.value = this.value + sum;
        return ''
    }

    Charge(sum : number) : string {
        if(sum >= this.value ) this.value = this.value - sum;;
        return ''
    }

}

export const MainBalance = new Balance(0);
export const BetBalance = new Balance(0);
