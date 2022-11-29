import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import ContentLoader from "react-content-loader"
import {AppContext} from '../App'


function ProductPage() {
    const [product, setProduct] = React.useState({info : []})
    const [loading, setLoading] = React.useState(true)
    const {itemIsAdded, onAddToCart} = React.useContext(AppContext)

    const {id} = useParams()

    useEffect(() => {
        (async () => {
            await axios.get(`https://637c4a6372f3ce38ea9edc01.mockapi.io/Items/${id}`).then(data => setProduct(data))
            setLoading(false)
        })()
    }, [])

    const name = product?.data?.name;
    const price = product?.data?.price;
    const img = product?.data?.img
    
    const onClickAddToCart = () => {
        onAddToCart({id, parentId : id, name, price, img})
    }
    
    return (
        <div className="content">
            <Link to = '/'>
                <p className='content__back'>Back</p>
            </Link>
            <div className='product'>
                {loading ? <ContentLoader className='product__loader'
                            speed={2}
                            width={120}
                            height={30}
                            viewBox="0 0 120 30"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <circle cx="15" cy="15" r="15" /> 
                            <circle cx="59" cy="15" r="15" /> 
                            <circle cx="105" cy="15" r="15" />
                        </ContentLoader>
                        :
                        <>
                            <div className='product__img'>
                                <img alt='product' src={img}></img>
                            </div> 
                            <div className='product__text-box'>
                                <h3 className='product__titel'>{name}</h3>
                                <h4 className='product__price'>${price}</h4>
                                <button onClick={onClickAddToCart} type='button' className={itemIsAdded(id) ? 'product__button-active' : 'product__button'}>{itemIsAdded(id) ? 'Added' : 'Add to cart'}</button>
                            </div>
                        </>}
            </div>
        </div>
    )
}

export default ProductPage