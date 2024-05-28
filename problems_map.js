// Double the array using map

const mapArrayNumbers=[1,2,3,4,5,6,7,8,9,10];

const dobleMapArrayNumbers=mapArrayNumbers.map((number)=>number*2);
console.log(dobleMapArrayNumbers);

//To change the each element to UpperCASe

const mapArray=["Birundha","Pasupathi","Eniyan","Mani"];

const toUpperMapArray=mapArray.map((word)=>word.toUpperCase());
console.log(toUpperMapArray);

//This is using CONCAT FUNCTION
const bitundha=mapArrayNumbers.concat(mapArray);
console.log(bitundha)

// This is using map function.It should have same length for both arrays
let pillows=["pillow 1","Pillow 2","Pillow 3","Pillow 4"];
let colors=["red","pink","yellow","blue"]

const pillows_colors=pillows.map((pillow,index)=>
	pillow+"-"+colors[index]
)
console.log(pillows_colors);

// Filtering an array
const filtermapArray=[1,2,3,4,5,6,7,8,9,0];

const filteredMapArray=filtermapArray.map(arr=>arr%2===0);
console.log(filteredMapArray)

//5. Extracting Properties from an Array of Objects
const users = [
	{name: "Ram", age: 30 },
	{ name: "Sam", age: 25 },
	{ name: "Ravi", age: 35 }
	];

	const extractingArray=users.map((user)=>user.name);
	console.log(extractingArray)


//6.Modifying an array of Objects

const modifiedArray=users.map(user=>({
	...user,
	age:user.age+1
}));
console.log(modifiedArray)


const values=["birundha",'pasupathi','eniyan','mani'];

const statValues=values.map((value,index,values)=>({
	name:value,
	length:value.length,
	position:index,
	totalWords:values.length
}))

console.log(statValues)