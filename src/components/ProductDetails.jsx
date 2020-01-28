import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart} from './actions/cartActions'
import bookImg from './../images/bookicon.png'

class ProductDetails extends Component{

    handleAddToCart = (id) => {
        this.props.addToCart(id);
    }

    handleBuyNow = (id) => {
        this.props.addToCart(id);
        this.props.history.push("/cart");
    }
   
    render(){
            return(
                <div className="container">
                    <h5>You have selected:</h5>
                    <div className="itemDetail" key={this.props.showItem._id}>
                                <div className="itemDetailLeft"> 
                                    <img src={bookImg} alt={bookImg} className="resbookimg"/>
                                </div>
                                <div className="itemDetailRight">
                                    <span className="itemTitle">{this.props.showItem.title}</span>
                                    <p><b>Price: {this.props.showItem.price}$</b></p> 
                                    <p><b>Author Name: {this.props.showItem.authors.join()}</b></p>
                                    <p><b>Page Count: {this.props.showItem.pageCount}</b></p>
                                    <p><b>ISBN: {this.props.showItem.isbn}</b></p>
                                    <p>{this.props.showItem.desc}</p>
                                    <p><button className="waves-effect waves-light red" onClick={() => { this.handleAddToCart(this.props.showItem._id) }}>Add to Cart</button>
                                    <button className="waves-effect waves-light red" onClick={() => { this.handleBuyNow(this.props.showItem._id) }}>Buy Now</button></p>
                                    <div>{this.props.showItem.longDescription}</div>
                                </div>
                    </div>
                </div>
                
            )
       
    }
}

const mapStateToProps = (state)=>{
    return{
        showItem: state.showItemDetail
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails)