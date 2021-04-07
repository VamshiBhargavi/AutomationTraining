//for each internal loop.. executes  arraylength times i.e, 10,20,10,20 4 times
let array = [10,20,30,40];
array.forEach(function (v) {
    console.log(v);
});

//anonymous fn shortform
array.forEach(v=>console.log(v))

//short for syntax

//anonymous fuction short form () => {}
// () is optional if called function having single parameter
// {} is optional if called function having single line
// if {} not used then that single line becomes return value

// this is called Lamda expression
// this is to simplify creating of function which has single line

function Sum(x,y,add) {
    return add(x,y)  
}
Sum(10,10,function (a,b){
    return a+b;
})

Sum(20,30,(a,b)=>{return a+b})
console.log(Sum(20,30,(a,b)=>a+b));