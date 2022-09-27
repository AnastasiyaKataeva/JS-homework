const cart = {
    goods: [],
    cartBlock: null,
    setCartBlock(cartBlockSelector) {
        this.cartBlock = document.querySelector(cartBlockSelector)
    },
    addGoods(goods) {
        goods.forEach(this.addGood.bind(this))
    },
    addGood(good) {
        if (
            undefined === good.productId
            || undefined === good.productName
            || undefined === good.productCount
            || undefined === good.productPrice
        ) {
            console.log('Некорректно задан товар.')
            return
        }

        const foundGood = this.getGood(good.productId)

        if (foundGood !== undefined) {
            foundGood.productCount += good.productCount
        } else {
            this.goods.push(good)
        }
    },
    getGood(productId) {
        return this.goods.filter((good) => good.productId === productId).pop()
    },
    getTotalPrice() {
        return this.goods.reduce((totalPrice, good) => totalPrice += good.productPrice * good.productCount, 0);
    },
    render() {
        const $this = this
        this.cartBlock.innerHTML = ''
        this.goods.forEach(function (good) {
            $this.cartBlock.insertAdjacentHTML('beforeend', cart.renderGood(good))
        })
        this.cartBlock.insertAdjacentHTML('beforeend', cart.renderSummary())
    },
    renderGood(good) {
        return `<div class="good">
                    <div class="good-id">ID: <span>${good.productId}</span></div>
                    <div class="good-name">Название: <span>${good.productName}</span></div>
                    <div class="good-count">Количество: <span>${good.productCount}</span></div>
                    <div class="good-price">Цена: <span>${good.productPrice}</span></div>
                </div>`
    },
    renderSummary() {
        let summary = 'Корзина пуста'

        if (this.goods.length !== 0) {
            const count = this.goods.reduce((count, good) => count += good.productCount, 0)
            summary = 'В корзине: ' + count + ' товаров на сумму ' + this.getTotalPrice() + ' рублей'
        }

        return '<div class="summary">' + summary + '</div>'
    },
    clear() {
        this.goods = []
        this.render()
    },
    bindClearButton(buttonSelector) {
        document.querySelector(buttonSelector).addEventListener('click', this.clear.bind(this))
    }
}

cart.setCartBlock('#cart')
cart.addGoods([
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
])
cart.bindClearButton('#clear-cart-btn')
cart.render()
