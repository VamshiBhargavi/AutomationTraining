function findOddNumber(n){

	if(n%2 == 1){
		console.log(n + " is an Odd Number");
	}
	else{
        console.log(n + " is an even number");
        
    }
}

findOddNumber(13)
FindFactorial(3)

function FindFactorial(p){
	let given = 1;
	for(n=1; n<=p; n++){
		given=given*n;
	}
	console.log(given);
}
