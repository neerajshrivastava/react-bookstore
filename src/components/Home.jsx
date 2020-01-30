import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./actions/cartActions";
import { showDetail } from "./actions/cartActions";
import bookImg from "./../images/bookicon.png";
import { fetchData } from "./actions/cartActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 20,
      error: false
    };
    this.showMore = this.showMore.bind(this);
  }
  //Show more function load 20 records at atime.
  showMore() {
    this.setState(prev => {
      return { visible: prev.visible + 20 };
    });
  }
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
    let itemList = this.props.items.slice(0, this.state.visible).map(item => {
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
        {this.state.visible < this.props.items.length && (
          <div className="aligncenter">
            <button onClick={this.showMore} type="button" className="showMore">
              Show More
            </button>
          </div>
        )}
      </div>
    );
  }
}
//map state to properties
const mapStateToProps = state => {
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
