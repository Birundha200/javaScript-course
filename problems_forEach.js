//1. Example of using the forEach method to print each element of an array:

const vegetables=["Tomato","Potato","Ladies Finger","Brinjal","Beetroot","Carrot"];

vegetables.forEach((vegetable)=>{
	console.log(`This is the ${vegetable}`);
})

//2. Example of using the forEach method to sum all elements of an array:

const numbers=[1,2,3,4,5,6,7,8,9];

let total=0
numbers.forEach((number)=>{
	total=total+number;
})
console.log(total);


//3. Example of using the forEach method to create a new array(double the existing array) from an existing one:

let doubledArray=[];

numbers.forEach((number)=>{
	let value=number*2;
	doubledArray.push(value);
})
console.log(doubledArray,"This is the Doubled Array");

//4. Example of using the forEach method to find the max element of an array:

let max=numbers[0];

numbers.forEach((number)=>{
	if(number>max){
		max=number
	}
})
console.log(max,'This is the maximum number');

//5. Example of using the forEach method to calculate the average of an array:

let sum=0;
let count=0;
numbers.forEach((value)=>{
  sum+=value;
	count++;
})
console.log(sum,'This is the sum',numbers.length)

let average=sum/numbers.length;
console.log(sum/count,"This is the average using COUNT Of the loop")

console.log(average,"This is the average Value");

//6. Example of using the forEach method to filter the even numbers an array:

let eventNumbersArray=[];
numbers.forEach((value)=>{
	if(value%2===0){
		eventNumbersArray.push(value)
	}
})
console.log(eventNumbersArray,'This is the even numbers filter array')

//7. Example of using the forEach method to update elements of an array:

let names=["Birundha","Pasupathi","Mani","Eniyan"];

names.forEach((name,index)=>{
	names[index]=name.toUpperCase()
})
console.log(names);

// 8. Example of using the forEach method to to remove elements from an array:

const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numberss.forEach((number, index) => {
  if (number > 5) {
numberss.splice(index);
  }
});
console.log(numberss); // [1, 2, 3, 4, 5]

//9. Example of using the forEach method to check concat array element:

const words = ["hello", "world"];
let concat = "";
words.forEach(word => {
concat += word + " ";
});
console.log(concat); // "hello world "

// 10. Example of using the forEach method to check if an element exists in an array:

const fruits = ['apple', 'banana', 'cherry'];
let exists = false;
fruits.forEach(fruit => {
  if (fruit === 'banana') {
    exists = true;
  }
});
console.log(exists); // true

