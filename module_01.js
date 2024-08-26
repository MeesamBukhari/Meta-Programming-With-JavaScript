/* ------------------------- Variables ------------------------- */

var petDog = 'Rex';
var petCat = 'Pepper';
console.log(petDog);
console.log(petCat);
console.log('My pet dog name is', petDog);
console.log('My pet cat name is', petCat);
var dogSound = 'woof';
var catSound = 'purr';
console.log(petDog, 'says', dogSound);
console.log(petCat, 'says', catSound);
catSound = 'meow';
console.log(petCat, 'now says', catSound);

/* ------------------------- Task 1: Using the logical && operator ------------------------- */

var score = 8;
console.log('Mid-level skills:', score > 0 && score < 10);

/* ------------------------- Task 2: Using the logical || operator ------------------------- */

var timeRemaining = 0;
var energy = 10;
console.log('Game over:', timeRemaining == 0 || energy == 0);

/* ------------------------- Task 3: Using the modulus operator, %, to test if a given number is odd ------------------------- */

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);


/* ------------------------- Task 4: Add numbers using the + operator ------------------------- */

console.log(5+10);

/* ------------------------- Task 5: Concatenate numbers and strings using the + operator ------------------------- */

var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);


/* ------------------------- Task 6: Use the += operator to accumulate values in a variable ------------------------- */

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);


/* ------------------------- Conditional Statements ------------------------- */

var age = 10;
if (age >= 65)
{
    console.log("You get your income from your pension");
}
else if (age < 65 && age >= 18)
{
    console.log("Each month you get a salary");
}
else if (age < 18)
{
    console.log("You get an allowance");
}
else
{
    console.log("The value of the age variable is not numerical");
}

/* --------------------------------------------------------------------------- */

var day = "Thursday";
switch (day)
{
    case 'Monday':
    {
        console.log("It's Monday!");
        break;
    }
    case 'Tuesday':
    {
        console.log("It's Tuesday!");
        break;
    }
    case 'Wednesday':
    {
        console.log("It's Wednesday!");
        break;
    }
    case 'Thursday':
    {
        console.log("It's Thursday!");
        break;
    }
    case 'Friday':
    {
        console.log("It's Friday!");
        break;
    }
    case 'Saturday':
    {
        console.log("It's Saturday!");
        break;
    }
    case 'Sunday':
    {
        console.log("It's Sunday!");
        break;
    }
    default:
        console.log('There is no such day');
}

/* ------------------------- For Loop ------------------------- */

for (var i = 0; i <= 4; i++)
{
    console.log(i+1);
}
console.log("Counting completed!");

/* --------------------------------------------------------------------------- */

for (var i = 5; i >= 1; i--)
{
    console.log(i);
}
console.log("Countdown finished!");

/* ------------------------- While Loop ------------------------- */

var i = 1;
while (i <= 5)
{
    console.log(i);
    i++;
}
console.log("Counting completed!");

/* --------------------------------------------------------------------------- */

var i = 5;
while(i >= 1)
{
    console.log(i);
    i--;
}
console.log("Countdown finished!");

/* --------------------------------------------------------------------------- */

var year = 2018;
while(year <= 2022)
{
    console.log(year);
    year++;
}

/* ------------------------- Nested Loop ------------------------- */

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
// => run this code in the console of browser to run properly

/* --------------------------------------------------------------------------- */

/* Exercise 1

In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below. 

Inside the loop, write an if-else statement, which will check the following conditions:

First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

For all the remaining values of i, your code will console log just the value of i.

Note: The expected console log of the entire code should be as follows.
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10 */

for (var i = 1; i <= 10; i++)
{
    if(i == 1)
    {
        console.log("Gold Medal");
    }
    else if(i == 2)
    {
        console.log("Silver Medal");
    }
    else if(i == 3)
    {
        console.log("Bronze Medal");
    }
    else
    {
        console.log(i)
    }
}

/* --------------------------------------------------------------------------- */

/* Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question.

Note: You'll need three separate cases for the three medals, and a default case for all other values of the i variable. */

for (var i = 1; i <= 10; i++)
{
    switch(i)
    {
        case 1:
            console.log("Gold Medal");
            break;
        case 2:
            console.log("Silver Medal");
            break;
        case 3:
            console.log("Bronze Medal");
            break;
        default:
            console.log(i);
    }
}