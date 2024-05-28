function callback(){
	document.getElementById("value1").innerHTML="This is my callback function";
}

function higherOrderFunction(fun){
	fun();
}

higherOrderFunction(callback);


setTimeout(function(){
	console.log("This is the setTimeout function")
},3000)

setInterval(function(){
	console.log("This is the setIntervel function")
},3000)

let arrayy=[1,2,3,4,5,6,7,8,9,0]

let values=arrayy.forEach(function(num){
	console.log(num);
})


function majorityElement(nums) {
	const countMap = new Map();
	console.log(countMap)
	
	for (const num of nums) {
			let l=countMap.set(num, (countMap.get(num) || 0) + 1);
			console.log(countMap.get(num),'value 1')
			console.log("Birundha",num)
			console.log(nums.length/2)
			if (countMap.get(num) > nums.length / 2) {
				console.log(countMap.get(num),"abcdefghijklmnopqrstuvwxyz");
				console.log(num,"inside the loop")
					return num;
			}
	}
	
	return null; // Majority element always exists, so this line should not be reached
}

// Example usage
const nums1 = [3, 2, 3];
console.log(majorityElement(nums1)); // Output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2)); // Output: 2