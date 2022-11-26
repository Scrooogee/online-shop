import React from 'react'
import './filter.scss'
import {AppContext} from '../../App'

function Filter({filterAll, filterNike, filterPuma, filterAndArm}) {

    const {clickMaxPrice, clickMinPrice} = React.useContext(AppContext)

    return (
        <div className='filter'>
            <h4 className='filter__titel'>
                Sort
            </h4>
            <form className='button__wraper'>
                <label className='filter__radio'>
                    <input onClick={clickMaxPrice} type={'radio'} name={'priceSort'} value={'max'}></input>
                    <span>Max Price</span>
                </label>
                <label className='filter__radio'>
                    <input onClick={clickMinPrice} type={'radio'} name={'priceSort'} value={'min'}></input>
                    <span>Min Price</span>
                </label>
            </form>
            <h4 className='filter__titel'>
                Filter
            </h4>
            <form className='button__wraper'>
                <label className='filter__radio'>
                    <input onClick={filterAll} type={'radio'} name={'brandFilter'} value={'all'}></input>
                    <span>All</span>
                </label>
                <label className='filter__radio'>
                    <input onClick={filterNike} type={'radio'} name={'brandFilter'} value={'nike'}></input>
                    <span>Nike</span>
                </label>
                <label className='filter__radio'>
                    <input onClick={filterPuma} type={'radio'} name={'brandFilter'} value={'puma'}></input>
                    <span>Puma</span>
                </label>
                <label className='filter__radio'>
                    <input onClick={filterAndArm} type={'radio'} name={'brandFilter'} value={'underArmor'}></input>
                    <span>Under Armor</span>
                </label>
            </form>
        </div>
    )
}

export default Filter