
import { ADD_TO_CART, SHOW_DETAIL, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, MY_ORDERS, FETCH_ITEMS_SUCCESS, ADD_SHIPPING } from './action-types/cart-actions'

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

//Call HTTPS request to get books for API
export const fetchData = () => {
    const url = 'https://api.myjson.com/bins/j82l2';
    console.log("INSIDE fetchData :", url);
    return (dispatch) => {
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(
                { type: "FETCH_ITEMS_SUCCESS", payload: json }))
            .catch(err => dispatch(
                { type: "ERROR", msg: "Unable to fetch data" }))
    };
}

