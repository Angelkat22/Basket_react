import React from 'react'
import styles from './ProductsItem.module.css'
import {useDispatch} from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

import { decrCountAction, incrCountAction, delFromBasketAction } from '../../store/basketReducer'



function ProductsItem (props) {

const {id, image, title, count} = props

let dispatch = useDispatch()

    return (
    
    <div className={styles.item}>
        <img src={image} alt='img' />
        <h3>{title}</h3>
        <div className={styles.button_area}>
            <div className={styles.button_area_counter}>
            <button className={styles.button} onClick={() => dispatch(decrCountAction(id))}>-</button>
            <p>{count}</p>
            <button className={styles.button} onClick={() => dispatch(incrCountAction(id))}>+</button>
            </div>
            <FontAwesomeIcon icon={faTrash}  className={styles.trash} onClick={() => dispatch(delFromBasketAction(0,id))} />
        </div>
    </div>
    )
}

export default ProductsItem