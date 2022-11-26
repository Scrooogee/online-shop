// import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'


function ProductPage( onAdd,  name, img, price) {
    const [isAdded, setIsAdded] = React.useState(false)
    const [product, setProduct] = React.useState({info: []})
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        // axios.get(id).then(data => setProduct(data))
    }, [])
    
    const onClickAddToCart = () => {
        setIsAdded(!isAdded)
        onAdd({name, img, price})
    }
    
    return (
        <div className="content">
            <Link to = '/'>
                <p className='back'>Back</p>
            </Link>
            {/* {product.map(item =>( */}
                <div className='product'>
                <div className='product__img'>
                    <img alt='product' src={product.img}></img>
                </div> 
                <div className='product__text-box'>
                    <h3 className='product__titel'>{product.name}</h3>
                    <h4 className='product__price'>${product.price}</h4>
                </div>
                <button onClick={onClickAddToCart} type='button' className={isAdded ? 'product__button-active' : 'product__button'}>{isAdded ? 'Added' : 'Add to cart'}</button>
            </div>
            {/* ))} */}
        </div>
    )
}

export default ProductPage