import { useNavigate } from 'react-router-dom';
import ContentLoader from 'react-content-loader';
import React from 'react';
import './card.scss';
import {AppContext} from '../../App'

function Card({id, name, img, price, onPlus, loading = false}) {

    const {itemIsAdded} = React.useContext(AppContext)

    const onClickPlus = () => {
        onPlus({id, parentId: id,  name, img, price})
    }
    let navigate = useNavigate()

    return ( 
        <div className='card-box'>
            <div className="card">
                {loading ? 
                <ContentLoader className='ContentLoader'
                    speed={2}
                    height={212}
                    viewBox="0 0 150 187"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" height="95" /> 
                    <rect x="0" y="116" rx="3" ry="3" height="15" /> 
                    <rect x="0" y="135" rx="3" ry="3" width="93" height="15" /> 
                    <rect x="0" y="159" rx="8" ry="8" width="80" height="24" /> 
                    <rect x="114" y="154" rx="8" ry="8" width="32" height="32" />
                </ContentLoader> :
                <>
                    <div onClick={() => navigate('/product/:id'.replace(':id', id))}  className='card__link'>
                        <img alt='Sneaker' className="card__img" src={img} width={133} height={112}></img>
                        <h4 className='card__titel'>{name}</h4>
                    </div>
                    <div className='card__footer'>
                        <div>
                            <h5>Price:</h5>
                            <p>$ {price}</p>
                        </div>
                        <div></div>
                        <button type='button' className={itemIsAdded(id) ? 'card__plus-button-active' : 'card__plus-button'} onClick={onClickPlus}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </>}
            </div>
        </div>
        
    )
}

export default Card