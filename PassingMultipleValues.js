let res = demoAdd(2,3);
console.log(res);

function demoAdd(x,y){
    return(x+y);
}


function demoAddAll(z){
    let out=0;
    for(let i=0;i<z.length;i++){
        out=out+z[i];
    }
    return(out);
}
let array = [10,20,30,40,50];
console.log(demoAddAll(array));


function demoAddAll2(...z){  //rest parameter  ... accepts any number of values
    let out=0;
    for(let i=0;i<z.length;i++){
        out=out+z[i];
    }
    return(out);
}
console.log(demoAddAll2(2,4,1,3,5,5));
console.log(demoAddAll2(...array)); //spread parameter
console.log(demoAddAll2(array));


//Write a function to add all numbers withing given range
function getSumOfRange(rStart, rEnd){

        let res=0;
        for(i=rStart; i<=rEnd; i++)
            res = res + i;
        return(res)
    }
console.log(getSumOfRange(1,5));
