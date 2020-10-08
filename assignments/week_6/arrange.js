var myVar = 100;


myVar = 200;

myVar = 100;

var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

var months = [
    "january", 
    "february",
    "march"
];

console.log(weekdays[0]);

// if put in a number that is not exist, then "undefine" shows up
var mixedArray = [100, "Hello there", true]




console.log(mixedArray);

mixedArray[3] = 1005;

console.log(mixedArray);

mixedArray[1] = null;

console.log(mixedArray);

var emptyArray = [];

// Array Methods

// Array Push
emptyArray.push("this is the first item!");
console.log(emptyArray);

emptyArray.push(10000);
console.log(emptyArray);

//Array Pop
emptyArray.pop();
console.log(emptyArray);


//Array Unshift, adds new value to the beginning of the array.

weekdays.unshift("superday");
console.log(weekdays);

//Array Shift, removes the first value of the array.

weekdays.shift();
console.log(weekdays);

//Array ForeEach

weekdays.forEach(function(weekdays));

setOfNumbers=[1, 10, 100, 1000, 100000];

for(var i = 0; i < setOfNumbers.length; i = i + 1) {
    var product =setOfNumbers[i]*6;
    console.log(product);
}

var masterArray = [
    [10,29],
    [14, 20],
    [50, 12]
];

masterArray


