const searchButton = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main__list')

const cardArray = [
  {
    id: 0,
    title: 'Пвх материал 1-й сорт',
    price: '170 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/Rectangle.png',
  },
  {
    id: 1,
    title: 'Пвх материал 2-й сорт',
    price: '171 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/Rectangle.png',
  },
  {
    id: 2,
    title: 'Пвх материал 3-й сорт',
    price: '172 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/Rectangle.png',
  },
  {
    id: 3,
    title: 'Пвх материал 4-й сорт',
    price: '173 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/Rectangle.png',
  },
  {
    id: 4,
    title: 'Пвх материал 5-й сорт',
    price: '174 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/Rectangle.png',
  },
  {
    id: 5,
    title: 'Пвх материал 6-й сорт',
    price: '175 ₽',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/Rectangle.png',
  },
]

const render = cardList => {
  cardWrapper.innerHTML = ''
  cardList.forEach((item, idx) => {
    cardWrapper.insertAdjacentHTML(
      'beforeend',
      `<a href="/product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                  <img src="${item.img}" alt="${item.title}">
                </div>
                <h5 class="content-main__list-item--title">${item.title}</h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                <div class="content-main__list-item--desc-box">
                  <span class="content-main__list-item--desc">${item.address}</span>
                  <span class="content-main__list-item--desc">${item.date}</span>
                </div>
              </a>`
    )
  })
}

const filteredArray = (array, value) => {
  console.log(array)
  console.log(value)

  return array.filter(item => {
    return item.title.includes(value) || item.price.includes(value)
  })
}
render(cardArray)

searchButton.addEventListener('click', () => {
  render(filteredArray(cardArray, searchInput.value))
})
