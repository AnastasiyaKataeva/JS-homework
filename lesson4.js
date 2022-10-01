//1е задание
function arrOfNumber(num) {
    if (!Number.isInteger(num) || num < 0 ||num > 999) {
        console.log('Введите целое число от "0" до "999" ');
        return {};

    }
    return {
        units: num % 10,
        hundreds: Math.floor(num / 100),
        dozents: Math.floor(num/10) % 10,
    }
}
console.log(arrOfNumber(245));
console.log(arrOfNumber(-999));
console.log(arrOfNumber(7.88));


//2е задание

// let product1 = {
//     productName: 'Яблоки',
//     productCount: 3,
//     productPrice: 200
// };
//
// let product2 = {
//     productName: 'Груши',
//     productCount: 5,
//     productPrice: 250
// };
//
// function basketPrice(arr) {
//     let sum = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i].productPrice * arr[i].productCount;
//     }
//
//     return sum;
// }
//
// let basket = [product1, product2]
// console.log('Цена товаров в корзине : ' + basketPrice(basket) + ' рублей ');
const basket = {
    goods: [
        {
            productId: 1,
            productName: 'Футболка',
            productCount: 3,
            productPrice: 1200
        },
        {
            productId: 2,
            productName: 'Шорты',
            productCount: 1,
            productPrice: 1600
        },
        {
            productId: 3,
            productName: 'Джинсы',
            productCount: 2,
            productPrice: 3500
        }

    ],
    countBasketPrice() {
        let initialValue = 0;
        return this.goods.reduce((totalPrice, basketItem) => totalPrice += basketItem.productPrice, initialValue);
    }
};

console.log('В корзине товаров на ' + basket.countBasketPrice() + ' рублей.');
