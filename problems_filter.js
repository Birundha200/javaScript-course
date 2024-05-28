//Even Numbers
const filterNumbers=[1,2,3,4,5,6,7,8,9,10];

const filteredNumbers=filterNumbers.filter(number=>number%2===0);
console.log(filteredNumbers);


const Objectss=[{name:"Birundha",age:30},{name:"pasupathi",age:25}]

const filteredObjects=Objectss.filter((object)=>object.age>=25);
console.log(filteredObjects);

// Using length

const usingLengthArray=["Apple","Banana","Dog","Elephant","Rat"];
const filteredUsingLengthArray=usingLengthArray.filter(arr=>arr.length===3);
console.log(filteredUsingLengthArray)

//Filter the fruits
let items = [
	{name: "apple", category: "fruit" },
	{ name: "carrot", category: "vegetable" },
	{name: "banana", category: "fruit" }
	];

	const filteredFruits=items.filter((item)=>item.category==="fruit");
	console.log(filteredFruits)

	const products = [
		{name: 'Apple', category: 'fruit', price: 100 },
		{name: 'Carrot', category: 'vegetable', price: 50 },
		{name: 'Orange', category: 'fruit', price: 120 },
		{name: 'Broccoli', category: 'vegetable', price:
		75 },
		{name: 'Mango', category: 'fruit', price: 110 }
		];
		const expensiveFruits =products.filter
		(product=>product.category==='fruit' && product.
		price>=100);
		console.log(expensiveFruits);
	
		let books=[
			{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2011 },
			{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
			{ title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and WebGraphics', author: 'Jennifer Niederst Robbins', year: 2012 },
			{ title: 'HTML and CSS: Design and Build Websites', author: 'Jon Duckett', year: 2011 },
			{ title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems', author: 'LeaVerou', year: 2015 },
			{ title: 'JavaScript and JQuery: Interactive Front-End Web Development', author: 'JonDuckett', year: 2014 },
			{ title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: '2014-2019' },
			{ title: 'React: Up & Running', author: 'Stoyan Stefanov', year: 2016 },
			{ title: 'Node.js Design Patterns', author: 'Mario Casciaro', year: 2014 },
			{ title: 'Head First Design Patterns', author: 'Eric Freeman and Elisabeth Robson', year:2004 }
		];

   const filteredBooks=books.filter(book=>book.title.toLowerCase().includes ('html')||book.year===2011);
   console.log(filteredBooks);