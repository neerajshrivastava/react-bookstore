import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./actions/cartActions";
import { showDetail } from "./actions/cartActions";
import bookImg from "./../images/bookicon.png";
import { fetchData } from "./actions/cartActions";

class Home extends Component {
  //Call action to load data form https request
  componentDidMount() {
    this.props.onFetchData();
  }
  //Add to cart
  handleAddToCart = id => {
    this.props.addToCart(id);
  };
  // Show product details
  handleProductDetail = id => {
    this.props.showDetail(id);
  };
  //Render Home Page
  render() {
    console.log("INSIDE HOME render :", this.props);
    let itemList = this.props.items.map(item => {
      return (
        <div className="card" key={item._id}>
          <div
            onClick={() => {
              this.handleProductDetail(item._id);
            }}
          >
            <Link to="/productdetails">
              <img src={bookImg} className="resbookimg"></img>
            </Link>
          </div>
          <div className="rsptext">
            <h1 className="itmTtl">{item.title}</h1>
            <p className="itmPrice">{item.price}$</p>
            <p>Some detail about this book.</p>
            <p>
              <button
                to="/"
                className="waves-effect waves-light red"
                onClick={() => {
                  this.handleAddToCart(item._id);
                }}
              >
                Add to Cart
              </button>
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h3 className="center">Books</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
//map state to properties
const mapStateToProps = state => {
  console.log("INSIDE HOME mapStateToProps :", state);
  return {
    items: state.items
  };
};
//dispatch action
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    },
    showDetail: id => {
      dispatch(showDetail(id));
    },
    onFetchData: () => dispatch(fetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
