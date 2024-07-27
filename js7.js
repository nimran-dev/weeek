//create an array ages.


let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// subtracting value of first element from value of last element.
let first = ages[0];
let last = ages[ages.length -1];
let difference = last - first;
console.log(difference);

// Add a new age and repeat the step.
ages.push(30);

first = ages[0];
last = ages[ages.length - 1];
difference = last - first;

console.log(difference)

// Use a loop iterate through the array also calculate average age using loop.
let sum = 0;
for (let i = 0; i < ages.lengt; i++) {
    sum += ages[i];
}
let average = sum / ages.length;

console.log(average);


//2.create an array called names 
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let totalLength = 0;
for (let i=0; i < names.length; i++) {
    totalLength += names[i].length;
}

const avgLength = totalLength / names.length;

console.log("Average number of letters per name: " + avgLength)

//2a. concatenate all the names 

let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + " ";
}
console.log("All names concatenated: " + concatenatedNames.trim());

//3. access the last element of an array
let lastname = names[names.length - 1];
console.log(lastname);

//4. access the first element of an array

let firstname = names[0];
console.log(firstname);

//5. create an array namelength, wriite a loop to iterate  over the previously created names array
//crate the namelength array and add the length of each name using loop.

nameList = ["Alberto", "Beto", "Carlos", "Deigo"];
let nameLengths = [];
for (let i = 0; i < nameList.length; i++) {
    nameLengths.push(nameList[i].length);
}
console.log(nameLengths);

//iterate over the nameLengths array and calculate the sum of all elements:

let nameLengths1 = [7, 4, 6, 5];
let sumnew = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumnew += nameLengths1[i];
}
console.log(sumnew);


//.write a function that takes two parameter
function repeatTheWord(word, n) {
    return word.repeat(n);

}
let repeatTheWords = repeatTheWord("Hello", 3);
console.log(repeatTheWords);

//.write a function that take two parameters and return full name
var firstName = "Emm";
var lastName = "WhiteEagle";
function fullName( Data1, Data2) {
    console.log(Data1 + " " + Data2);
}
fullName(firstName , lastName);

//.write a function that takes an array of numbers and returns true if sum of all is greater than 100.

function sumOfAll(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum > 100;
}
const number = [10, 20, 30, 40, 50];
console.log(sumOfAll(number));

//.write a function that takes an array of numbers and return the average of all aelements.
function theAvarage(numbers) {
    if (numbers.length === 0) {
        return 0; }
        
        let theSum = 0;
        for (let i = 0; i < numbers.length; i++) {
            theSum += numbers[i];

    }
    return theSum
}

const myArray = [9, 12, 14, 16, 23];
const myAverage = theAvarage(myArray);
console.log(myAverage);

// writing a finction that takes two arrays and return true if average of element in first array isn greater than the second array,

function theFinalAverage(numbers) {

    if (numbers.length === 0) {
        return 0;
}
let sum = 0;
for (let i =0; i < numbers.length; i++) {
    sum += numbers[i];
}
return sum / numbers.length;
}
const myArray2 = [5, 7, 9, 11, 13, 15];
const myAverage2 = theFinalAverage(myArray2);
console.log(myAverage2);

// write a function called willBuyDrink that take boolean isHotOutside and a number moneyInPocket

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.5) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 11));

//.13 creating a function that find the maximum number in an array
function findMax(arr) {
    if (arr.length === 0) {
        throw new Error('Array cannot be empty');
    
    }
    let max = arr[0];
    for (let i = 0; i , arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];

        }
    }
    return max;
}
// example usage:
const numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
console.log(findMax(numbers));
