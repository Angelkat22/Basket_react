import { combineReducers, createStore } from "redux"
import {basketReducer} from './basketReducer'



const rootReducer = combineReducers({
    basket: basketReducer
})

export const store = createStore(rootReducer)