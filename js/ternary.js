//TERNARY OPERATOR

// Syntax:
// true?"yes":"no"

let age=18;

let eligible=age>=18?"You are eligible for vote":"You are not eligible for vote";

console.log(eligible)

function welcome(name){
	const welcomer=name?name:"Please pass the valid name"
  return "Hello  "+welcomer
}

console.log(welcome("Birundha"))

const user={name:"Birundha",age:"23",native:"Namakkal",professional:"developer"}

const greeting=(user)=>{

	const greeter=user?user.professional:" our home"

	return "Welcome to "+greeter
}

console.log(greeting(user))


//GRADE

const obj1={
	student1:{name:"Birundha",avg:70},
	student2:{name:"Pasupathi",avg:80},
	student3:{name:"Eniyan",avg:90}
}

let grade;
for(let key in obj1){
	let avg=obj1[key].avg
	grade=avg>=90?"A GRADE":avg>=80?"B GRADE":avg>=70?"C GRADE":avg>=60?"D GRADE":"E GRADE";
	console.log(key+" "+grade)
}

const array = [
  { student1: { name: "Birundha", avg: 70 } },
  { student2: { name: "Pasupathi", avg: 80 } },
  { student3: { name: "Eniyan", avg: 90 } }
];

console.log(array);

for (let obj of array) {
  for (let key in obj) {
    let avg = obj[key].avg;
		grade=avg>=90?"A GRADE":avg>=80?"B GRADE":avg>=70?"C GRADE":avg>=60?"D GRADE":"E GRADE";
	console.log(key+" "+grade)
    
  }
}


//NULLISH COALESCING OPERATOR

const employee={name:"Birundha"}

console.log(employee.name);

console.log(employee);

console.log(employee.salary);

employee.salary??=30000;

console.log(employee.salary)

console.log(employee)


