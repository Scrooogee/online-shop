import './card.scss'

function Card({name, imgUrl, price, onClickPlus}) {
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
            <button type='button' className='card__plus-button' onClick={onClickPlus}>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
    </div>
        
    )
}

export default Card