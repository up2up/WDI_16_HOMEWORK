typeof 15
// Prediction: number
// Actual: number

typeof 5.5
// Prediction: number
// Actual: number

typeof NaN
// Prediction: number
// Actual: number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: boolean
// Actual: true

typeof (1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: "hamburger"
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual:

"1" - "3"
// Prediction: NaN
// Actual: -2

"johnny" + 5
// Prediction: "johnny5"
// Actual: "johnny5"

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN


//Arrays
//Add an element to the back of an array.
var array1 = ["a", "b", "c"];
array1.push("d");

//Remove an element from the back of an array.
array1.pop(1);

//Add an element to the front of an array.
array1.unshift("a");

//Remove an element from the front of an array.
array1.shift(1);

//Concatenates all the elements in an array into a string.
array1.join("");

//Separates the characters of a string into an array. This one is a string method.
var str = "abcde";
str.split("");


var numbers = [2, 4, 6, 8]
numbers.pop()   //8
numbers.push(10) // [2, 4, 6, 8, 10]
numbers.unshift(3) // [3, 2, 4, 6, 8, 10]

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
//["dot", "dash", "pause", "dash", "dot"]


var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles) // [["Paul", "John", "George", "Pete"]]
bands.unshift(stones) //[["Brian", "Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George", "Pete"]]
bands[bands.length - 1].pop() // [["Brian", "Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George"]]
bands[0].shift() // [["Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George"]]
bands[1][3] = "Ringo" // [["Mick", "Keith", "Ronnie", "Charlie"],["Paul", "John", "George", "Ringo"]]


//Booleans & Comparison Operators
//true, false, false, false
//true, true, true, false
//false, true, false
//false, false, true, false

//Conditionals
function bar(age, hasId) {
  if (hasId) {
    if (age > 75) {
      console.log("Are you sure you want to be here?");
    }
    else {
      if (age > 21) {
        console.log("Come on in!");
      }
      else {
        if (age < 18) {
          console.log("You're too young to be in here!");
        }
        else if (age >= 18 && age <= 21) {
          console.log("Come on in (but no drinking)!");
        }
      }
    }
  }
  else {
    console.log("No ID, no entry");
  }
}
bar(76, false);

//Fizz-Buzz

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  else if (num % 3 === 0) {
    return "Fizz";
  }
  else if (num % 5 === 0) {
    return "Buzz";
  }
  else {
    return num;
  }
}
var output = [];
for (i = 1; i < 100; i++) {
  output.push(fizzBuzz(i));
}
console.log(output.join(", "));