
import { Actions } from "../Constants"

const initialState={
    products:[],
}

export const productReducers=(state=initialState,{type,payload})=>{
    switch(type){
case Actions.SET_PRODUCT:
    return {...state,products:payload}
    default:
        return state
    }
}

export const  selectedProduct=(state='',{type,payload})=>{
    switch(type){
        case Actions.SELECTED_PRODUCT:
            return {...state,...payload}
        case Actions.REMOVE_SELECTED_PRODUCT:
            return {}
            default:
                return state
    }

} 