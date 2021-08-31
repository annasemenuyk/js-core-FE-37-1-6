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
/* 6
// Пиши код ниже этой строки
let calculateTotalPrice = (orderedItems)=> {
  let totalPrice = 0;
  orderedItems.forEach((item)=>  totalPrice += item);
  return totalPrice;
};
};
// Пиши код выше этой строки */
/* 7
// Пиши код ниже этой строки
let filterArray = (numbers, value) =>{
  const filteredNumbers = [];

  numbers.forEach((number)=> {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
};
console.log (filterArray([1, 2, 3, 4, 5], 3));// [4, 5].
console.log (filterArray([1, 2, 3, 4, 5], 4));// [5].
console.log (filterArray([1, 2, 3, 4, 5], 5));// [].
console.log (filterArray([12, 24, 8, 41, 76], 38));// [41, 76].
console.log (filterArray([12, 24, 8, 41, 76], 20));// [24, 41, 76]
8
// Пиши код ниже этой строки
let getCommonElements=(firstArray, secondArray)=>{
  const commonElements = [];

  firstArray.forEach((element)=> {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
}; */
/* 9
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newArray = []

numbers.forEach(number => {
  if (number% 2 === 0) {
    newArray.push(number + value);
  }
else newArray.push(number)});
return newArray;
  // Пиши код выше этой строки
} */
/* 10
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length); */
/* 11
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const titles = books.map(book=>book.title);
console.log(titles); */
/* 12
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика']
  }
];
// Пиши код ниже этой строки

const genres = books.flatMap((book)=>book.genres);
console.log(genres); */
/* 13
// Пиши код ниже этой строки
const getUserNames = users => {
  const names = users.map(user => user.name)
	
return names}
  // Пиши код выше этой строки */
 /*  14
  // Пиши код ниже этой строки
const getUserEmails = users => {
  const emails = users.map(user => user.email)
	
return emails}
  // Пиши код выше этой строки */
  /* 15
  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number% 2 === 0);
const oddNumbers = numbers.filter(number => number% 2 === 1); */
16
