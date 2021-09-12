export function RandomFromTo(min : number, max : number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function UniqueRandom(min : number, max : number, amount : number){
    var arr : number[] = [];
    while(arr.length < amount){
        var r = RandomFromTo(min,max);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

export function Round(num : number, fracDig : number) : number{
    return parseFloat(Number(num).toFixed(fracDig)) ;
}