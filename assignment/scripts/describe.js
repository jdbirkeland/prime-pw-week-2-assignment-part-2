// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
//
// We make a variable called name and set it to 'Dane' as a string.
// We check if sting name 'Mary' is of equal value And equal type to 'Dane'.
// It is not equal to value and type so we move down to else.
// Because else is the only other option that work we will console.log 'How do you do?'.
//
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}

*/

// 2. WRITE YOUR DESCRIPTION HERE
//
// We create a variable named secret.  It has not value at this point.
// We create a variable named code and set it to 123.
// We check to see if code is equal to value and type to 123 and this is correct.
// Because this is correct secret = 'super' and code will now be multiplied by 2 giving code a new value of 246.
// We now check to see if code is greater than 250.  It is 246 which is less than 250 so nothing is done and we move on.
// Console log super which now will equal and display as 'super'.



//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//
//Create varialbe called isStudent and set it to boolean true.
//Create variable called age and set its value to 34.
//Create variable called zip and set it to 55407
//We check if isStudent is equal in value and type to true AND is zip is greater in value than 8000.
//Student is equal in value and type to true But zip is not greater in value than 8000 so we move to the next else if statement.
//We check if isStudent is equal in value and type to false OR if age is less than 30.
//Neither of these statements are correct so we move to the next else if statement.
//We check to see if isStudent is euqal in value and type to true.
//This statement is correct so we console.log 'Welcome to Prime!'
//Beccause this else if statement is correct and console.log was run we do not go to the next else statement and therefore do not run it's console.log either.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'


/*
let colorOne = 'red';  FIX - let colorOne = 'red'; Solution - let colorOne = 'blue';
let colorTwo = 'blue'; FIX - let colorTwo = 'blue'; Solution - let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple'; Fix - No colorTwo or value; Solution - add colorTwo = 'purple' so now both colorOne and colorTwo will equal 'purple'
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4; FIX - time is not a 'const' it should be a variable.  Solution - let time = 4.

if (temp > 39 || time >= 4) { FIX - this is not an OR statement.  Solution - replace '||' with '&&'.
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21; FIX - minAge is not a const and should be a variable. Solution - let minAge = 21.

if(minAge <= age) {
  console.log('no entry'); FIX - colsole.log should be 'entry'.  Solution - console.log('entry').
} else {
  console.log('enter'); FIX - colsole.log should be 'no entry'.  Solution - console.log('no entry').
}
*/
