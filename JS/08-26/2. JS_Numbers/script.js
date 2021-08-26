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

// NaN
console.log(fixed / "dog");
