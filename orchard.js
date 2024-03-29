///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

/*
make a variable called totalAcres store it to 0
run a for loop that loops through fujiAcres and store the sum of that array to the variable totalAcres
add the sum of galaAcres array to the total Acres variable
add the sum of pinkAcres array to the total Acres variable
log the totalAcres variable 
the reason why I took this approach was to keep my code dry
*/

let totalAcres = 0;
for (let i = 0; i < fujiAcres.length; i++) {
  totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}

console.log(totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

/*
make a variable averageDailyAcres and set it equal to totalAcres / 7 the number of days
log variable averageDailyAcres
this approach was taken because average is equal to the sum of values / the number of values
*/

const averageDailyAcres = totalAcres / 7;
console.log(averageDailyAcres);
// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE
/*
while acresLeft is greater than 0 increment the days by 1 and subtract averageDailyAcres from AcresLeft
log the days
took this approach because the direction were straight-forward

*/
while (acresLeft > 0) {
  days++;
  acresLeft -= averageDailyAcres;
}
console.log(days);
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

/*
make 3 empty arrays 
run a for loop that loops through the acres 
push the acres in tons (multiply the acres by 6.5) to the corresponding tons array 
log the tons
another straight-forward problem, approach was taken because I didn't want to be repetitive and make 3 for loops
*/

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

for (let i = 0; i < fujiAcres.length; i++) {
  fujiTons.push(fujiAcres[i] * 6.5);
  galaTons.push(galaAcres[i] * 6.5);
  pinkTons.push(pinkAcres[i] * 6.5);
}
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);
// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

/*
set 3 variables to 0 
run a for loop that 
converts the apple tons into pounds
log the apples in pounds
I used a for loop because I believe this was the easiest way to get a sum of all the apples from tons to pounds
*/

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

for (let i = 0; i < fujiTons.length; i++) {
  fujiPounds += fujiTons[i] * 2000;
  galaPounds += galaTons[i] * 2000;
  pinkPounds += pinkTons[i] * 2000;
}

console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

/*
set the profit variables equal to pounds times price 
log the profit
I use this appropach because when trying to find out a price per pound you will have to use multiplication 
*/

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

/*
set the totalProfit variable equal to the sum of all the profits 
log the `Total profit is $${totalProfit}`
I took this approach because it was pretty straight-forward in the direction and I want my code to be easy to read/understand.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(`Total profit is $${totalProfit}`);
