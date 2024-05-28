//TYPE CONVERSION

let ant=27;
console.log(ant);
console.log(ant.toString())

let ant1=28.5;
console.log(ant1.toString())

let ant2=["E2INFOSYSTEMS.COM","BIRUNDHA"];
console.log(ant2.toString());

let ant3=true;
console.log(ant3)
console.log(ant3.toString())

//string to number.
let bat="125";
console.log(bat,typeof bat);
bat=Number(bat)
console.log(bat,typeof bat);

document.getElementById("value").innerHTML=ant2

//ParseInt

let bat1="125.222222";
console.log(bat1,typeof bat1);
bat1=parseInt(bat1)
console.log(bat1,typeof bat1,"PArseInt value");

//NaN

let bat2="Tutor Joes";
console.log(bat2,typeof bat2);
bat2=Number(bat2)
console.log(bat2,typeof bat2);

//Type Coercian

let bat4="125";
let bat5=125;
console.log(bat4+bat5,"Birundha");
bat4=Number(bat4)
console.log(bat4+bat5,'Eniyan');