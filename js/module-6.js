/* 1
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки
  
    orderedItems.forEach(function(items) {
      totalPrice += items;
    })
  
    // Пиши код выше этой строки
    return totalPrice;
  };
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
 */
/* 2
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
    numbers.forEach(function (numbers) {
      if (numbers > value) {
        filteredNumbers.push(numbers);
      }
    })
  
    // Пиши код выше этой строки
    return filteredNumbers;
  };
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20)); */
/* 3
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    firstArray.forEach(function(ement) {
      if (secondArray.includes(ement)) {
        commonElements.push(ement);
      }
    })
  return commonElements;
    // Пиши код выше этой строки
  };
console.log(getCommonElements([1, 2, 3], [2, 4])); // [2].
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2].
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3].
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40].
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // [] */
/* 4
// Пиши код ниже этой строки

const calculateTotalPrice=(quantity, pricePerItem)=> {
    // Пиши код выше этой строки
    return quantity * pricePerItem;
  }
  5
  // Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

// Пиши код выше этой строки */
6
// Пиши код ниже этой строки
let calculateTotalPrice=(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach((function (item)=>
    totalPrice += item);
    return totalPrice;
}
// Пиши код выше этой строки
