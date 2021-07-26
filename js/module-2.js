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
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));*/







    
  