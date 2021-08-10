/* const apartment = {
imgUrl: "https://via.placeholder.com/640x480",
descr :"Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],
};
2
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  owner:{name:"Henry",
phone:"982-126-1588",
email:"henry.carter@aptmail.com",}
  }; 
  3
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment. price;
  const aptTags = apartment.tags;
  // Change code above this line
  4
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[2];
  // Change code above this line
  5
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  // Change code below this line
  const aptRating = apartment["rating"];
  const aptDescr = apartment["descr"];
  const aptPrice = apartment["price"];
  const aptTags = apartment["tags"];
  // Change code above this line
  6
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  // Change code below this line
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name ="Henry Sibola";
  apartment.tags.push("trusted");
  7
  const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
  location:{ 
    country: "Jamaica",
    city: "Kingston",
    },
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = { country: 'Jamaica', city: 'Kingston' };
console.log(apartment.area);// число 60
console.log(apartment.rooms);// число 3
console.log(apartment.location);// объект
console.log(apartment.location.country);// строка Jamaica
console.log(apartment.location.city);// строка "Kingston"
8
const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Change code below this line
  name, 
  price, 
  image,
  tags
  // Change code above this line
};
console.log(product.name);
console.log(product.price);
console.log(product.image);
console.log(product.tags);
9
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
  // Change code above this line
};
10
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = ['descr', 'rating', 'price'];
const values = ['Spacious apartment in the city center', 4, 2153];
for (const key in apartment) {
  console.log(key);
  console.log(apartment[key]);
};
// Change code below this line
11
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);};

  // Change code above this line
};
console.log(key);
console.log(apartment[key]);
12
function countProps(object) {
  // Change code below this line
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount = Object.keys(object).length;
    }
  }

  return propCount;
  // Change code above this line
}
13
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for(let key of keys){
  values.push(apartment[key]);
};
console.log(values);*/
14
function countProps(object) {
  // Change code below this line
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Change code above this line
}