// import React from 'react'
// import './product.scss'

// function Product(onAdd, id, name, img, price) {
//     const [isAdded, setIsAdded] = React.useState(false)
    
//     const onClickAddToCart = () => {
//         setIsAdded(!isAdded)
//         onAdd({id, name, img, price})
//     }

//     return (
//         <div className='product'>
//                 <div className='product__img'>
//                     <img alt='product' src='./img/sneakers_'></img>
//                 </div> 
//                 <div className='product__text-box'>
//                     <h3 className='product__titel'>Nike Blazer Mid Suede Men's Sneakers</h3>
//                     <h4 className='product__price'>$200</h4>
//                     <button onClick={onClickAddToCart} type='button' className={isAdded ? 'product__button-active' : 'product__button'}>{isAdded ? 'Added' : 'Add to cart'}</button>
//                 </div>
//         </div>
//     )
// }

// export default Product