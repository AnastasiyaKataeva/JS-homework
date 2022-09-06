//1- е задание
let i = 2;

while (i <= 100) {
    let j = 2, k = 0;
    while (j <= i) {
        if (i % j === 0) {
            k++;
        }
        j++;
    }
    if (k === 1) {
        console.log(i);
    }
    i++;
}


//2-е задание
function countBasketPrice (basket) {
    let getPrice = function (productName) {
        // Формат таблицы цен: [ ['название товара', цена], ... ]
        let prices = [
            ['Яблоки', 150],
            ['Груши' , 100],
            ['Манго' , 200]
        ]

        let isProductHasPrice = function (price) {
            return productName === price[0];
        }

        let price = prices.filter(isProductHasPrice);

        if (price.length === 0) {
            return undefined;
        }

        return price[0][1];
    }

    let sum = 0;
    basket.forEach(function (product) {
        let productName = product[0];
        let productCount = product[1];
        let productPrice = getPrice(productName)
        let productPriceSum = productCount * productPrice;

        console.log(productName + ' цена ' + productPrice + ' * количество ' + productCount + ' = ' + productPriceSum);

        sum = sum + productPriceSum;
    })

    return sum;
}

// Формат корзины: [ ['название товара', количество], ... ]
let basket1 = [
    ['Яблоки', 8],
    ['Груши' , 6]
]
console.log('basket1 price = ' + countBasketPrice(basket1));
