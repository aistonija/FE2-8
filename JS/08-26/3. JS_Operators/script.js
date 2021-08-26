// binary

// operand1 operatorius operand2

// unary

// operand++

// salyga ? jeigu salyga atitiko, cia yra vykdomas kodas : jeigu salyga neatitiko, cia yra vykdomas kitas kodas

if (4 > 3) {
  console.log("yay daugiau");
} else {
  console.log("neee...");
}

4 > 3 ? console.log("yay daugiau") : console.log("neee...");

// 1. Assignment Operator yra vienguba lygybe (=)

// Sudetis +
// Atimtis -
// Daugyba *
// Dalyba /

let x = 12;
let y = 15;
x = x + y;
console.log(x);

// Sudetis +
let a = 12;
let b = 15;
a += 15;
console.log(a);

// Atimtis -
a -= b;
a = a - b;

// Daugyba *
a *= b;
a = a * b;

// Dalyba /
a /= b;
a = a / b;

// Liekana (modulo) %

// Vyksta vaikų šventė
// Dalyvauja 6 vaikai
let kids = 6;
// Ant stalo yra 20 keksiukų
let cupcakes = 20;

let cupcakesPerKid = Math.floor(cupcakes / kids);
console.log("keksiukai kiekvienam vaikui", cupcakesPerKid);

let cupcakesLeft = cupcakes % kids;
console.log("kiek keksiuku liko", cupcakesLeft);

console.log(54 % 8);

// Increment / Decrement

let num = 0;
num = num + 1;
num += 1;

// plius 1
num++;

// minus 1
num--;

let before = 0;
let after = 0;

console.log(++before, after++);

before += 1;
after += 1;

console.log(before, after);

// Atimkite antra kint. is pirmo kint.,
// gauta skaiciu padalinkite is trecio kint.,
// gauta skaiciu padauginkite is ketvirto kint.
// log bendra rezultata

const first = 100;
const second = 30;
const third = 2;
const fourth = 5;

let result = ((first - second) / third) * fourth;
console.log(result);

result = first - second;
let divide = result / third;
let multiply = divide * fourth;
console.log(multiply);
