/* let topSpeed = 160;
let distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;
console.log( typeof topSpeed );
console.log( typeof distance );
console.log( typeof login );
console.log( typeof isOnline );
console.log( typeof isAdmin );
console.log( typeof topSpeed ); */

/* const pricePerItem = 3500;
const orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;
console.log(pricePerItem * orderedQuantity); */

/* const productName = "Droid";
const pricePerItem = 3500;
const message =`You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(message); */

//Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт 
//для их заказа. Объяви переменные и присвой им соответствующие значения:

const pricePerDroid = 800; //- цена одного дроида, значение
const orderedQuantity = 6; //- количество дроидов в заказе, значение
const deliveryFee = 50; // - стоимость доставки, значение
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee; // - общая сумма заказа к оплате, не забудь о стоимости доставки
const message =`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`; //- сообщение о состоянии заказа в формате
console.log(message);
/* Тесты
Объявлена переменная orderedQuantity
Значение переменной orderedQuantity это число 6
Объявлена переменная pricePerDroid
Значение переменной pricePerDroid это число 800
Объявлена переменная deliveryFee
Значение переменной deliveryFee это число 50
Объявлена переменная totalPrice
Значение переменной totalPrice это число 4850
Объявлена переменная message
Значение переменной message это строка "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price." */