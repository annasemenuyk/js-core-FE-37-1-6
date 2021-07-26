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
 //4*/
const fruits = ["apple", "plum", "pear", "orange"]; 
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
 */
9
function getExtremeElements(array) {
  // Change code below this line
const getExtremeElements = [1, 2, 3, 4, 5]
const getExtremeElements = ["Earth", "Mars", "Venus"]

  // Change code above this line
};
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements((["Earth", "Mars", "Venus"]));


    
  