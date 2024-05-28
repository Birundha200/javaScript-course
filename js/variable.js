// Var,Let,Const Variables;

//Scope

if(true){
	var value='This is the value'
	console.log(value,"This is the inside scope VAR")
}

console.log(value,"This is OutSide Scope VAR")

if(true){
	let value1='This is the value'
	console.log(value1,"This is the inside scope LET")
}

// console.log(value,"This is OutSide Scope LET")
//Value1 is not defined-Error

if(true){
	const value2='This is the value'
	console.log(value2,"This is the inside scope CONST")
}

// console.log(value2,"This is OutSide Scope CONST")
//Value2 is not defined-Error


//Variable redeclaration

var a=20;
console.log(a);
var a=25;
console.log(a,"VAr redeclare")


let a1=20;
console.log(a1);
//Does not allow to redeclare same variable 
let a3=25;
console.log(a3,"let redeclare")


const a2=20;
console.log(a2);
//Does not allow to redeclare same variable 
const a4=25;
console.log(a4,"const redeclare")

// VALUE REASSIGNMENT

var b=10
console.log(b,"First");
b=20;
console.log(b,"Second")

let b1=30
console.log(b1,"First");
b1=40;
console.log(b1,"Second")

//Const does not allow to reassign the variable
const c1=50
console.log(c1,"First");
c2=20;//Uncaught TypeError: Assignment to constant variable.
console.log(c1,"Second")


//Const  allow to reassign the object key and value

const obj={Name:"Birunda",age:"23"}

console.log(obj,"This is the first object");

obj.Name="Pasupathi";

console.log(obj,'This is the SECOND Object');

obj.SecondName="VAlue Value";

console.log(obj,"This is the THIRD Object")