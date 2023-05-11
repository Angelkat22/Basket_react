const INCR_COUNT = 'INCR_COUNT'
const DECR_COUNT = 'DECR_COUNT'
const DEL_FROM_BASKET = 'DEL_FROM_BASKET'
const ADD_TO_BASKET = 'ADD_TO_BASKET'
const REMOVE_BASKET = 'REMOVE_BASKET'


const defaultState = [
    { id: 1, title: 'Велосипед', image: './images/bysicle.png', count: 5 },
    { id: 2, title: 'Самокат', image: './images/Scooter.png', count: 4 },
    { id: 3, title: 'Гантели', image: './images/Ganteli.png', count: 7 },
    { id: 4, title: 'Ракетки', image: './images/rokets.png', count: 1 }
]

export const basketReducer = (state = defaultState, action) => {

    const new_state = [...state]
    const item = new_state.find(elem => elem.id === action.payload)

    switch (action.type) {
        case INCR_COUNT:
            if (item.count < 25) {
            item.count++
            }
            return new_state
        case DECR_COUNT:
            item.count--
            return new_state.filter(elem => elem.count > 0)
        case DEL_FROM_BASKET:
            return new_state.filter(elem => elem.id !== action.payload)
        case ADD_TO_BASKET:
            const newItem = {
            id: Date.now(),
            title: action.payload,
            image: '',
            count: 1
            }
            return [...new_state, newItem]
        case REMOVE_BASKET:
            return []
        default:
            return state
        }
    }

    export const incrCountAction = (payload) => ({ type: INCR_COUNT, payload })
    export const decrCountAction = (payload) => ({ type: DECR_COUNT, payload })
    export const delFromBasketAction = (payload) => ({ type: DEL_FROM_BASKET, payload })
    export const addToBasketAction = (payload) => ({ type: ADD_TO_BASKET, payload })
    export const removeBasketAction = () => ({ type: REMOVE_BASKET })