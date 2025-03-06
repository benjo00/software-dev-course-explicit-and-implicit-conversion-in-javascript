/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; //added explicit Number conversion
console.log("The result is: " + result);

let isValid = Boolean(false);//removed quotes so that it will be seen as a false statement.
if (isValid) {
    console.log("This is valid!");
} else { //added else statement so it can still run
  console.log("This is not valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // was outputting 52 due to implicit conversion. Add Number conversion to fix output.
console.log("Total Age: " + totalAge);

//my own examples

//explicit type conversion:
let numberOfApples = Number("10");//I used the Number conversion to explicitly make this a number despite it being in quotes making it a string
let numberOfOranges = 20;
let sumFruit = numberOfApples + numberOfOranges;
console.log("The fantastical fruit total is " + sumFruit);

//implicit type conversion:

let sum = 30 + "2";
console.log(sum);//returns 302 because 30 was implicitly converted to a string and added to the string "2".
