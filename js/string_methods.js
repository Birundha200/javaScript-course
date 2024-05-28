//Concat

let aa="Birundha";
let bb="Pasupathi";

let cc=aa.concat(",",bb);

console.log(cc);

//Append

let dd="Eniyan";

 dd+="Mani";

 console.log(dd)

 //Escaping

 let ee='she can\'t run';

 console.log(ee,"ESCAPING")

 //Length

 let ff="Birundha";

 console.log(ff.length);

 //toUpperCase,toLowerCase

 console.log(ff.toLocaleLowerCase());
 console.log(ff.toLowerCase());
 console.log(ff.toUpperCase());

 //indexOf

 let gg="Birundha";

 console.log(gg.indexOf("n"),"INDEXOF");

 //lastIndexOf

 let hh="Pasupathi";

 console.log(hh.lastIndexOf("p"),"LASTINDEXOF");

 //charAt

 let ii="Birundha";
 console.log(ii.charAt(4));

 //charCodeAt

 console.log(ii.charCodeAt("d"));

 //substr

 console.log(ii.substr(0,4))

 console.log(ii.substr(4));

 console.log(ii.substr(4,0));

 console.log(ii.substr(25,30))

 //substring

 console.log(ii.substring(1,4));

 console.log(ii.substring(4,1))

 //slice

//  slice(startingIndex,endingIndex)

console.log(ii.slice(3,7));
console.log(ii.slice(-5))
console.log("12345678910".slice(2,6))

//split

let jj="Birundha Eniyan Pasupathi Mani";

console.log(jj.split(" "));

//replace

let kk="I am from namakkal";

let ll=kk.replace("from"," ");

console.log(ll);

//includes

const students=["Birundha","Eniyan","Mani"];

console.log(students.includes("Eniyan"));

console.log(students.includes("pasu"));

//trim()

let mm=" Birundha ";
console.log(mm)
console.log(mm.trim());

//padStart,padEnd

let nn="6";
console.log(nn.padStart(5,9));

let oo="7";
console.log(oo.padEnd(8,4))