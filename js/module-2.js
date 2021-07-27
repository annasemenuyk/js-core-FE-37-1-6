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
console.log(calculateTotalPrice());*/
21
function findLongestWord(string) {
  // Change code below this line
  let words = string.toLowerCase();
  let word = words.split(' ');
   for (let i = 0; i < word.length; i += 1)  {
    word += word.length;}
  return word;
  // Change code above this line
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));