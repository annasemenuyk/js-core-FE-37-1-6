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
/* 16
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения']
  }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
  (genres, index, array) => array.indexOf(genres) === index
);
console.log(allGenres);
console.log(uniqueGenres); */
/* 17
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
console.log(topRatedBooks);
const booksByAuthor =  books.filter((book) => book.author === AUTHOR);
console.log(booksByAuthor); */
/* 18
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]; */
/* const getUsersWithEyeColor = (users, color) => 
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor('blue'));// Moore Hensley, Sharlene Bush и Carey Barr.
console.log(getUsersWithEyeColor('green'));// Ross Vazquez и Elma Head.
console.log(getUsersWithEyeColor('brown'));// Blackburn Dotson и Sheree Anthony.
console.log(getUsersWithEyeColor(' '));// функция возвращает пустой массив. */
/* 19-21
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]
const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age < maxAge);
const getUsersWithFriend = (users, friendName) =>users.filter(user => user.friends.includes(friendName)); 
const getFriends = (users) => {
  let userFriends = users.flatMap(user =>  user.friends);
const uniqueFriends = userFriends.filter(
  (friends, index, array) => array.indexOf(friends) === index)
return uniqueFriends
}; */
/* 22
const getActiveUsers = (users) => {
   return users.filter (user => user.isActive === true)
}; */
/* 23
const getInactiveUsers = (users) => {
  return users.filter (user => user.isActive === false)  
}; */
/* 24
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки
const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR); */
/* 25
// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
  return users.find(user =>user.email === email) 
};
// Пиши код выше этой строки */
/* 26
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(element => element% 2 === 0);
const eachElementInFirstIsOdd = 
firstArray.every(element => element% 2 === 1);

const eachElementInSecondIsEven = secondArray.every(element => element% 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(element => element% 2 === 1);

const eachElementInThirdIsEven = thirdArray.every(element => element% 2 === 0);
const eachElementInThirdIsOdd = 
thirdArray.every(element => element% 2 === 1); */
/* 27
// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
  return users.every (user => user.isActive === true) 
};
// П */
/* 28
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(element => element% 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(element => element% 2 === 1);

const anyElementInSecondIsEven = secondArray.some(element => element% 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(element => element% 2 === 1);

const anyElementInThirdIsEven = thirdArray.some(element => element% 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(element => element% 2 === 1); */
/* 29
// Пиши код ниже этой строки
const isAnyUserActive = users => {
  return users.some (user => user.isActive === true) 
};
// Пиши код выше этой строки */
/* 30
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((playtimes, number) => {
  return playtimes + number;
}, 0);

console.log(totalPlayTime);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length; */
/* 31
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((total, players) => {
  return total + players.playtime / players.gamesPlayed;
}, 0); */
/* 32
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
];
const calculateTotalBalance = users => {
  const totBal = users.reduce((total,users)=>
  total+users.balance,0)
  return totBal    
};
33
// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  return users.reduce((total, friend)=>{return total + friend.friends.length}, 0)  
  };
  // Пиши код выше этой строки
  34
  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort(); */
/* 35
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a); */
/*36
 const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт'
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a)); */
/* 37
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating);
 */
/* 38
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
];
// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
  return [...users].sort(
  (firstUser, secondUser) => firstUser.balance - secondUser.balance);  
};
// Пиши код выше этой строки */
/* 39
// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => 
  [...users].sort(
    (firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);     

// Пиши код выше этой строки */
/* 40
// Пиши код ниже этой строки
const sortByName = users => [...users].sort((firstUser, secondUser) =>
  firstUser.name.localeCompare(secondUser.name));
// Пиши код выше этой строкиname */
/* 41
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки
const names = books.filter(book=> book.rating>MIN_BOOK_RATING).map(book=> book.author)
.sort((firstBook, secondBook) =>
firstBook.localeCompare(secondBook)); */
/* 42
// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => 
 [...users]
  .sort(
    (a, b) => a.friends.length - b.friends.length).map(user=> user.name)
// Пиши код выше этой строки */
/* 43
// Пиши код ниже этой строки
const getSortedFriends = users => {
  return users.flatMap( el => el.friends).filter((el, index, arr) => arr.indexOf(el)===index).sort((a, b) => a.localeCompare(b)) 
};
// Пиши код выше этой строки */
/* 44
// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return users
   .filter((el) => el.gender === gender)
   .map((el) => el.balance)
   .reduce((total, el) => {
     return total + el
   }, 0)
}

// Пиши код выше этой строки
 */