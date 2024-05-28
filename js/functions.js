// Functions with return statement

function add(a,b){
	return a+b;
}

console.log(add(10,10));

//Functions without return statement

function sub(c,d){
	console.log(c-d);
}

sub(10,7);

//functions with arbitary statement

function multiply(){
	let product=1;
	for(let w=0;w<arguments.length;w++){
		product*=arguments[w];
	}
	return product;
}

console.log(multiply(10,10,10,20));

//Using spread operator

function divide(...args){
	let div=1;
	for(let s=0;s<args.length;s++){
		div/=args[s]
	}
	return div
}
console.log(divide(23,10,100))

function getDetails(value,value1){
	console.log(value);
	console.log(value1);
	return value+value1
}

//FUNCTION WITH AS EXPRESSION

const addd=function(a,b){
	return a+b;
}

console.log(addd);
console.log(addd(10,20));

const birundha=addd(10,20)
document.getElementById("value1").innerHTML=birundha;