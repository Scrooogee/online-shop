import React from "react";
import {Link} from 'react-router-dom';
import './cart.scss';

function Cart({onClose, items = [], onRemove}) {
    

    return (
        <div className="content">
            <Link to = '/'>
                <p className='content__back'>Back</p>
            </Link>
            <div className="cart">
                {items.length > 0 ?
                    <>
                        <div className="cart__header">
                            <h3 className="cart__titel">Cart</h3>
                        </div>
                        <div className="cart__item-box">
                            {items.map(obj => (
                                <div className="cart__item">
                                    <img className="cart__img" alt="Sneakers" src={obj.img} width={100} height={100}></img>
                                    <h6 className="cart__item-titel">{obj.name}</h6>
                                    <p className="cart__item-price">${obj.price}</p>
                                    <button onClick={() => onRemove(obj.id)}  typeof="button" className="cart__close-button">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart__bottom">
                            <p className="cart__total-price">Total: <span>${items.length === 0 ? 0 : items.reduce((acc, item) => acc += +item.price, 0)}</span></p>
                            <button type="button" className="cart__button cart__button-right">Buy</button>
                        </div>
                    </> 
                    : 
                    <div className="cart__empty"> 
                        <p className="cart__empty-titel">Oops...</p>
                        <p className="cart__empty-titel">It's empty</p>
                        <img alt="empty" width={200} height={200} className="cart__empty-img" src="/img/empty_cart.png"></img>
                        <Link to='/'>
                            <span onClick={onClose} type="button" className="cart__button">Go back</span>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;