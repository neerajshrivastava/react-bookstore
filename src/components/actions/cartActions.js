
import { ADD_TO_CART, SHOW_DETAIL, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, MY_ORDERS, ADD_SHIPPING } from './action-types/cart-actions'

//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

//show detail action
export const showDetail = (id) => {
    return {
        type: SHOW_DETAIL,
        id
    }
}

//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}
//add qt action
export const myOrders = () => {
    return {
        type: MY_ORDERS
    }
}

