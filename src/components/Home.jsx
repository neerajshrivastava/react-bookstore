import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import bookImg from './../images/bookicon.png'
class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                        <div className="card" key={item._id}>
                            <div>
                                <img src={bookImg} className="resbookimg"></img>
                            </div>
                            <div className="rsptext">
                                <h1 className="h1txt">{item.title}</h1>
                                <p className="price">{item.price}$</p>
                                <p>Some detail about this book.</p>
                                <p><button to="/" className="waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}>Add to Cart</button></p>
                            </div>
                        </div>
                    )
            })
                return(
            <div className="container">
                        <h3 className="center">Books</h3>
                        <div className="box">
                            {itemList}
                        </div>
                    </div>
                    )
                }
            }
const mapStateToProps = (state)=>{
    return {
                        items: state.items
                  }
                }
const mapDispatchToProps= (dispatch)=>{
    
    return{
                        addToCart: (id)=>{dispatch(addToCart(id))}
                    }
                }
                
export default connect(mapStateToProps,mapDispatchToProps)(Home)