import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "./actions/cartActions";
import Recipe from "./Recipe";
import bookImg from "./../images/bookicon.png";
class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item._id}>
            <div className="item-img">
              <img src={bookImg} alt={bookImg} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="addremovebtns">
                <span
                  onClick={() => {
                    this.handleAddQuantity(item._id);
                  }}
                >
                  <Link to="/cart">+</Link>
                </span>
                <span
                  onClick={() => {
                    this.handleSubtractQuantity(item._id);
                  }}
                >
                  <Link to="/cart">-</Link>
                </span>
              </div>
              <button
                className="waves-effect waves-light btn pink remove"
                onClick={() => {
                  this.handleRemove(item._id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <div className="cartLeftPanel">
            <h5>Shipping Address</h5>
            <textarea
              className="shipAddTxtArea"
              id="subject"
              placeholder="Shipping Address.."
            ></textarea>
            <p>
              <button className="marginR20 waves-effect waves-light btn pink remove">
                Save Address
              </button>
              <button className="marginR20 waves-effect waves-light btn pink remove">
                Edit Address
              </button>
            </p>
          </div>
          <div className="cartRightPanel">
            <h5>Shopping Bag</h5>
            <ul className="collection">{addedItems}</ul>
            <Recipe />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
