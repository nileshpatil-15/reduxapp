import { Actions } from "../Constants"


export const SetProducts=(products)=>{
    return {type:Actions.SET_PRODUCT,
    payload:products}
}

export const SelectedProduct=(product)=>{
return{
    type:Actions.SELECTED_PRODUCT,
    payload:product
}
}
export const RemoveProduct=(product)=>{
return{
    type:Actions.REMOVE_SELECTED_PRODUCT,
    payload:product
}
}