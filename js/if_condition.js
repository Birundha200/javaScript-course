//IF STATEMENT

let voteAge=prompt("Enter Your Age:");

if(voteAge>=18){
	console.log("You are eligible for vote")
}else{
	console.log("Ne innum valaranum thambi")
}


//ELSE IF LADDER

let average=prompt("Enter your average mark: ");

// if(average>=90&&average<=100){
// 	console.log("A GRADE");
// }else if(average>=80&&average<90){
// 	console.log("B GRADE")
// }else if(average>=70&&average<=80){
// 	console.log("C GRADE")
// }else{
// 	console.log("D GRADE")
// }

const birundhaa=average>=90&&average<=100?"A Grade":average>=80&&average<=90?'B Grade':average>=70&&average<=80?"C Grade":"D Grade";
console.log(birundhaa,"This is the looping stateent new");

// Nested IF STATEMENT
let passMark=35;
let averageMark=prompt("Enter your average mark here")
if(passMark&&averageMark>=passMark){
	
	if(averageMark>=90&&averageMark<=100){
		console.log("A GRADE");
	}else if(averageMark>=80&&averageMark<90){
		console.log("B GRADE")
	}else if(averageMark>=70&&averageMark<=80){
		console.log("C GRADE")
	}else{
		console.log("D GRADE")
	}

}else{
	console.log("You are fail")
}