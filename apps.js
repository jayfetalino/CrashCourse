// // Basic problems
// // 1. Imagine you have a number. Lets say 5. How can you tell whether this number is odd?

const num = 5;
const numIsOdd = num % 2 === 1;
console.log(numIsOdd);

// // 2. If the number is odd, lets just console.log('Num is odd!'). How would you do that?

if(true){
    console.log('Num is Odd!')
}

// // 3. Imagine you have a bag of colors. Lets say you have the colors 'red', 'blue', 'green', 'orange', 'yellow'. How can you store all these colors in your code?

const bagOfColors = ['red', 'blue', 'green','Orange','yellow'];

// // 4. We have stored all the colors in our code inside a variable. How can you access the 0th element? What about the 1st element? What about the 2nd element? Lets just console.log it one by one

console.log(bagOfColors[0]); // to access 0th element
console.log(bagOfColors[1]); // to access 1st element
console.log(bagOfColors[2]); // to access 2nd element
console.log(bagOfColors[3]); // to access 3rd element
console.log(bagOfColors[4]); // to access 4th element

// // 5. How can you look through every single color one by one? No hints!

    for (let i = 0; i < bagOfColors.length; i++) {
        console.log(bagOfColors[i]);
    }


// // 6. For each of the colors that you have stored, how many colors are longer than 3 characters? You're gonna need a counter variable for this.

let lengthOfColorsAreOdd = 0;

if (bagOfColors.length > 3) {
    lengthOfColorsAreOdd++;          // the increment operator
    console.log(bagOfColors.length);
}

// 7. You have a bottle of alcohol. This bottle of alcohol has a few properties
    The bottle name: casamigos
    The spirit: tequila
    The alcohol percentage: 40%
    Number of shots until blackout: 20

let bottleOfAlcohol = [

    {name: 'casamigos', spirit: 'tequila', percentage: 0.4,shotsUntilBlackout: 20,}
];



// 9. If the percentage is greater than 0.3, lets console.log('This is a courtney style drink')

if (bottleOfAlcohol.percentage > 0.3) {
    console.log('This is a courtney style drink');
};


// 10. Remember how in the 7th problem, you only had to deal with 1 bottle? What if you have many different bottles? Lets store this information in our code. Lets store your favorite 3 bottles now.



const moreBottles = [ {name: 'titos', spirit: 'vodka', percentage: 0.5, shotsUntilBlackout: 10},
{name: 'jameson', spirit: 'whiskey', percentage: 0.2, shotsUntilBlackout: 30},
{name: 'bacardi', spirit: 'rum', percentage: 0.3, shotsUntilBlackout: 18}];

const combinedBottles = [...bottleOfAlcohol, ...moreBottles];

console.log(combinedBottles);



// 11. How can you access the percentage property from every single bottle you have? Lets just console.log the percentage of every single bottle, one by one

const percentageProperty = combinedBottles.map(bottle => bottle.percentage);

console.log(percentageProperty);

// 12. Find the # of bottles with percentage less than 0.3 and console.log it

const bottlesWithLessKick = combinedBottles.filter(bottle => bottle.percentage <= 0.3);
console.log(bottlesWithLessKick);


// BACK TO BASICS

// 13. Imagine you have an array of numbers. [1, 2, 3, 4, 5]. You want to find the average of all those numbers. Write me some code that finds the average and console.logs the average

const firstSet = [1, 2, 3, 4, 5];
// var sum = 0;
// for (var number of firstSet) {
//     sum += number;
// }
// average = sum / firstSet.length;
// console.log(average);


const secondSet = [4, 5, 6, 7, 1, 2];
const thirdSet = [10, 2, 3, 4, 1, 2];
const fourthSet = [100, 12, 1, 3, 4];
const fifthSet = [1, 100, 2, 19, 3]
var i, j, k, l, m;
var average = 0;

for (i = 0; i < firstSet.length; i++){
    average += firstSet[i];
}
for (j = 0; j < secondSet.length; j++){
    average += secondSet[j];
}
for (k = 0; k < thirdSet.length; k++){
    average += thirdSet[k];
}
for (l = 0; l < fourthSet.length; l++){
    average += fourthSet[l];
}
for (m = 0; m < fifthSet.length; m++){
    average += fifthSet[m];
}
console.log(average /= (i + j + k + l + m));



  











