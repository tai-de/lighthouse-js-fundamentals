/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////    AGE CALCULATOR    //////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/* /* Define a function called ageCalculator. This function should take 3 parameters:

name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year
The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("Suzie", 1983, 2015);, the return value should be as follows.

"Suzie is 32 years old."

function ageCalculator(name, dob, year) {
  let age = year - dob;
  return (name + " is " + age + " years old.");
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////    HOW MANY 100's    //////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/* function howManyHundreds(num) {
  // return Math.floor(num / 100);
  num = (num - num % 100) / 100;
  return num;
}

console.log(howManyHundreds(59));
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////    AREA CALCULATOR    /////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/* function calculateRectangleArea(length, width) {
  let area;
  if (length > 0 && width > 0) {
    area = length * width;
    return area;
  } else {
    return area;
  }
}

function calculateTriangleArea(base, height) {
  let area;
  if (base > 0 && height > 0) {
    area = base * height / 2;
    return area;
  } else {
    return area;
  }
}

function calculateCircleArea(radius) {
  let area;
  if (radius > 0) {
    area = Math.PI * (radius * radius);
    return area;
  } else {
    return area;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined */

/* const vacationDays = 2 + 3;

if (vacationDays <= 5) {
  console.log("Not enough for a long vacation,.");
} else if (vacationDays === 5) {
  console.log("We can take a whole week");
} else {
  console.log("great time");
} */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
///////////////////////    DOUBLE SUM    ////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/* let sum = 3 + 2;

const doubleSum = function(a, b) {
  let sum = a + b;
  return sum * 2;
}

doubleSum(5, 4);

console.log(sum); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////    RANGE + INCREMENTAL STEPS    ////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/* function range(start, end, step) {
  let array = [];
  if(start == undefined || end == undefined || step == undefined || start > end || step <= 0) {
    return array;
  } else {
    let x = start;
    array.push(x);
    x = x + step;
    while(x <= end) {
      array.push(x);
      x = x + step;
    }
    return array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3)); */


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//////////////////////    LAST INDEX OF    //////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//lastIndexOf

/* const lastIndexOf = function lastIndexOf(array, value) {
// search the array for the last instance of value and return its index, if none then -1
  // thought process:
  // go through the array in reverse, check if array value matches function value, if so, return index
  // else return -1


  for(let i = array.length; i >= 0; i--) {
    if(array[i] === value) {
      return i;
    } else if(array[i] !== value && i === 0) {
      return -1;
    }
  }

}

//tests

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1); */


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
///////////////////    LOOPYLIGHTHOUSE 2   //////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//LoopyLighthouse2
/* function loopyLighthouse(range, multiples, words) {
  // range array of 2 numbers, start and end for loop
  // multiples array of 2, representing two multiples to be replaced with words
  // words array of 2 strings for the prev replacement
  for (let n = range[0]; n <= range[1]; n++) {
    if (!(n % multiples[0]) && !(n % multiples[1])) {
      console.log(words.join(''));
    } else if (!(n % multiples[0])) {
      console.log(words[0]);
    } else if (!(n % multiples[1])) {
      console.log(words[1]);
    } else {
      console.log(n);
    }
  }
} */

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
// should log numbers from 15 to 90
// replacing 2's with Batty, 5's with Beacon, and 2's 5's with BattyBeacon


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
///////////////////////    CONCAT ARRAYS  ///////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Concatenate arrays
/* function concat(array1, array2) {
  return array1.concat(array2);
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
 */


//Merge arrays stretch

/* function merge(array1, array2) {
  let newArray = array1.concat(array2);
  return newArray.sort();
}*/

// function  merge (array1, array2) {
//   var index = 0;
//   for (let i = 0; i < array2.length; i++){
//     index = array2[i];
//     for (let j=0; j < array1.length; j++){
//       if (index < array1[j]);
//       array1 = array1.splice(j, 0, index);

//     } 
//      }
//   return array1;
// }

/* const merge = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if(array2[j] <= array1[i]) {
        array1.splice(i, 0, array2[j]);
        array2.shift();
        j--;
        i++;
      } else {
        array1.splice(i + 1,0, array2[j]);
        array2.shift();
        j++;
      }
    }
  }
  return array1;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////    OBJECTS    /////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Objects

/* var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return sister.name + " paints!"; }
};

console.log(sister.paintPicture()); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////    INCREASE OBJECT VALUE BASED ON PARAMETER    /////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// Trash to treasure

/* const smartGarbage = function (trash, bins) {
  return bins[trash]++;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }); */
// should return
/* {
  waste: 4,
  recycling: 3,
  compost: 5
}
 */


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////   ADD TIME AND SPEED OBJECT    /////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// Driving Mayor Daisy
// function needs to create a new object, property speed: and property time:, adding to the cars array
// retrieve time using Date.now();
// return an array that includes all of the elements in cars

/* const carPassing = function (cars, speed) {
  cars.push({time: Date.now(), speed: speed});
}


const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)

console.log(cars); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////////    JUDGE VEGETABLES    /////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//We're rooting for you
// decides which vegetable is best
// two params, list of veggie objects (submitter, redness, plumpness) and which metric to judge by
// function must return name of person who won

/* const judgeVegetable = function (vegetables, metric) {
  let temp = vegetables[0][metric];
  let name;
  for (let x = 0; x < vegetables.length; x++) {
    if (vegetables[x][metric] >= temp) {
      temp = vegetables[x][metric];
      name = vegetables[x].submitter;
    }
  }
  return name;
}   */

/* function judgeVegetable(vegetables, metric) {
  return vegetables.sort((a, b) => a[metric] < b[metric] ? 1 : -1)[0].submitter;
}

// this one uses a for..of and gathers the index and value of each .entries()
const judgeVegetable = function (vegetables, metric) {
  let index = 0;
  let redScale = 0;
  let plumpScale = 0;
  for (let [index, vegetable] of vegetables.entries()) {
    if (metric === "redness" && vegetable.redness > redScale) {
      redScale = vegetable.redness;
      i = index;
    } else if (metric === "plumpness" && vegetable.plumpness > plumpScale) {
      plumpScale = vegetable.plumpness;
      i = index;
    }
  }
  return vegetables[i].submitter;
} */

/* const judgeVegetable = function (vegetables, metric) {
  let largest = 0;
  let result = "";

  vegetables.forEach(function(x){
    if(largest < x[metric]) {
      largest = x[metric];
      result = x.submitter;
    }
  });
  return result;
} */


/* const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric)); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////    PHOTOGRAPHER POSITION FUNCTION   ////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/* const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  let bestPosition = [0,0];
  for (move of moves) {
    if (move === 'north') {
      bestPosition[1]++;
    } else if (move === 'east') {
      bestPosition[0]++;
    } else if (move === 'south') {
      bestPosition[1]--;
    } else if (move === 'west') {
      bestPosition[0]--;
    } else {
      return;
    }
  }
  return bestPosition;
}

console.log(finalPosition(moves)); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////    HOW MANY 100's    //////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/* function howMany(num) {
  return (num - (num % 100)) / 100;
}

console.log(howMany(83));
console.log(howMany(20));
console.log(howMany(155));
console.log(howMany(1042));
console.log(howMany(100)); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////    KATA 1 SUM OF LARGEST NUMBERS    ///////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 1 - Sum the Largest Numbers
//array of numbers is passed through a function
//determine which two values are the highest and add together
//loop operates by first comparing if current index is bigger than data2
//then checks if the newly logged number is bigger than data1, swapping if needed
//so data1 is always the bigger of the two
/* const sumLargestNumbers = function(data) {
  let big1 = 0;
  let big2 = 0;
  for(let i = 0; i < data.length; i++) {
    if (data[i] > big2) {
      big2 = data[i];
      if (big2 > big1) {
        let temp = big1;
        big1 = big2;
        big2 = temp;
      }
    }
  }
  return big1 + big2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////    KATA 2 CONDITIONAL SUMS   //////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 2 - Conditional sums
//given an array and a parameter of even or odd, adds the values that match the parameter
//if no values = parameter, return 0
//function works by going through array, checking if current value matches parameter
//if so, add to final number variable
/* const conditionalSum = function(values, condition) {
  let sum = 0;
  for(let i = 0; i < values.length; i++) {
    if(values[i] % 2 === 0 && condition === "even") {
      sum += values[i];
    }
    else if(values[i] % 2 !== 0 && condition === "odd") {
      sum += values[i];
    }
  }
  return sum;
};

const conditionalSum = function(values, condition) {
  let sum = 0;
  for (let thenumbers of values){
    if (thenumbers % 2 === 0 && condition === "even"){
      sum += thenumbers;
    } else if (thenumbers % 2 != 0 && condition === "odd"){
      sum += thenumbers;
    } 
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([0], "odd"));
console.log(conditionalSum([2,4,19,45,6,144], "even"));
console.log(conditionalSum([8,25,44,21,33,90], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "boo"));
console.log(conditionalSum([13, 88, 12, 44, 99], "boo"));*/

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//////////////////    KATA 3 VOWEL COUNTING    //////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 3 - Vowels
//counting vowels in a string
/* const numberOfVowels = function(data) {
  let sum = 0;
  for (let letter of data.toLowerCase()) {
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
      sum++;
    }
  }
  return sum;
};

console.log(numberOfVowels("orange")); //expected 3
console.log(numberOfVowels("lighthouse labs")); //expected 5
console.log(numberOfVowels("aeIou")); //expected 5
console.log(numberOfVowels("this is an even longer test string to see if vowels are counting"));
console.log(numberOfVowels("TESTING ALL CAPS")); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////    KATA 4 INSTRUCTORS NAMES    /////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 4 - Instructors Names
//which instructor has the longest name
//return the object
//if two are equal, return the first

/* const instructorWithLongestName = function(instructors) {
  let winner = instructors[0];
  for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].name.length > winner.name.length) {
      winner = instructors[i];
    }
  }
  return winner;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Jeremiah", course: "iOS"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"},
  {name: "Brittney", course: "Web"}
])); // expected output: Jeremiah
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); // expected output: Domascus */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////    KATA 5 PERCENT ENCODED STRING    ///////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 5 - Percent Encoded String
//replace spaces with %20 as long as its within the string, no leading/trailing spaces

// SINGLE FUNCTION, COMBINING MY WHITESPACE TRIMMER & ENCODER
// THREE FOR LOOPS, 3 IFS, USES .SLICE() METHOD
/* const urlEncode = function(text) {
  let newString = "";
  for(let i = 0; i < text.length; i++){
    if(text[i] === " " && i === 0) {
      text = text.slice(1,text.length);
      i--;
    }
    for(let j = text.length-1; j > 0; j--) {
      if(text[j] === " " && j === text.length-1) {
        text = text.slice(0,text.length-1);
      }
    }
  }
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newString += "%20"
    } else {
      newString += text[i];
    }
  }
  return newString;
}; */

// WHITESPACE TRIMMER FUNCTION - alternate to .trim()
// 2 FOR LOOPS, 2 IFS, USES .SLICE() METHOD
/* const trimWhiteSpace = function (text) {
  for(let i = 0; i < text.length; i++){
    if(text[i] === " " && i === 0) {
      text = text.slice(1,text.length);
      i--;
    }
    for(let j = text.length-1; j > 0; j--) {
      if(text[j] === " " && j === text.length-1) {
        text = text.slice(0,text.length-1);
      }
    }
}
return text;
}*/

// URL ENCODER USING .TRIM METHOD
// 1 FOR LOOP, 1 IF, USES .TRIM()
/*const urlEncode = function(text) {
  let trimmed = text.trim();
  let newString = "";
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === " ") {
      newString += "%20"
    } else {
      newString += trimmed[i];
    }
  }
  return newString;
};*/

// SUPER SHORT COMBO
// 2 FOR LOOPS, 4 IFS, NOT USING .TRIM() OR .SLICE METHODS
/* const urlEncode = function(text) {
  let encodedURL = '';
  let rightSide = 0;
  for(let x = text.length-1; x >= 0; x--) {
    if(text[x] === ' ') rightSide += 1;
    else break
  }
  for(let i = 0; i < text.length; i++) {
    if(text[i] === ' ' && (encodedURL.length === 0 || i >= text.length - rightSide )) continue
    if(text[i] !== ' ') encodedURL += text[i]
    else encodedURL += '%20'
  }
  return encodedURL;
}; */


/* const urlEncode = function(text) {
  let encodedURL = ''
  let multiSpaces = ''
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ' && encodedURL.length === 0) {
      continue
    }
    else if (text[i] === ' ' && text[i+1] === ' ') {
      multiSpaces += '%20'
    }
    else if(text[i] === ' ' && i === text.length - 1) {
      break
    }
    else if (text[i] === ' ' && text[i+1] !== ' ') {
      encodedURL += multiSpaces
      encodedURL += '%20'
      multiSpaces = ''
    }
    else if (text[i] !== ' ') {
      encodedURL += text[i]
    }
    else {
      encodedURL += '%20'
    }
  }
  return "["+encodedURL+"]"
};*/

/*console.log(urlEncode("   lighthouse labs  .  ")); 
console.log(urlEncode("  testing-trim   "));
console.log(urlEncode("  a     k   "));
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("   Lighthouse Labs    "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("   Lighthouse Labs    "));
console.log(urlEncode("  blue is greener than purple for sure        "));*/

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////////    KATA 6 SMARTPARKING    //////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 6 - SmartParking
//Regular cars can only park in R spots.
//Small cars can park in R or S spots.
//Motorcycles can park in R, S, or M spots.
//must match uppercase
//return an array of coordinates [x,y]
//where x = the column (index inside)
//where y = the row (index outside)

/* const whereCanIPark = function (spots, vehicle) {
  let parkHere = false;
  for (let i = 0; i < spots.length; i++) {
    if (parkHere !== false) break;
    for (let j = 0; j < spots[i].length; j++) {
      if (vehicle === 'motorcycle' && (spots[i][j] === 'M' || spots[i][j] === 'S' || spots[i][j] === 'R')) {
        parkHere = [j, i];
        break;
      } else if (vehicle === 'small' && (spots[i][j] === 'S' || spots[i][j] === 'R')) {
        parkHere = [j, i];
        break;
      } else if (vehicle === 'regular' && spots[i][j] === 'R') {
        parkHere = [j, i];
        break;
      }
    }
  }
  return parkHere;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
)) */

//expected output: 
//[4,0]
//false
//[3,1]


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////////    KATA 7 IN THE AIR    ////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 7 - In the Air Tonight
//code triggers a message when air quality is too polluted
//function will check a collection of samples
//first argument is array of clean or diry sample
//second argument is highest number of acceptable dirties
//e.g. 0.3 = less than 30% can be dirty
//return 'Polluted' or 'Clean'


/* const checkAir = function (samples, threshold) {
  let isDirty = 0;
  for(const sample of samples) {
    if(sample === 'dirty') {
      isDirty ++;
    }
  }
  if((isDirty / samples.length) >= threshold) {
    return 'Polluted';
  } else {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'clean', 'dirty', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));
//expected polluted (4/10 or 40% are dirty but threshold is 30%)

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));
//expected polluted (4/5 or 80% are dirty but threshold is 25%)

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)); */
//expected clean (4/7 or 57.1% are dirty but threshold is 90%)


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////////////    CONCAT ARRAYS    ////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/* 
//concat arrays using for of
const concat = function(arr1,arr2) {
  for(const numb of arr2) {
    arr1.push(numb);
  }
  return arr1;
}

//concat arrays using for loop
const concat = function(arr1,arr2) {
  for(let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
} */

//new array instead of manipulating arr1
/* const concat = function(arr1,arr2) {
  let newArray = [];
  for(const numb of arr1) {
    newArray.push(numb);
  }
  for(const numbr of arr2) {
    newArray.push(numbr);
  }
  return newArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////    KATA 8 REPEATING NUMBERS    ////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 8 - Repeating Numbers
//two arrays are passed through as a single array
//the first will be the value to repeat
//second is the number of times to repeat
//return a string of results separated by a comma if multiple arrays were passed
//if a single array, no comma

/* const repeatNumbers = function(data) {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    (str !== "") ? str += ", " : str;
    for (let j = 0; j < data[i][1]; j++) {
      str += data[i][0]
    }
  }
  return str;
};

console.log(repeatNumbers([[1, 10]])); //expected is 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); //expected is 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); //expected is 10101010, 343434343434, 9292
console.log(repeatNumbers([[123,3],[999,2],[110,4],[1,1]])); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////    KATA 9 CASE MAKER    ///////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 9 - Case Maker
//converting normal string into camelCase
//remove spaces and capitalize the next letter

//this works
// const camelCase = function(input) {
//   let cleaned = input.trim();
//   let str = "";
//   let trigger = false;
//   for(let i of cleaned) {
//     if(i !== " " && trigger === false) {
//       str+=i;
//     } else if (i!== " " && trigger === true) {
//       str+=i.toUpperCase();
//       trigger = false;
//     } else if (i === " ") {
//       trigger = true;
//     }
//   }
//   return str;
// };

/*const camelCase = function(input) {
  let str = "";
  let trigger = false;
  for(let i of input) {
    if(i === " " && str === "") continue; // skips leading spaces
    if(i === " ") {
      trigger = true;
    } else if(trigger === true) {
      str += i.toUpperCase();
      trigger = false;
    } else str += i.toLowerCase();
  }
  return str;
};


console.log(camelCase("   this   is    a string   ")); //thisIsAString
console.log(camelCase("loopy lighthouse")); //loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////    KATA 10 MULTIPLICATION TABLE    /////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 10 - Multiplication Table
//argument will be the highest value of our multiplication table
//generate a multiplication table from 1 to the provided number

/* const multiplicationTable = function(maxValue) {
  let table = "";
  for(let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      table += i * j + ' ';
    }
    table += "\n";
  }
  return table;
};

console.log(multiplicationTable(1));
// expected outcome is just 1

console.log(multiplicationTable(3));
// expected outcome is
//1 2 3 4 5
//2 4 6 8 10
//3 6 9 12 15
//4 8 12 16 20
//5 10 15 20 25 

console.log(multiplicationTable(10));
 */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
///////////////////    KATA 11 BOUNCY CASTLES    ////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 11 - Bouncy Castles
//sphereVolume()will calculate the volume of a sphere given a radius
////cube the radius then multiply by 4/3 then multiply by Math.PI
//coneVolume() will calculate the volume of a cone given a radius and a height
////1/3 * Math.PI * r squared * height
//prismVolume() will calculate the volume of a prism given a height, a width, and a depth
////all multiplied together
//totalVolume() will receive an array containing different shapes

// Use the value below whenever you need the value of Pi
/* const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return radius * radius * radius * (4/3) * PI;
}

// console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (1/3) * PI * radius * radius * height;
}

// console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

// console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let vol = 0;
  for(let i = 0; i < solids.length; i++) {
    if(solids[i].type === 'sphere') {
      vol = vol + sphereVolume(solids[i].radius);
    } else if(solids[i].type === 'cone') {
      vol = vol + coneVolume(solids[i].radius,solids[i].height);
    } else if(solids[i].type === 'prism') {
      vol = vol + prismVolume(solids[i].height,solids[i].width,solids[i].depth);
    }
  }
  return vol;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000); */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//////////////////////    KATA 12 BAKE-OFF    ///////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 12 - The Great Codeville Bake-off
//We need to complete a function called chooseRecipe()
//receive three parameters:
//- An array of ingredients in stock at Bakery A
//- An array of ingredients in stock at Bakery B
//- An array of recipe objects.
/////Each recipe has a name property(string) and an ingredient property(array)

//We are limiting our search to two ingredient recipes. We want to find a recipe
//that utilizes one ingredient from Bakery A and one from Bakery B.

//Our chooseRecipe() function should return the name of the correct recipe.

//This one is a doozy! We might want to start by creating a helper function called ingredientCheck()
//that will take in one bakery at a time, along with the recipes.ingredients array to check if the
//given bakery possesses any of the ingredients from that recipe.

//thinking
//determine which recipes bakeryA can contribute to
//determine which recipes bakeryB can contribute to
//compare the two recipe options for matches

/* const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let bakeryAPossible = [];
  let bakeryBPossible = [];
  let possibleRecipes = '';
  for(let i = 0; i < bakeryA.length; i++) {
    for(let j = 0; j < recipes.length; j++) {
      for(let k = 0; k < recipes[j]["ingredients"].length; k++) {
        if(bakeryA[i] === recipes[j]["ingredients"][k]) {
          bakeryAPossible.push(recipes[j]["name"]);
        }
      }
    }
  }
  for(let i = 0; i < bakeryB.length; i++) {
    for(let j = 0; j < recipes.length; j++) {
      for(let k = 0; k < recipes[j]["ingredients"].length; k++) {
        if(bakeryB[i] === recipes[j]["ingredients"][k]) {
          bakeryBPossible.push(recipes[j]["name"]);
        }
      }
    }
  }
  for (let l = 0; l < bakeryAPossible.length; l++) {
    for (let m = 0; m < bakeryBPossible.length; m++) {
      if(bakeryAPossible[l] === bakeryBPossible[m]) {
        possibleRecipes += bakeryAPossible[l];
      }
    }
  }
  return(possibleRecipes);
}

// With helper function instead of combined
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let letsBake = [];
  let bakeryAPossible = pantryCheck(bakeryA, recipes);
  let bakeryBPossible = pantryCheck(bakeryB, recipes);
  for (let i = 0; i < bakeryAPossible.length; i++) {
    for (let j = 0; j < bakeryBPossible.length; j++) {
      if(bakeryAPossible[i] === bakeryBPossible[j]) {
        letsBake.push(bakeryAPossible[i].name);
      } 
    }
  }
  return letsBake;
}

const pantryCheck = function(bakery, recipes) {
  possibleRecipes = [];
  for (let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      for (let k = 0; k < recipes[j].ingredients.length; k++) {
        if (recipes[j].ingredients[k] === bakery[i]) {
          possibleRecipes.push(recipes[j]);
        }
      }
    }
  }
  return possibleRecipes;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); */

//expected outcome:
//Persian Cheesecake
//Nina's Famous Dijon Raisons


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////    KATA 13 TALKING CALENDAR    ////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 13 - Talking Calendar
//parse a date string formatted like YYYY/MM/DD into December 2nd, 2022

/* const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const talkingCalendar = function(date) {
  let dd = Number(date.slice(-2)); // store day as an integer to remove zeros from 01-09
  switch (true) {
    case (dd !== 11 && String(dd).slice(-1) == '1'):
      dd += 'st';
      break;
    case (String(dd).slice(-1) == 2):
      dd += 'nd';
      break;
    case (String(dd).slice(-1) == 3): 
      dd += 'rd';
      break;
    default:
      dd += 'th';
      break;
  }
  return months[date.slice(5,7) - 1] + " " + dd + ", " + date.slice(0,4);
};

console.log(talkingCalendar("2017/12/02")); //December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); //November 11th, 2007
console.log(talkingCalendar("1987/08/24")); //August 24th, 1987
 */


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////    KATA 14 CHANGE CALCULATOR    ////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 14 - Change Calculator
//two numbers being given, total cost & money given
//function should return an OBJECT describing denominations returned
//valid denominations:
//Twenty dollars
//Ten dollars
//Five dollars
//Two dollars
//One dollar
//Quarter (25¢)
//Dime (10¢)
//Nickel (5¢)
//Penny (1¢)

/* const calculateChange = function(total, cash) {
  const denominations = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 10,
    penny: 1
  }
  const denoArray = Object.entries(denominations);
  const totalChange = {};
  let change = cash - total;
  for (let i = change; i > 0; i--) {
    for(let j = 0; j < denoArray.length; j++) {
      if(change >= denoArray[j][1]) {
        totalChange[denoArray[j][0]] = totalChange[denoArray[j][0]] + 1 || 1;
        change -= denoArray[j][1];
        break;
      }
    }
  }
  return totalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(499, 1000));
console.log(calculateChange(1000, 2000)); */

//{ twoDollar: 1, dime: 1, penny: 3 }
//{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
//{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
///////////////    KATA 15 ORGANIZING INSTRUCTORS    ////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 15 - Organizing Instructors
//array of instructor objects
//combine into single object, arranged by course
/* {
  CourseName: [instructors]
} 
Instruction */

//condensed to use no variables
/* const organizeInstructors = function(instructors) {
  const courseList = {}
  for(let i = 0; i < instructors.length; i++) {
    if (courseList[instructors[i].course] === undefined) {courseList[instructors[i].course] = [];};
    courseList[instructors[i].course].push(instructors[i].name);
  }
  return courseList;
}; */

//alternate longer using variables for course and name
/* const organizeInstructors = function(instructors) {
  const courseList = {}
  for(let i = 0; i < instructors.length; i++) {
    let currName = instructors[i].name;
    let currCourse = instructors[i].course;
    if (courseList[currCourse] === undefined) {courseList[currCourse] = [];};
    courseList[currCourse].push(currName);
  }
  return courseList;
}; */

/* console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
])); */

/*expected output:
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
} */



/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////////    KATA 16 CASE MAKER II    ////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 16 - Case Maker II
//need to ensure it accepts 'case' as an array and cycle through it to apply two stylings
// 'camel' = camelCase
// 'pascal' = no spaces, capital letters
// 'snake' = underscores instead of spaces
// 'kebab' = dashes instead of spaces
// 'title' = first letter capitalized
// 'vowel' = vowels capitalized
// 'consonant' = consonants capitalized
// 'upper' = all uppercase
// 'lower' = all lowercase

/* const makeCase = function (input, cases) {
  const order = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
  let newString = '';
  let trigger = false;
  if (typeof cases === 'object') {
    cases.sort(function (a, b) {
      return order.indexOf(a) - order.indexOf(b);
    });
  } else { cases = [cases]; }; // cases is now a sorted array
  for (let i = 0; i < cases.length; i++) { // cycling through the array
    if (i > 0) { input = newString; newString = '' };
    switch (cases[i]) {
      case 'camel':
        for (let j of input) {
          if (j === " " && newString === "") continue;
          if (j === " ") {
            trigger = true;
          } else if (trigger === true) {
            newString += j.toUpperCase();
            trigger = false;
          } else newString += j.toLowerCase();
        }
        break;
      case 'pascal':
        trigger = true;
        for (let j of input) {
          if(j !== " " && trigger === false) {
            newString += j.toLowerCase();
          } else if (j !== " " && trigger === true) {
            newString += j.toUpperCase();
            trigger = false;
          } else if (j === " ") {
            trigger = true;
          }
        }
        break;
      case 'snake':
        for (let j of input) {
          if(j !== " ") {
            newString += j;
          } else {
            newString += "_";
          }
        }
        break;
      case 'kebab':
        for (let j of input) {
          if(j !== " ") {
            newString += j;
          } else {
            newString += "-";
          }
        }
        break;
      case 'title':
        trigger = true;
        for (let j of input) {
          if(j !== " " && trigger === false) {
            newString += j;
          } else if (j !== " " && trigger === true) {
            newString += j.toUpperCase();
            trigger = false;
          } else if (j === " ") {
            newString += j.toLowerCase();
            trigger = true;
          }
        }
        break;
      case 'vowel':
        for (let j of input) {
          if(j.toUpperCase() === 'A' || j.toUpperCase() === 'E' || j.toUpperCase() === 'I' || j.toUpperCase() === 'O' || j.toUpperCase() === 'U') {
            newString += j.toUpperCase();
          } else {
            newString += j.toLowerCase();
          }
        }
        break;
      case 'consonant':
        for (let j of input) {
          if(j.toUpperCase() !== 'A' && j.toUpperCase() !== 'E' && j.toUpperCase() !== 'I' && j.toUpperCase() !== 'O' && j.toUpperCase() !== 'U') {
            newString += j.toUpperCase();
          } else {
            newString += j.toLowerCase();
          }
        }
        break;
      case 'upper':
        for (let j of input) {
          newString += j.toUpperCase();
        }
        break;
      case 'lower':
        for (let j of input) {
          newString += j.toLowerCase();
        }
        break;
    }
  }
  return newString;
}

console.log(makeCase("this is a string", "camel")); //thisIsAString
console.log(makeCase("this is a string", "pascal")); //ThisIsAString
console.log(makeCase("this is a string", "snake")); //this_is_a_string
console.log(makeCase("this is a string", "kebab")); //this-is-a-string
console.log(makeCase("this is a string", "title")); //This Is A String
console.log(makeCase("this is a string", "vowel")); //thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); //THiS iS a STRiNG
console.log(makeCase("THIS IS A STRING", "upper")); //THIS IS A STRING
console.log(makeCase("this is a string", ["upper", "snake"])); //THIS_IS_A_STRING */

/////////////////////////////////////////////////////////////////////
//////////////////////// SORT ARRAY CODE ////////////////////////////
/////////////////////////////////////////////////////////////////////

//const order = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];

// SORT AN ARRAY WITHOUT USING .SORT 
/* const sortThis = function(array) {
  let sorted = [];
  let i = 0;
  let j = 0;
  while (i < order.length) {
    while (j < array.length) {
      if (array[j] === order[i]) {
        sorted.push(order[i]);
        i++
        j = 0;
      } else { j++ };
    }
    i++;
    j = 0;
  }
  return sorted;
}; */

//SORT AN ARRAY USING SORT FUNCTION
/* const sortThis = function(array) {
  array.sort(function(a,b) {
    return order.indexOf(a) - order.indexOf(b);
  });
  return array;
};

console.log(sortThis(["upper", "snake", "kebab", "camel"])); */


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////    KATA 17 DECODE ENCODED STRING    ////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 17 - JS Object From URL Encoded String

/* const urlDecode = function(text) {
  const decodedUrl = {};
  let toArray = text.replaceAll("%20", " ").split('&');
  for(let i = 0; i < toArray.length; i++) {
    decodedUrl[toArray[i].split('=')[0]] = toArray[i].split('=')[1];
  }
  return decodedUrl;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); */

/* expected outputs
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"*/

////// ALTERNATE VERSION THAT USES NO .METHODS, 100% LOOPS!!!

/* const urlDecode = function(text) {
  let decodedObj = {};
  let tempKey = "";
  let tempValue = "";
  let keyCheck = true;
  for(let i = 0; i < text.length; i++) {
    switch(true) {
      case (keyCheck === true):
        if (text[i] === "=") {
          keyCheck = false;
          break;
        } else {
          tempKey = tempKey + text[i];
          break;
        }
      default:
        if (text[i] === "&") {
          keyCheck = true;
          decodedObj[tempKey] = tempValue;
          tempKey = "";
          tempValue = "";
          break;
        } else if (i === text.length-1) {
          tempValue = tempValue + text[i];
          decodedObj[tempKey] = tempValue;
          tempKey = "";
          tempValue = "";
          break;
        } else if (text[i] ==="%") {
          tempValue = tempValue + " ";
          i += 2
          break;
        } else {
          tempValue = tempValue + text[i];
          break;
        }
    }  
  }
  return decodedObj;
};*/

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////    KATA 18 SQUARE CODE    /////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 18 - Square Code

/* const squareCode = function(message) {
  let msg = message.replaceAll(/\s+/g, ""); // no more spaces
  let sq = Math.ceil(Math.sqrt(msg.length)); // number of strings 
  let num = 0; // this is what we are using to track which array to send the character to
  let newMessage = Array(sq).fill('');
  for(let i = 0; i < msg.length; i++) { // looping through each character
    newMessage[num] = newMessage[num] + msg[i];
    if(num < sq - 1) { num++ } else { num = 0 }
    }
  return newMessage.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots")); */

/*expected outputs:
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau */


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
////////////////    KATA 19 QUEEN THREAT DETECTOR    ////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 19 - Queen Threat Detector
//detecting if two queens on a chess board can attack eachother
//queens can attack on same row, column, or diagonals (row and col +- the same number)

/* 8 x 8 array where 1 = piece, 0 = unoccupied
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]*/

//this option is shorter, takes advantage of .from
/* const generateBoard = function(queenW, queenB) {
  let newBoard = Array.from({length: 8}, e => Array(8).fill(0));
   for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      if((i === queenW[0] && j === queenW[1]) || (i === queenB[0] && j === queenB[1])) {
        newBoard[i][j] = 1;
      }
    }
  }
  return(newBoard);
} */

//this option does not use Array.from
/* const generateBoard = function(queenW, queenB) {
  let newBoard = [];
   for(let i = 0; i < 8; i++) {
    newBoard[i]=[];
    for(let j = 0; j < 8; j++) {
      if((i === queenW[0] && j === queenW[1]) || (i === queenB[0] && j === queenB[1])) {
        newBoard[i].push(1);
      } else {
        newBoard[i].push(0);
      }
    }
  }
  return(newBoard);
}

const queenThreat = function(checkBoard) {
  let firstPosition = [0,0];
  let secondPosition = [0,0];
  let firstFound = false;
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      if(checkBoard[i][j] === 1) {
        if(firstFound === false) {
          firstPosition = [i, j];
        } else {
          secondPosition = [i, j];
        }
      }
    }
  }
  switch(true) {
    case (firstPosition[0] === secondPosition[0]):
    case (firstPosition[1] === secondPosition[1]):
    case (Math.abs(firstPosition[0] - secondPosition[0]) === Math.abs(firstPosition[1] - secondPosition[1])):
      return true;
      break;
    default:
      return false;
      break;
  }
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));  */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
///////////////////    KATA 20 TAXICAB GEOMETRY    //////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//Kata 20 - Taxicab Geometry
// 6 x 6 grid
// [
//   [1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],  NORTH
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
// ]       EAST
// start in 0 , 0
// north = move to next index of current array  || NORTH + 1
// east = move to next array, same index        || EAST + 1
// south = move back in current array           || NORTH - 1
// west = move to previous array, same index    || EAST - 1

/* const blocksAway = function(directions) {
  const directionsArray = [
    {north: -1, east: 0}, //s
    {north: 0, east: -1}, //w
    {north: 1, east: 0}, //n
    {north: 0, east: 1}] //e
  let facing = 3;
  let movedNorth = 0;
  let movedEast = 0;
  if(directions[0] === "right") { facing = 2; }
  for(let i = 0; i < directions.length; i += 2) {
    switch(true) {
      case(facing == 0 && directions[i] == "left"):
        facing = 3;
        break;
      case(facing == 3 && directions[i] == "right"):
        facing = 0;
        break;
      case(directions[i] == "left"):
        facing -= 1;
        break;
      case(directions[i] == "right"):
        facing += 1;
        break;
    }
    for(let j = 1; j <= directions[i+1]; j++) {
      movedNorth += directionsArray[facing].north;
      movedEast += directionsArray[facing].east;
    }
  }
  return { east: movedEast, north: movedNorth };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1])); */

/*expected outcomes:
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}*/


/* console.log([..."👉🏿"]);
console.log(["👉","🏿"].reduce((prev, curr) => prev + curr));
console.log(['👉', '🏿'].reduce((prev, curr) => prev + curr)); */

/* 
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

for(let donut of donuts) {
  console.log(donut[1]);
}
 */

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//////////////////////    ANSI ESCAPE CODES    //////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// console.log('\033[2J'); // clear the screen                   '\033[2J'
// console.log('Normal text') // no formatting
// console.log('\033[1m%s\033[0m', 'Bold') // bold               '\033[1m%s\033[0m'
// console.log('\033[2m%s\033[0m', 'Dim') // dim                 '\033[2m%s\033[0m'
// console.log('\033[3m%s\033[0m', 'Italic') // italic           '\033[3m%s\033[0m'
// console.log('\033[4m%s\033[0m', 'Underline'); // underline    '\033[4m%s\033[0m'
// console.log('\033[5m%s\033[0m', 'Slow blink'); // slow blink  '\033[5m%s\033[0m'
// console.log('\033[8m%s\033[0m', 'Invisible') // invisible     '\033[8m%s\033[0m'
// console.log('\033[21m%s\033[0m', 'Double underline') // 2UL   '\033[21m%s\033[0m'
// console.log('\033[30m%s\033[0m', 'Black') // black fg         '\033[30m%s\033[0m'
// console.log('\033[31m%s\033[0m', 'Red') // red fg             '\033[31m%s\033[0m'
// console.log('\033[32m%s\033[0m', 'Green') // green fg         '\033[32m%s\033[0m'
// console.log('\033[33m%s\033[0m', 'Yellow') // yellow fg       '\033[33m%s\033[0m'
// console.log('\033[34m%s\033[0m', 'Blue') // blue fg           '\033[34m%s\033[0m'
// console.log('\033[35m%s\033[0m', 'Magenta') // magenta fg     '\033[35m%s\033[0m'
// console.log('\033[36m%s\033[0m', 'Cyan') // cyan fg           '\033[36m%s\033[0m'
// console.log('\033[37m%s\033[0m', 'White') // white fg         '\033[37m%s\033[0m'
// console.log('\033[40m%s\033[0m', 'Black') // black bg         '\033[40m%s\033[0m'
// console.log('\033[41m%s\033[0m', 'Red') // red bg             '\033[41m%s\033[0m'
// console.log('\033[42m%s\033[0m', 'Green') // green bg         '\033[42m%s\033[0m'
// console.log('\033[43m%s\033[0m', 'Yellow') // yellow bg       '\033[43m%s\033[0m'
// console.log('\033[44m%s\033[0m', 'Blue') // blue bg           '\033[44m%s\033[0m'
// console.log('\033[45m%s\033[0m', 'Magenta') // magenta bg     '\033[45m%s\033[0m'
// console.log('\033[46m%s\033[0m', 'Cyan') // cyan bg           '\033[46m%s\033[0m'
// console.log('\033[47m%s\033[0m', 'White') // white bg         '\033[47m%s\033[0m'


