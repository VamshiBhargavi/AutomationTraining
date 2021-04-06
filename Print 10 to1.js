//print from 10 to 1
for(i=10;i>=0;i--){
    console.log(i);   
}

//reverse string
//9999: 2000*4, 500*3, 200*2, 50*1, 20*2, 5*1, 2*2
let money = 9999;
let denom = [2000,500,200,100,50,20,10,5,2,1]

let noOf2k = parseInt(money/denom[0]);
money = money%denom[0];

let noOf500 = parseInt(money/denom[1]);
money = money%denom[1];

let noOf200 = parseInt(money/denom[2]);
money = money%denom[2];

let noOf100 = parseInt(money/denom[3]);
money = money%denom[3];

let noOf50 = parseInt(money/denom[4]);
money = money%denom[4];

let noOf20 = parseInt(money/denom[5]);
money = money%denom[5];

let noOf10 = parseInt(money/denom[6]);
money = money%denom[6];

let noOf5 = parseInt(money/denom[7]);
money = money%denom[7];
console.log(noOf2k, noOf500, noOf200, noOf100, noOf50, noOf20, noOf10, noOf5);

money = 9999;
for(d=0; d<denom.length; d++){
    let result  = parseInt(money/denom[d]);
    console.log(result + "*" + denom[d] );

    money = money%denom[d];
}