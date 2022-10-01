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
  buy(goodBlock) {
    const good = {
      productId: parseInt(goodBlock.querySelector('.good-id').innerHTML),
      productName: goodBlock.querySelector('.good-name').innerHTML,
      productPrice: parseInt(goodBlock.querySelector('.good-price').innerHTML),
      productCount: 1
    }
    this.addGood(good)
    this.render()
  },
  bindClearButton(buttonSelector) {
    document.querySelector(buttonSelector).addEventListener('click', this.clear.bind(this))
  },
  bindBuyButton(buttonSelector) {
    document.querySelectorAll(buttonSelector).forEach((elem) => elem.addEventListener('click', (e) => this.buy(e.currentTarget.parentElement)))
  }
}

const modal = {
  block: null,
  init(modalSelector) {
    this.block = document.querySelector(modalSelector)
    this.block.querySelector('.modal-close-button').addEventListener('click', this.hide.bind(this))
    this.block.querySelector('.modal-prev').addEventListener('click', this.prev.bind(this))
    this.block.querySelector('.modal-next').addEventListener('click', this.next.bind(this))
  },
  show(imageList) {
    const modalImage = this.block.querySelector('.modal-image')
    modalImage.innerHTML = null

    imageList.querySelectorAll('img').forEach((elem) => modalImage.insertAdjacentHTML('beforeend', elem.outerHTML))

    this.block.style.display = 'block'
  },
  hide() {
    this.block.style.display = 'none'
  },
  next() {
    const firstImage = this.block.querySelector('.modal-image img:first-child')
    this.block.querySelector('.modal-image').insertAdjacentElement('beforeend', firstImage)
  },
  prev() {
    const lastImage = this.block.querySelector('.modal-image img:last-child')
    this.block.querySelector('.modal-image').insertAdjacentElement('afterbegin', lastImage)
  }
}

cart.setCartBlock('#cart')
cart.bindClearButton('#clear-cart-btn')
cart.bindBuyButton('.buy')
cart.render()

modal.init('.modal')
document.querySelectorAll('.good-image').forEach(function (elem) {
  const imageListBlock = elem.parentElement.querySelector('.good-image-list')
  elem.addEventListener('click', modal.show.bind(modal, imageListBlock))
})
