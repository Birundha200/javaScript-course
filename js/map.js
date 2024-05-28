
const numbers=[1,2,3,4,5,6,7,8,9,0];

const sqrt=numbers.map((value)=>{
	return Math.sqrt(value).toFixed(2)
})

console.log(sqrt);
console.table(sqrt);

const users =[
	{name:"Sam", age:15, city: "Chennai",
	salary: 10500},
	{name: "Ravi", age: 22, city: "Namakkal",
	salary: 12000},
	{name:"Joes", age:18, city: "Hosur",
	salary: 6000},
	{name: "Aureen", age: 47,city: "Dharmapuri",
	salary:10000},
	{name:"Stanley", age:10, city: "Salem",
	salary:8000},
	{name:"Ram", age:12, city: "Salem",
	salary:10000},
	];

	const eligible_status=users.map((user)=>({
      ...user,
			status:user.age>=18?"Eligible":"Not Eligible"

	}))
		
console.log(eligible_status);
console.table(eligible_status);

// This is for Comparing to forEach and map function
numbers.forEach((number)=>console.log(number*2))
// console.log(doubleddArray,"This is using FOREACH method")
const doubleddArrayy=numbers.map((number)=>number*2);
console.log(doubleddArrayy,"This is using MAP method")