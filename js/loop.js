// While LOOP

let i=0;
console.log("Birundha")
while(i<=10){
	console.log(i);
	i++;
}

// MULTIPLICATION TABLE USING DO WHILE LOOP

let table=20;
let limit=10;
let j=1;

do{
	console.log(table+"x"+j+"="+(table*j));
	j++;
}while(j<=limit)


//FOR LOOP

for(let k=11;k<=20;k++){
	console.log(k)
}


//NESTED LOOP

for(let l=0;l<=1;l++){
	for(let m=0;m<=1;m++){
		for(let n=0;n<=1;n++){
		console.log(m,"m",l,"l",n,"n");
	}
}
}

let nums=[];

for(let o=0;o<=5;o++){
	nums.push([]);
	console.log(nums.push([]));
	for(let p=0;p<=6;p++){
		nums[o].push(p);
		
	}
}
console.table(nums)


//FOR OF LOOP
 let array1=["Birundha","Eniyan","Pasupathi","Mani",1,34,456];

 for(let u=1;u<array1.length;u++){
	
      console.log(array1[u],'Normal for loop')
 }

 for(let value2 of array1){
	console.log(value2,"For OF LOOP")
 }

 //FOR IN LOOP FOR OBJECTS {}

 let obj2={
	name:"Birundha",
	age:23,
	profession:"Developer",
	company:"E2infosystems",
	native:"Namakkal"
 }

 for(let key in obj2){
	console.log(key,":",obj2[key])
 }

//  To converting the object{} to array []

let obj3={
	name:"Birundha",
	age:23,
	profession:"Developer",
	company:"E2infosystems",
	native:"Namakkal"
 }

let arr_keys=Object.keys(obj3);
console.table(arr_keys);

let convertingArray=Object.values(obj3)
console.table(convertingArray)

for(let v=0;v<arr_keys.length;v++){
	console.log(arr_keys[v],":",convertingArray[v])
}

//Continue,break

for(let z=1;z<=10;z++){
	if(z==4){
		break;
	}
	console.log(z);
}
console.log("-----------------------------------")
console.time("Timerr")
for(let y=1;y<=10;y++){
	if(y==3){
		continue;
	}
	console.log(y)
}
console.timeEnd("Timerr");

//Label Block in JAVASCRIPT

const students=[
	["Birundha","Maha","Harsima"],
	["Thrisha","Nayanthara","Snegha"],
	["Baal","Bat","IPL match"]
]

for(let student of students){
	console.log(student)
	inner:
  for(let member of student){
		// console.log(member)
		if(member.startsWith("Z")){
			console.log(member)
			break inner;
		}else{
			console.log("There is no name with requested letter")
		}
	}
}