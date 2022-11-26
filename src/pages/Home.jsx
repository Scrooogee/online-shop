import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Filter from '../components/Filter';
import {AppContext} from '../App'


function Home({setAllItems, loading}) {

    const {allItems, onAddToCart, itemIsAdded} = React.useContext(AppContext)
    return (
        <div className="content">
      <h1 className="content__titel">Sneakers</h1>
      <div className='content__goods'>
        <div className='filter-box'>
          <Filter
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
            {loading ?  [...Array(9)].map((item) => (
                <Card 
                onPlus = {(obj) => onAddToCart(obj)}
                loading = {loading}
                {...item}
              />
          )) :  allItems.map((item, index) => (
            <Card 
            added = {itemIsAdded(item.id)}
            key = {index}
            onPlus = {(obj) => onAddToCart(obj)}
            loading = {loading}
            {...item}
          />

          ))}
        </div>
      </div>
    </div>
    )
}

export default Home