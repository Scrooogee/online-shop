import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Cart from './components/Cart'
import axios from 'axios';


// const goodsArr = [
// {
//   "name": "Nike Blazer Mid Suede Men's Sneakers",
//   "price": 200,
//   "img": "/img/sneakers_1.png"
// },
// {
//   "name": "Nike Blazer Mid Suede Men's Sneakers",
//   "price": 249,
//   "img": "/img/sneakers_2.png"
// },
// {
//   "name": "Nike Air Max 270 Men's Running Shoes",
//   "price": 249,
//   "img": "/img/sneakers_3.png"
// },
// {
//   "name": "Nike Blazer Mid Suede Men's Sneakers",
//   "price": 149,
//   "img": "/img/sneakers_4.png"
// },
// {
//   "name": "Puma X Aka Boku Future Rider sneakers",
//   "price": 179,
//   "img": "/img/sneakers_5.png"
// },
// {
//   "name": "Under Armor Curry 8 Men's Sneakers",
//   "price": 329,
//   "img": "/img/sneakers_6.png"
// },
// {
//   "name": "Nike LeBron XVIII Men's Sneakers",
//   "price": 299,
//   "img": "/img/sneakers_7.png"
// },
// {
//   "name": "Nike Blazer Mid Suede Men's Sneakers",
//   "price": 149,
//   "img": "/img/sneakers_8.png"
// },
// {
//   "name": "Puma X Aka Boku Future Rider sneakers",
//   "price": 239,
//   "img": "/img/sneakers_9.png"
// },
// {
//   "name": "Nike Kyrie Flytrap IV Men's Sneakers",
//   "price": 249,
//   "img": "/img/sneakers_10.png"
// },
// {
//   "name": "Nike Kyrie 7 Men's Sneakers",
//   "price": 199,
//   "img": "/img/sneakers_11.png"
// },
// {
//   "name": "Jordan Air Jordan 11 Men's Sneakers",
//   "price": 219,
//   "img": "/img/sneakers_12.png"
// }

// ]

function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    axios.get('https://637c4a6372f3ce38ea9edc01.mockapi.io/Items').then(res => setItems(res.data));
    axios.post('https://637c4a6372f3ce38ea9edc01.mockapi.io/Cart').then(res => setItems(res.data))
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://637c4a6372f3ce38ea9edc01.mockapi.io/Cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const offAddToCart = (obj) => {
    setCartItems(prev => [...prev.splice(prev.indexOf(obj), 1)])
  }

  const onRemoveItems = (id) => {
    console.log(id)
    // axios.post(`https://637c4a6372f3ce38ea9edc01.mockapi.io/Cart/${id}`)
    // setCartItems(prev => prev.filter(item => item.id !== id))
  }


  return ( <div className='wraper'>
    {cartOpened && <Cart 
    items = {cartItems}
    onClose = {() => setCartOpened(false)}
    onRemove = {onRemoveItems}/>}
    <Header onCLickCart = {() => setCartOpened(true)}/>
    <div className="content">
      <h1 className="content__titel">Sneakers</h1>
      <div className="cards">
        {items.map((item, index) => (
          <Card 
            key = {index}
            name = {item.name} 
            price = {item.price} 
            imgUrl = {item.img}
            onPlus = {(obj) => onAddToCart(obj)}
            offPlus = {offAddToCart}
            />
        ))}
      </div>
    </div>

  </div>
  );
}

export default App;
