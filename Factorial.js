// 5*4*3*2*1
function factorial(res){                           

let given = 1;
for(n=1; n<=res; n++){
    given=given*n;
    }
    return(given)
}
console.log(factorial(4));
