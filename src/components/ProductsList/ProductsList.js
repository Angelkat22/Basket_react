import React, { useState } from 'react'
import ProductsItem from '../ProductsItem/ProductsItem'
import styles from './ProductsList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeBasketAction } from '../../store/basketReducer'
import ModalWindow from '../ModalWindow/ModalWindow'




function ProductsList() {

    let basket = useSelector(store => store.basket)

    let dispatch = useDispatch()

    const [active, setActive] = useState(false)

    return (
        <div className='container'> 
            <ModalWindow active={active} setActive={setActive} />
            <div className={styles.list}> 
            <button onClick={() => setActive(!active)}>Add To Basket<FontAwesomeIcon icon={faCartShopping} className={styles.btn} /></button>
            <button onClick={() => dispatch(removeBasketAction())}>Remove All<FontAwesomeIcon icon={faTrash}  className={styles.btn} /></button>
            </div>
            <div className={styles.basket}>
                {
                basket.map((elem, index) => <ProductsItem{...elem} key={index} />)
                }
                {
                basket.length === 0 && <h3>Your Basket is Empty!</h3>
                }
            </div>
            
        </div>
    )
}

export default ProductsList