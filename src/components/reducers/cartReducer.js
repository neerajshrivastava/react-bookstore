import {
    ADD_TO_CART,
    SHOW_DETAIL,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    MY_ORDERS,
    FETCH_ITEMS_SUCCESS,
} from "../actions/action-types/cart-actions";

//Define initial state of application
const initState = {
    items: [],
    addedItems: [],
    showItemDetail: "",
    error: null,
    loading: false,
    myOrders: [
        {
            _id: 1,
            title: "Flex 14 in Action",
            isbn: "1935182420",
            pageCount: 600,
            orderDate: { $date: "2020-01-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 87
        },
        {
            _id: 2,
            title: "Flex 15 in Action",
            isbn: "1935182420",
            pageCount: 600,
            orderDate: { $date: "2020-01-03T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 23
        },
        {
            _id: 3,
            title: "Flex 16 in Action",
            isbn: "1935182420",
            pageCount: 600,
            orderDate: { $date: "2019-12-11T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 77
        },
        {
            _id: 4,
            title: "Flex 17 in Action",
            isbn: "1935182420",
            pageCount: 600,
            orderDate: { $date: "2019-10-21T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 11
        },
        {
            _id: 5,
            title: "Flex 18 in Action",
            isbn: "1935182420",
            pageCount: 600,
            orderDate: { $date: "2029-08-23T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 96
        },
        {
            _id: 6,
            title: "Flex 19 in Action",
            isbn: "1935182420",
            pageCount: 600,
            orderDate: { $date: "2019-07-12T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 27
        },
        {
            _id: 7,
            title: "Flex 20 in Action",
            isbn: "1935182420",
            pageCount: 600,
            orderDate: { $date: "2019-05-24T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 55
        }
    ],
    total: 0
};

const cartReducer = (state = initState, action) => {
    //LOAD DATA FROM API
    if (action.type === FETCH_ITEMS_SUCCESS) {
        return {
            ...state,
            loading: false,
            items: action.payload
        };
    }

    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        console.log("INSIDE ADD_TO_CART:", state.items);
        let addedItem = state.items.find(item => item._id === action.id);
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item._id);
        if (existed_item) {
            addedItem.quantity += 1;
            return {
                ...state,
                total: state.total + parseFloat(addedItem.price)
            };
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + parseFloat(addedItem.price);

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            };
        }
    }
    //INSIDE PRODUCT DETAILS
    if (action.type === SHOW_DETAIL) {
        let showItem = state.items.find(item => item._id === action.id);
        return {
            ...state,
            addedItems: [...state.addedItems],
            showItemDetail: showItem,
            total: state.total
        };
    }
    //INSIDE MY ORDERS
    if (action.type === MY_ORDERS) {
        return {
            ...state
        };
    }
    //INSIDE CART COMPONENT
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item._id);
        let new_items = state.addedItems.filter(item => action.id !== item._id);
        let itmRemovePrice = parseFloat(itemToRemove.price);
        //calculating the total
        let newTotal = state.total - itmRemovePrice * itemToRemove.quantity;
        console.log(itemToRemove);
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        };
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item._id === action.id);
        addedItem.quantity += 1;
        let newTotal = state.total + parseFloat(addedItem.price);
        return {
            ...state,
            total: newTotal
        };
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item._id === action.id);
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item._id !== action.id);
            let newTotal = state.total - parseFloat(addedItem.price);
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            };
        } else {
            addedItem.quantity -= 1;
            let newTotal = state.total - parseFloat(addedItem.price);
            return {
                ...state,
                total: newTotal
            };
        }
    }
    //ADD SHIPPING COST
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 5
        };
    }

    if (action.type === "SUB_SHIPPING") {
        return {
            ...state,
            total: state.total - 5
        };
    } else {
        return state;
    }
};

export default cartReducer;
