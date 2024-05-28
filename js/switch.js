//SWITCH STATEMENT

let value5=prompt("Enter the value");

switch(value5){
	case "1":
		console.log("One");
		break;
	case "2":
		console.log("Two");
		break;
	case "3":
		console.log("Three");
		break;
	case "4":
		console.log("Four")
		break;
	default:
		console.log('Invalid Input')
		break;
}


//Combining switch cases statement

let letter=prompt("Enter a alphabetic letter");

switch(letter){
	case "a":
	case "e":
	case "i":
	case "o":
	case "u":
	case "A":
	case "E":
	case "I":
	case "O":
	case "U":
		console.log(letter ," This is a vowel letter");
		break;
	default:
		console.log("Constant value what you are entered")
		break;
}