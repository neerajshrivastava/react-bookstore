import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        { _id:1, title:"Unlocking Android", isbn:"1933988673", pageCount:416, publishedDate:{ "$date":"2009-04-01T00:00:00.000-0700" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg", status:"PUBLISH", authors:[ "W. Frank Ableson", "Charlie Collins", "Robi Sen" ], categories:[ "Open Source", "Mobile" ], price:"100" }, 
        { _id:2, title:"Android in Action, Second Edition", isbn:"1935182722", pageCount:592, publishedDate:{ "$date":"2011-01-14T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg", status:"PUBLISH", authors:[ "W. Frank Ableson", "Robi Sen" ], categories:[ "Java" ], price:"80" }, 
        { _id:3, title:"Flex 3 in Action", isbn:"1933988746", pageCount:576, publishedDate:{ "$date":"2009-02-02T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed with Jon Hirschi", "Faisal Abid" ], categories:[ "Internet" ], price:"50" }, 
        { _id:4, title:"Flex 4 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"19" },
        { _id:5, title:"Flex 5 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"30" },
        { _id:6, title:"Flex 6 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"20" },
        { _id:7, title:"Flex 7 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"25" },
        { _id:8, title:"Flex 8 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"34" },
        { _id:9, title:"Flex 9 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"29" },
        { _id:10, title:"Flex 10 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"22" },
        { _id:11, title:"React in Action", isbn:"1933988673", pageCount:416, publishedDate:{ "$date":"2009-04-01T00:00:00.000-0700" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg", status:"PUBLISH", authors:[ "W. Frank Ableson", "Charlie Collins", "Robi Sen" ], categories:[ "Open Source", "Mobile" ], price:"19" }, 
        { _id:12, title:"Android Advance, Second Edition", isbn:"1935182722", pageCount:592, publishedDate:{ "$date":"2011-01-14T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg", status:"PUBLISH", authors:[ "W. Frank Ableson", "Robi Sen" ], categories:[ "Java" ], price:"87" }, 
        { _id:13, title:"Flex 13 in Action", isbn:"1933988746", pageCount:576, publishedDate:{ "$date":"2009-02-02T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed with Jon Hirschi", "Faisal Abid" ], categories:[ "Internet" ], price:"34" }, 
        { _id:14, title:"Flex 14 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"87" },
        { _id:15, title:"Flex 15 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"23" },
        { _id:16, title:"Flex 16 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"77" },
        { _id:17, title:"Flex 17 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"11" },
        { _id:18, title:"Flex 18 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"96" },
        { _id:19, title:"Flex 19 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"27" },
        { _id:20, title:"Flex 20 in Action", isbn:"1935182420", pageCount:600, publishedDate:{ "$date":"2010-11-15T00:00:00.000-0800" }, thumbnailUrl:"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg", status:"PUBLISH", authors:[ "Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks" ], categories:[ "Internet" ], price:"55" }
        
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item._id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item._id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item._id)
        let new_items = state.addedItems.filter(item=> action.id !== item._id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item._id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item._id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item._id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
