//write a function to return odd number between a range

function getOddNumbersRange(rStart, rEnd){

    for(i=rStart; i<=rEnd; i++){
        if(i%2 == 1){
        console.log(i);
        }
    }
}
getOddNumbersRange(10,20);

//But we need the range of values to be RETURNED. Not just PRINT.

function getOddNumbersRange(rStart, rEnd){

    let oddNumbers=[];
    for(i=rStart; i<=rEnd; i++){
        if(i%2 == 1){
        oddNumbers.push(i);
        }
    }
    return oddNumbers;
}
console.log(getOddNumbersRange(10,20));
