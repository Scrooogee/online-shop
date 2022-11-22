import React from "react";
import './cart.scss';

function Cart({onClose, items = [], onRemove}) {
    // const [itemsRemove, setItemsRemove] = React.useState(items)
    
    // const removeItems = (obj) => {
    //     setItemsRemove(itemsRemove.splice(itemsRemove.indexOf(obj), 1))
    // } 
    

    return (
        <div className="overlay">
            <div className="cart">
                <div className="cart__header">
                    <h3 className="cart__titel">Cart</h3>
                    <button onClick={onClose} typeof="button" className="cart__close-button">
                        <span></span>
                        <span></span>
                    </button>
                    </div>
                <div className="cart__item-box">
                    {items.map(obj => (
                        <div className="cart__item">
                            <img className="cart__img" alt="Sneakers" src={obj.imgUrl} width={70} height={70}></img>
                            <div className="cart__item-text-box">
                                <h6 className="cart__item-titel">{obj.name}</h6>
                                <p className="cart__item-price">${obj.price}</p>
                            </div>
                            <button onClick={() => onRemove(obj.id)}  typeof="button" className="cart__close-button">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    ))}
                </div>
                <div className="cart__bottom">
                    <p className="cart__total-price">Total: <span>$200</span></p>
                    <p className="cart__total-price">Tax 5%: <span>$4</span></p>
                    <button type="button" className="cart__button">Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;