//Only Odds
//create js code that accepts an array of numebrs and returns an array with only the odd numbers
//create an array
//create a for loop that will test each number in the array
// use modulo to determine if a number is even, else it is odd

const evensOdds = [2, 4, 6, 8, 10, 11, 12];
const oddArray = [];

for (let i = 0; i < evensOdds.length; i++) {
  if (evensOdds[i] % 2 === 1) {
    oddArray.push(evensOdds[i]);
  }
}

console.log(oddArray);

//Vowel Vs Consonant
//create js code that accepts a string of lowercase letters. print how many consonants and vowels it has.
// need to check each letter within the string to see IF it is a vowel, and if so count it as a vowel, ELSE it is a consonant and should be counted as a consonant

//Do not include the below part in the code, keeping for posterity so I remember my mistake
// for (let i = 0; i < string.length; i++) {
//     if (string[i] !== "a" || string[i] !== "e" || string[i] !== "i" || string[i] !== "o" || string[i] !== "u") {
//         consonants++
//     }
// }
//Do not include this part of the code^^

const string = "sofie";
let consonants = 0;
let vowels = 0;

for (let i = 0; i < string.length; i++) {
  if (
    string[i] === "a" ||
    string[i] === "e" ||
    string[i] === "i" ||
    string[i] === "o" ||
    string[i] === "u"
  ) {
    vowels++;
  } else {
    consonants++;
  }
}
console.log(
  string + " has " + consonants + " consonants " + vowels + " vowels"
);

//Reverse Array
//create a variable for the input array
//create a variable for the expected reverse array
// needs to go through each number and move it to tne end of the array one at a time
//reminder to self "i--"" is shorthand for "i = i - 1"

const inputArray = [1, -1, 2, -3, 5, -8, 13];
const outputArray = [];
i = 0;

for (let i = inputArray.length - 1; i >= 0; i--) {
  outputArray.push(inputArray[i]);
}

console.log(outputArray);

//FizzBuzz
//create a js code that prints each number 1 to 100 on a new line
//for each multiple of 3, print "Fizz" instead of number
//for each multiple of 5, print "buzz' instead of the number
//for numbers that are multiples of both, print "FizzBuzz"
//check each number for modulo 0 for being divided by 3 AND 5
//print FizzBUzz instead of the number
//check each number for modulo 0 for being divided by 3
//print Fizz instead of the number
//check each number for modulo of 0 for being divided by 5
//print Buzz instread of the number

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
