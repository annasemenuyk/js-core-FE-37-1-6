/* const parent = {
    name: 'Stacey',
    surname: 'Moore',
    age: 54,
    heritage: 'Irish'
  };
  // Пиши код ниже этой строки
  
  const child = Object.create(parent);
  
  // Пиши код выше этой строки
  child.name = 'Jason';
  child.age = 27; */
/*   2
  const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish'
  };
  // Пиши код ниже этой строки
  
  const parent = Object.create(ancestor);
  parent.name = 'Stacey';
  parent.surname = 'Moore';
  parent.age = 54;
  
  const child = Object.create(parent);
  child.name = 'Jason';
  child.age = 27;
  
  // Пиши код выше этой строки */
 /*  3
  function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  };
  4
  function Car ({ brand, model, price})
{
  this.brand = brand;
  this.model = model;
  this.price = price;
}; */
/* 5
function Car({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  };
  Car.prototype.getPrice = function(){
    return this.price;
  };
  Car.prototype.changePrice =function(newPrice){
    this.price = newPrice;
  } */
/* 6
  function Storage(items) {
	this.items = items
};
Storage.prototype.getItems = function (items){
return this.items
};
Storage.prototype.addItem = function (newItem){
return this.items.push(newItem);
};
Storage.prototype.removeItem = function (item){
return this.items.splice(this.items.indexOf(item), 1);
};
// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]  */
7
function StringBuilder(baseValue) {
	this.value = baseValue;
};


// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^=' 
