import Header from './components/Header';
import Card from './components/Card';


const goodsArr = [
  {
    name: "Nike Blazer Mid Suede Men's Sneakers",
    price: 200,
    img: "/img/sneakers_1.png",
  },
  {
    name: "Nike Blazer Mid Suede Men's Sneakers",
    price: 249,
    img: "/img/sneakers_2.png",
  },
  {
    name: "Nike Air Max 270 Men's Running Shoes",
    price: 249,
    img: "/img/sneakers_3.png",
  },
  {
    name: "Nike Blazer Mid Suede Men's Sneakers",
    price: 149,
    img: "/img/sneakers_4.png",
  },
  {
    name: "Puma X Aka Boku Future Rider sneakers",
    price: 179,
    img: "/img/sneakers_5.png",
  },
  {
    name: "Under Armor Curry 8 Men's Sneakers",
    price: 329,
    img: "/img/sneakers_6.png",
  },
  {
    name: "Nike LeBron XVIII Men's Sneakers",
    price: 299,
    img: "/img/sneakers_7.png",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 149,
    img: "/img/sneakers_8.png",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 239,
    img: "/img/sneakers_9.png",
  },
  {
    name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 249,
    img: "/img/sneakers_10.png",
  },
  {
    name: "Nike Kyrie 7 Men's Sneakers",
    price: 199,
    img: "/img/sneakers_11.png",
  },
  {
    name: "Jordan Air Jordan 11 Men's Sneakers",
    price: 219,
    img: "/img/sneakers_12.png",
  },

]


function App() {
  return ( <div className='wraper'>
    <Header/>
    <div className="content">
      <h1 className="content__titel">Sneakers</h1>
      <div className="cards">
        {goodsArr.map(item => (
          <Card 
            name = {item.name} 
            price = {item.price} 
            imgUrl = {item.img}
            // onClickFavorite = {}
            onClickPlus = {() => item.className = "card__plus-button-active"}
            />
        ))}
      </div>
    </div>

  </div>
  );
}

export default App;
