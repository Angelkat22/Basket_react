import React from 'react'
import styles from './ModalWindow.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from 'react-redux'

import { addToBasketAction } from '../../store/basketReducer'



function ModalWindow({ active, setActive }) {

    let dispatch = useDispatch()

    return (
        <div className={`${styles.modal_window} ${active && styles.active}`} onClick={() => setActive(false)}>

            <form className={`${styles.modal_area} ${active && styles.active}`} onSubmit={(e) => {
                e.preventDefault()
                dispatch(addToBasketAction(e.target.item.value))
                e.target.reset()
                }} onClick={(e) => e.stopPropagation()}>
                    <img src='../images/Ganteli.png' className={styles.mark} onClick={() => setActive(false)} />
                    {/* <FontAwesomeIcon icon={faX}  className={styles.mark} onClick={() => setActive(false)} /> */}
                    <label >Insert Product: </label>
                    <input type="text" placeholder='title' name='item' />
                    <button onClick={() => setActive(false)}>Add Product</button>
            </form>
        </div >
    )
}
export default ModalWindow