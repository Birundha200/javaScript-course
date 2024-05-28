//Arrow function

const multiplyy = (a, b) => {
	return a * b;
}
 
document.getElementById("value1").innerHTML = multiplyy(100, 100);

//Arrow functions with map()

let numbers=[1,2,3,4,5];
console.log(numbers);

let doubledNumbers=numbers.map(number=>number*2);

document.getElementById("value1").innerHTML = doubledNumbers;

//Using Arrow functions with filter()

let fruits=['apple','banana','chia','Dragonfruit','Elephant'];

let filteredValues=fruits.filter(fruit=>fruit.length>5)

document.getElementById("value1").innerHTML = filteredValues;

//Using arrow functions with reduce()

let total=numbers.reduce((sum,number)=>sum+number,0);

document.getElementById("value1").innerHTML = total;

//Using arrow functions to create a closure

let createCounter=()=>{
	let count=0;
	return ()=>{
		count++;
		return count;
	}
}
let counter=createCounter();
console.log(counter);
document.getElementById("value1").innerHTML=counter();






