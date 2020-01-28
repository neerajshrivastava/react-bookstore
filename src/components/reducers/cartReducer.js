import {
    ADD_TO_CART,
    SHOW_DETAIL,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY,
    ADD_SHIPPING,
    MY_ORDERS
} from "../actions/action-types/cart-actions";

const initState = {
    items: [
        {
            _id: 1,
            title: "Unlocking Android",
            isbn: "1933988673",
            pageCount: 416,
            publishedDate: { $date: "2009-04-01T00:00:00.000-0700" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
            longDescription:
                "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation \u0026 multimedia      * Sample Applications  ",
            status: "PUBLISH",
            authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
            categories: ["Open Source", "Mobile"],
            price: 100
        },
        {
            _id: 2,
            title: "Android in Action, Second Edition",
            isbn: "1935182722",
            pageCount: 592,
            publishedDate: { $date: "2011-01-14T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
            longDescription:
                "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
            status: "PUBLISH",
            authors: ["W. Frank Ableson", "Robi Sen"],
            categories: ["Java"],
            price: 80
        },
        {
            _id: 3,
            title: "Flex 3 in Action",
            isbn: "1933988746",
            pageCount: 576,
            publishedDate: { $date: "2009-02-02T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
            longDescription:
                "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!    Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  The expert authors of Flex 3 in Action have one goal   to help you get down to business with Flex 3. Fast.    Many Flex books are overwhelming to new users   focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.",
            status: "PUBLISH",
            authors: ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
            categories: ["Internet"],
            price: 50
        },
        {
            _id: 4,
            title: "Flex 4 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 19
        },
        {
            _id: 5,
            title: "Flex 5 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 30
        },
        {
            _id: 6,
            title: "Flex 6 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 20
        },
        {
            _id: 7,
            title: "Flex 7 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 25
        },
        {
            _id: 8,
            title: "Flex 8 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 34
        },
        {
            _id: 9,
            title: "Flex 9 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 29
        },
        {
            _id: 10,
            title: "Flex 10 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 22
        },
        {
            _id: 11,
            title: "React in Action",
            isbn: "1933988673",
            pageCount: 416,
            publishedDate: { $date: "2009-04-01T00:00:00.000-0700" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
            status: "PUBLISH",
            authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
            categories: ["Open Source", "Mobile"],
            price: 19
        },
        {
            _id: 12,
            title: "Android Advance, Second Edition",
            isbn: "1935182722",
            pageCount: 592,
            publishedDate: { $date: "2011-01-14T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
            status: "PUBLISH",
            authors: ["W. Frank Ableson", "Robi Sen"],
            categories: ["Java"],
            price: 87
        },
        {
            _id: 13,
            title: "Flex 13 in Action",
            isbn: "1933988746",
            pageCount: 576,
            publishedDate: { $date: "2009-02-02T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
            categories: ["Internet"],
            price: 34
        },
        {
            _id: 14,
            title: "Flex 14 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 87
        },
        {
            _id: 15,
            title: "Flex 15 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 23
        },
        {
            _id: 16,
            title: "Flex 16 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 77
        },
        {
            _id: 17,
            title: "Flex 17 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 11
        },
        {
            _id: 18,
            title: "Flex 18 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 96
        },
        {
            _id: 19,
            title: "Flex 19 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 27
        },
        {
            _id: 20,
            title: "Flex 20 in Action",
            isbn: "1935182420",
            pageCount: 600,
            publishedDate: { $date: "2010-11-15T00:00:00.000-0800" },
            thumbnailUrl:
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
            status: "PUBLISH",
            authors: ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
            categories: ["Internet"],
            price: 55
        }
    ],
    addedItems: [],
    showItemDetail: "",
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
/*const ExtractItemsAction = () => (dispatch) => {
    distpatch ({type: ITEMS_REQUESTED});
    const url = 'https://api.example.com/api/v1.0/item';
    fetch(url, {
        method: "get"
    })
    .then(res => res.json())
    .then(response => {
        dispatch({type: ITEMS_RECEIVED, items: response.data});
    });
}*/
const cartReducer = (state = initState, action) => {
    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item._id === action.id);
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item._id);
        if (existed_item) {
            addedItem.quantity += 1;
            return {
                ...state,
                total: state.total + addedItem.price
            };
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price;

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

        //calculating the total
        let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
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
        let newTotal = state.total + addedItem.price;
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
            let newTotal = state.total - addedItem.price;
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            };
        } else {
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price;
            return {
                ...state,
                total: newTotal
            };
        }
    }

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
