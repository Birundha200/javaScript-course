// Reduce Method:
// Syntax:Array.reduce(function(accumulator,value,index,array)=>{})
//Initial value of accumulator is 0.
const reduceArray=[1,2,3,4,5,6,7,8,9,10];
const sum=reduceArray.reduce((accumulator,currentValue)=>accumulator+currentValue)
console.log(sum);

//Flattened an array

const flatArray=[[1,2],[3,4],[5,6],[7,8]];

const flattendArray=flatArray.reduce((accumulator,value)=>accumulator.concat(value));
console.log(flattendArray);

const colorsArray=["red","blue","yellow","white","red","red","orange","Pink",'white'];

const sortedColorArray=colorsArray.reduce((accumulator,value)=>{
	if(value in accumulator){
    accumulator[value]++;
	}else{
		accumulator[value]=1;
	}
	return accumulator;
},{})

console.log(sortedColorArray);

//largest number in array using reduce

const largenumbers=[10,20,30,40,50];

const largestNumbers=largenumbers.reduce((accumulator,value)=>{return Math.max(accumulator,value)})
console.log(largestNumbers);

//GroupByCity
let people = [
	{ name: 'Rakesh', age: 25, city: 'Chennai' },
	{name: 'Raj', age: 30, city: 'Salem' },
	{name: 'Sara', age: 35, city: 'Chennai' }
];

const groupByCity=people.reduce((accumulator,value)=>{
	if(value.city in accumulator){
		accumulator[value.city].push(value)
	}else{
		accumulator[value.city]=[value]
	}
	return accumulator;
},{})
console.log(groupByCity)