import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Cart from './components/Cart'
import axios from 'axios';
import Home from './pages/Home';
import ProductPage from './pages/Product';

export const AppContext = React.createContext()

// const goodsArr = [
// {
//      "id": 1
//   "name": "Nike Blazer Mid Suede Men's Sneakers",
//   "price": 200,
//   "img": "/img/sneakers_1.png"
// },
// {
//      "id": 2
//   "name": "Nike Blazer Mid Suede Men's Sneakers",
//   "price": 249,
//   "img": "/img/sneakers_2.png"
// },
// {
//      "id": 3
//   "name": "Nike Air Max 270 Men's Running Shoes",
//   "price": 249,
//   "img": "/img/sneakers_3.png"
// },
// {
//      "id": 4 
//   "name": "Nike Blazer Mid Suede Men's Sneakers",
//   "price": 149,
//   "img": "/img/sneakers_4.png"
// },
// {
//      "id": 5
//   "name": "Puma X Aka Boku Future Rider sneakers",
//   "price": 179,
//   "img": "/img/sneakers_5.png"
// },
// {
//      "id": 6
//   "name": "Under Armor Curry 8 Men's Sneakers",
//   "price": 329,
//   "img": "/img/sneakers_6.png"
// },
// {
//      "id": 7
//   "name": "Nike LeBron XVIII Men's Sneakers",
//   "price": 299,
//   "img": "/img/sneakers_7.png"
// },
// {
//      "id": 8
//   "name": "Nike Blazer Mid Suede Men's Sneakers",
//   "price": 149,
//   "img": "/img/sneakers_8.png"
// },
// {
//      "id": 9
//   "name": "Puma X Aka Boku Future Rider sneakers",
//   "price": 239,
//   "img": "/img/sneakers_9.png"
// },
// {
//      "id": 10
//   "name": "Nike Kyrie Flytrap IV Men's Sneakers",
//   "price": 249,
//   "img": "/img/sneakers_10.png"
// },
// {
//      "id": 11
//   "name": "Nike Kyrie 7 Men's Sneakers",
//   "price": 199,
//   "img": "/img/sneakers_11.png"
// },
// {
//      "id": 12
//   "name": "Jordan Air Jordan 11 Men's Sneakers",
//   "price": 219,
//   "img": "/img/sneakers_12.png"
// }

// ]

function App() {
  const [allItems, setAllItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [productPage, setProductPage] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)


  React.useEffect(() => {
    async function fetchData() {
      const cartRespons = await axios.get('https://637c4a6372f3ce38ea9edc01.mockapi.io/mdnjksbadnjkvnfs');
      const itemsRespons = await axios.get('https://637c4a6372f3ce38ea9edc01.mockapi.io/Items');
      setIsLoading(false)

      setCartItems(cartRespons.data)
      setAllItems(itemsRespons.data)
    }
    fetchData()
  }, [])

  const onAddToCart = (obj) => {

      if (cartItems.find(item => +item.id === +obj.id)) {
        axios.delete(`https://637c4a6372f3ce38ea9edc01.mockapi.io/mdnjksbadnjkvnfs/${obj.id}`)
        setCartItems(prev => prev.filter(item => +item.id !== +obj.id))
      } else {
        axios.post('https://637c4a6372f3ce38ea9edc01.mockapi.io/mdnjksbadnjkvnfs', obj)
        setCartItems(prev => [...prev, obj])
      }

  }
  
  const openProductPage = (obj) => {
    setProductPage(prev => [...prev, obj])
  }


  const onRemoveItems = (id) => {
    axios.delete(`https://637c4a6372f3ce38ea9edc01.mockapi.io/mdnjksbadnjkvnfs/${id}`)
    setCartItems(prev => prev.filter(item => +item.id !== +id))
  }

  const clickMaxPrice = () => {
    axios.get('https://637c4a6372f3ce38ea9edc01.mockapi.io/Items?sortBy=price&order=desc').then(res => setAllItems(res.data))
  }

  const clickMinPrice = () => {
    axios.get('https://637c4a6372f3ce38ea9edc01.mockapi.io/Items?sortBy=price&order=asc').then(res => setAllItems(res.data))
  }

  const itemIsAdded = (id) => cartItems.some(obj => +obj.id === +id);



  return ( 
    <AppContext.Provider value={{allItems, cartItems, onAddToCart, clickMaxPrice, clickMinPrice, itemIsAdded}}>
      <Router>
        <div className='wraper'>
          {cartOpened && <Cart 
          items = {cartItems}
          onClose = {() => setCartOpened(false)}
          onRemove = {onRemoveItems}/>}
          <Header 
          onCLickCart = {() => setCartOpened(true)}
          items = {cartItems}/>
          <Routes>
            <Route exact path='/' element={
              <Home 
              setAllItems = {setAllItems}
              loading = {isLoading}
            />
            }>
            </Route>
            <Route path='/product:id' element={
              <ProductPage 
              product = {productPage}
              onAdd = {onAddToCart}/>
            }>
            </Route>
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
