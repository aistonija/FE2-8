let myTask = "Hello, this text is in, upper case or in lower case";

// isprintinu antraja L raide pakeitus i didziaja, bet neissaugota
// console.log(myTask[3].toUpperCase());
// isprintinu e raide pakeitus i didziaja, bet neissaugota
// console.log(myTask.charAt(1).toUpperCase());

// console.log(myTask);

// isprintinu visa sakini didziosiomis raidemis
// console.log(myTask.toUpperCase());

// sukuriu kintamaji ir issaugau visa sakini pakeitus didziosiomis raidemis
let str2 = myTask.toUpperCase();
// console.log(str2);

//1.

// console.log(myTask.length);

//2.nenormalus, statinis budas

let sentence =
  myTask.charAt(0).toUpperCase() +
  myTask.substring(1, 7) +
  myTask.charAt(7).toUpperCase() +
  myTask.substring(8, 12) +
  myTask.charAt(12).toUpperCase() +
  myTask.substring(13, 17) +
  myTask.charAt(17).toUpperCase() +
  myTask.substring(18, 20) +
  myTask.charAt(20).toUpperCase() +
  myTask.substring(21, 23) +
  myTask.charAt(23).toUpperCase() +
  myTask.substring(24, 29) +
  myTask.charAt(29).toUpperCase() +
  myTask.substring(30, 34) +
  myTask.charAt(34).toUpperCase() +
  myTask.substring(35, 37) +
  myTask.charAt(37).toUpperCase() +
  myTask.substring(38, 40) +
  myTask.charAt(40).toUpperCase() +
  myTask.substring(41, 46) +
  myTask.charAt(46).toUpperCase() +
  myTask.substring(47, 51);

// console.log(sentence);

// normalus budas butu..

let split = myTask.split("");
// console.log(split);

// let changed = split
//   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");

// console.log(changed);

// 3. naudodami viena is string metodu pakeiskite siame sakinyje zodi 'upper' i 'uber'.

let replaced = myTask.replace("upper", "uber");
console.log(replaced);

// 4. naudodami viena is string metodu, suraskite kuriuo indexu stovi kablelis, ir isloginkit tokiu formatu:

// index of ",": {rastas indexas}

let index = myTask.indexOf(",");

console.log(`index of ",": ${index}`);
