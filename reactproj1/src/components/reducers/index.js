import {combineReducers} from "redux"
import {productReducer} from "./ProductReducers"
import {cartReducer} from "./CartReducers"

export default combineReducers({productReducer,cartReducer})