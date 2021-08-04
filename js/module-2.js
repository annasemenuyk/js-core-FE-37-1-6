/* 1
function checkAge(age) {
    if  (age >= 18) { // Change this line
      return "You are an adult";
    }
      return "You are a minor";
  } 
   2 //ранний возврат//
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line
    if (password === ADMIN_PASSWORD) {
        return "Welcome!";
       }
       return "Access denied, wrong password!";
    // Change code above this line
  };
  console.log(checkPassword("mangohackzor"));
  console.log(checkPassword("polyhax"));
  console.log(checkPassword("jqueryismyjam")); 
  3
  function checkStorage(available, ordered) {
    // Change code below this line
  
    if (ordered === 0) {
      return "Your order is empty!";
    } if (ordered > available) {
      return "Your order is too large, not enough goods in stock!";
    }
     return "The order is accepted, our manager will contact you";
  };
    
  console.log(checkStorage(100, 50));
  console.log(checkStorage(100, 130));
  console.log(checkStorage(70, 0));
  console.log(checkStorage(200, 20));
  console.log(checkStorage(200, 250));
  console.log(checkStorage(150, 0)); 
 //4
const fruits = ["apple", "plum", "pear", "orange"]; */
//5
/*const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);*/
/* fruits[1] = "peach";
fruits[3] = "banana";
console.log(fruits); 
const fruitsArrayLength = fruits.length

console.log(fruitsArrayLength);
 8
 const lastElementIndex = fruits.length - 1;
 const lastElement = [lastElementIndex];
 console.log(lastElementIndex);
 console.log(lastElement);
 
9
const getExtremeElements = [[1, 2, 3, 4, 5] ,
["Earth", "Mars", "Venus"],
["apple", "peach", "pear", "banana"]];

function getExtremeElements(array){
  // Change code below this line
  const firstElement = array[0];
  const lastElement = array[array.length - 1];
  return   [firstElement, lastElement];
      // Change code above this line
  };
   console.log(getExtremeElements);
   10
   const words = "Mango";
   function splitMessage(message, delimeter) {
    let words;
    // Change code below this line
    words = message.split(delimeter);
    // Change code above this line
    return words;
  };
  console.log(words);
  11
  function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
    let totalPrice;
    totalPrice = message.split(' ').length * pricePerWord;
    return totalPrice;
    // Change code above this line
 };
 console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
 console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
 console.log(calculateEngravingPrice("Web-development is creative work", 40));
 console.log(calculateEngravingPrice("Web-development is creative work", 20));
 12
 function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
  string = array.join(delimeter);


  // Change code above this line
  return string;
};
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
13
function slugify(title) {
  // Change code below this line
const string = title.toLowerCase();
const words = string.split(' ');
const slug = words.join('-');
return slug;
  // Change code above this line
};
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
14
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
console.log(firstTwoEls);

const nonExtremeEls = fruits.slice(1, 4);
console.log(nonExtremeEls);

const lastThreeEls = fruits.slice(-3);
console.log(lastThreeEls);
15
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line
16
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let newArray = firstArray.concat(secondArray);
  if(newArray.length>maxLength){
    return firstArray.concat(secondArray).slice(0, maxLength);
  }
  return newArray;
    // Change code above this line
  };
  17
  const start = 3;
const end = 7;

for (let i = start; i <= end; i +=1 )  { // Change this line
  console.log(i);
}
18
function calculateTotal(number) {
  // Change code below this line
  let sum = 0;
  for (let i = 0; i <= number; i +=1 )  {
  sum +=i; }
  return sum;
    // Change code above this line
 };
 console.log(calculateTotal(1));
 console.log(calculateTotal(3));
 console.log(calculateTotal(7));
 console.log(calculateTotal(18));
 console.log(calculateTotal(24));
 console.log(calculateTotal());
 19
 const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i +=1 ) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
20
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1)  {
    total += order[i];}
   // Change code above this line
  return total;
};
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice());
21
function findLongestWord(string) {
  // Change code below this line
  const stringSplit = string.split(' ');
  let longestWord = "";
  
   for (const word of stringSplit){
   if (word.length > longestWord.length) {
     longestWord = word;
   }}
  return longestWord;
  // Change code above this line
}
22
function createArrayOfNumbers(min, max) {
  const numbers = [];
 // Change code below this line
  for (let i = min; i <= max; i += 1 ){
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
};
console.log(1, 3);
console.log(14, 17);
console.log(29, 34);
23
function filterArray(numbers, value) {
    // Change code below this line
    let newNumbers = [];
    for (const number of numbers) {
      if (number > value) {
       newNumbers.push(number);
      }
    }
    return newNumbers;};
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
24 
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit);
  // Change this line
}
25
function getCommonElements(array1, array2) {
  // Change code below this line
  let arr
  const addArrey = []
  for (let arr of array1) {
    if (array2.includes(arr)) {
      addArrey.push(arr);
     }
   }
   return addArrey;
 // Change code above this line
}
26
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i of order) {
    total += i;
  }

  // Change code above this line
  return total;
};
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));
console.log(calculateTotalPrice());
27
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let number of numbers) {
       if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
  // Change code above this line
};
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
console.log(filterArray()); // со случайным массивом и числом  правильный массив
28
// Change code below this line
const x = 3;
const a = 3 % x; //0
const b = 4 % x;//1
const c = 11 % 4;//3
const d = 12 % 7;//5
const e = 8 % x; //2
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
function getEvenNumbers(start, end) {
  // Change code below this line
  let evenNambers = [];
  for ( let i = start; i<=end; i +=1){
  if (i % 2 === 0) {evenNambers.push(i);
  }}
  return evenNambers;
   // Change code above this line
 };
console.log(getEvenNumbers(2, 5)); //возвращает [2, 4]
console.log(getEvenNumbers(3, 11)); //возвращает [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); //возвращает [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); //возвращает [8]*/
