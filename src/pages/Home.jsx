import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Filter from '../components/Filter';


function Home({allItems, onAddToCart, clickMaxPrice, clickMinPrice, onRemoveItems,cartItems, setAllItems}) {
    return (
        <div className="content">
      <h1 className="content__titel">Sneakers</h1>
      <div className='content__goods'>
        <div className='filter-box'>
          <Filter
          sortMaxPrice = {clickMaxPrice}
          sortMinprice = {clickMinPrice} 
          filterAll = {() => {
            axios.get('https://637c4a6372f3ce38ea9edc01.mockapi.io/Items').then(res => setAllItems(res.data));
          }}
          filterNike = { () => {
            axios.get('https://637c4a6372f3ce38ea9edc01.mockapi.io/Items?filter=nike').then(res => setAllItems(res.data))
          }}
          filterPuma = {() => {
            axios.get('https://637c4a6372f3ce38ea9edc01.mockapi.io/Items?filter=puma').then(res => setAllItems(res.data))
          }}
          filterAndArm = {() => {
            axios.get('https://637c4a6372f3ce38ea9edc01.mockapi.io/Items?filter=under').then(res => setAllItems(res.data))
          }}
          />
        </div>
        <div className="cards">
          {allItems.map((item, index) => (
            <Card 
              key = {index}
              name = {item.name} 
              price = {item.price} 
              imgUrl = {item.img}
              onPlus = {(obj) => onAddToCart(obj)}
              offPlus = {onRemoveItems}
              items = {cartItems}
              />
          ))}
        </div>
      </div>
    </div>
    )
}

export default Home