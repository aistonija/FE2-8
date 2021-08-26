//  Javascript Numbers

// binary, octal and hexadecimal systems

// let input = Number(prompt("Ivesk skaiciu"));
let input = 348;

console.log(input + " in decimal to decimal " + input.toString(10));
console.log(input + " in decimal to binary " + input.toString(2));
console.log(input + " in decimal to octal " + input.toString(8));
console.log(input + " in decimal to hexadecimal " + input.toString(16));
console.log(input + " in decimal to 36 " + input.toString(36));

// Math.floor()
let num = 56.499;
console.log(Math.floor(num));

// Math.ceil()
console.log(Math.ceil(num));

// Math.round()
console.log(Math.round(num));

// Math.trunc()
console.log(Math.trunc(num));

// Atsitiktinio skaiciaus generavimas
let random = Math.floor(Math.random() * 100);
console.log("atsitiktinis skaicius:", random);

// Didziausia verte Math.max()
let max = Math.max(1, 8, 56, 95, -6, -15, 1.325);
console.log(max);

// Maziausia verte Math.min()
let min = Math.min(-5, 12, -96, -0.36);
console.log(min);

// Math.pow() pakelimas laipsniu
let powowow = Math.pow(5, 3);
console.log(powowow);

// .toFixed() suapvalina skaiciu iki n skaitmenu po kablelio
// bet kokiu atveju konvertuojamas i string duomenu tipa

// let num = 56.499;
let fixed = num.toFixed();
console.log("toFixed: ", fixed);

// NaN - Not a Number
console.log(fixed / "dog");

// ParseInt & ParseFloat

let x = "1.501rem";
console.log(x, typeof x);
console.log(Number(x), typeof Number(x));
console.log(+x, typeof +x);
console.log(parseInt(x), typeof parseInt(x));
console.log(parseFloat(x), typeof parseFloat(x));

// ---- Exercise 1 ---- //

// Parašyti kodą, kuris ragina vartotoją įvesti du skaičius.
// alert() pagalba atvaizduoti sumą.

// let first = +prompt("pirmas skaicius");
// let second = +prompt("antras skaicius");
// alert(first + second);

// ---- Exercise 2 ---- //

// Sugeneruokite 5 atsitiktinius skaičius, išsaugokite juos atskiruose kintamuosiuose.
// Kiekvienas skaičius gali turėti iki 2 skaitmenų po kablelio, bet turi būti ne didesnis negu 10 (10 neįeina).

// Naudodami tinkamus metodus raskite:
// Didžiausią skaičių;
// Mažiausią skaičių;

let a = +(Math.random() * 10).toFixed(2);
let b = +(Math.random() * 10).toFixed(2);
let c = +(Math.random() * 10).toFixed(2);
let d = +(Math.random() * 10).toFixed(2);
let e = +(Math.random() * 10).toFixed(2);

console.log(a, b, c, d, e);

let mini = Math.min(a, b, c, d, e);
let maxi = Math.max(a, b, c, d, e);

console.log(mini, maxi);
