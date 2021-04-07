let assign = function () {
    console.log("execute funtions");
}
assign()


function Sum(x,y,add) {
    add(x,y)  
}
Sum(10,10,function (a,b){
    console.log(a+b);
})

let array = [10,20,10,20];
for(let i=0;i<array.length;i++){   //index based for loop
    console.log(array[i]);
}

//Advanced For Loop which prints the same as above
for(let i of array){
    console.log(i);
}

//for each internal loop.. executes  arraylength times i.e, 10,20,10,20 4 times
array.forEach(function (v) {
    console.log(v);
});