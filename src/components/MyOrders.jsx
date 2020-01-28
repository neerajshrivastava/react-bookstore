import React, { Component } from 'react';
import { connect } from 'react-redux'
import bookImg from './../images/bookicon.png'
import Moment from 'react-moment';
class MyOrders extends Component{

    render(){
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                             <li className="collection-item avatar" key={item._id}>
                                    <div> 
                                        <div>
                                        <span className="myordLeftTxt"><b>Order Placed: <Moment format="DD MMMM, YYYY">{item.orderDate.$date}</Moment></b></span><span className="myordRightTxt"><b>Status: Deliverd</b></span>
                                        </div> 
                                        <div> 
                                            <div className="item-img itemDetailLeft"> 
                                                <img src={bookImg} alt={bookImg} className=""/>
                                            </div>
                                            <div className="item-desc itemDetailRight">
                                                <span className="title">{item.title}</span>
                                                <p>{item.desc}</p>
                                                <p><b>Auther Name: {item.authors.join()}</b></p>
                                                <p><b>Price: {item.price}$</b></p> 
                                            </div>
                                        </div>
                                    </div>
                                </li>
                         
                    )
                })
            ):
             (
                <p>Place your first order</p>
             )
       return(
            <div className="container">
                <div className="cart">
                     <div>
                        <h5>My Orders</h5>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div>
                </div> 
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.myOrders
    }
}
export default connect(mapStateToProps)(MyOrders)