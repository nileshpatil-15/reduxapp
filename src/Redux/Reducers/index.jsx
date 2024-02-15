import {combineReducers} from 'redux' 
import { productReducers,selectedProduct } from './ProductReducres'


const reducer=combineReducers({
    allProducts:productReducers,
    selectedProduct:selectedProduct
})
export default reducer