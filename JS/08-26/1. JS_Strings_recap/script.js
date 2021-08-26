// Strings Recap

// ---- Exercise 1 ---- //

// 1. Sukurkite du kintamuosius - savo varda ir pavarde.
// Naudodami viena is string metodu, sujunkite siuos du kintamuosius i nauja kintamaji - pilna varda ir pavarde
let fName;
let lName;

fName = "Aiste ";
lName = "Zuperkaite";

let fullName = fName.concat(lName);
// console.log(fullName);

// ---- Exercise 2 ---- //

// 2. Atlikite ta pacia uzduoti, si karta susikurkite kintamuosius vardui ir pavardei, kuriuose saugosite reiksme is prompt().

// 2.1. uztikrinkite, kad ivestos reiksmes netures papildomu tarpu (whitespace) is krastu - reikia panaudoti viena is string metodu.

// 2.2. Sujunkite i viena kintamaji naudodami atgalines kabutes.

// fName = prompt("Jusu vardas").trim();
// lName = prompt("Jusu pavarde").trim();

// fullName = `${fName} ${lName}`;
// console.log(fullName);

// ---- Exercise 3 ---- //

// 3. Pasinaudokite turimais kintamaisiais ir sudarykite sakini naujame kintamajame.
// Jeigu nerandate jums tinkamos dalies pasinaudokite .replace() metodu.

// const firstOrSecond = "first or second";
// const valueOne = "A is the";
// const valueTwo = "letter of alphabet";

// naujas sakinys turi atrodyti taip:
// "B is the second letter of alphabet"

// let result =
//   valueOne.replace("A", "B") + " " + firstOrSecond.slice(9) + " " + valueTwo;

// console.log(result);
