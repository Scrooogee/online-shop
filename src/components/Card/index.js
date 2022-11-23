import React from 'react';
import './card.scss';

function Card({name, imgUrl, price, onPlus, offPlus, items = []}) {
    const [isAdded, setIsAdded] = React.useState(false)
    
    const onClickPlus = () => {
        setIsAdded(!isAdded)
        if (isAdded === false) {
            onPlus({name, imgUrl, price})
        } else {
            offPlus()
        }
    }

    return ( <div className='card-box'>
        <div className="card">
        <img alt='Sneaker' className="card__img" src={imgUrl} width={133} height={112}></img>
        <h3 className='card__titel'>{name}</h3>
        <div className='card__footer'>
            <div>
                <h5>Price:</h5>
                <p>$ {price}</p>
            </div>
            <div></div>
            <button type='button' className={isAdded ? 'card__plus-button-active' : 'card__plus-button'} onClick={onClickPlus}>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
    </div>
        
    )
}

export default Card