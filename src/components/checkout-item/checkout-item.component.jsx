import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import "./checkout.styles.scss";

const CheckoutItem = ({
  cartItem,
  clearItem,
  removeItem,
  addItem,
  cartItem: { name, imageUrl, price, quantity }
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(cartItem)} className="arrow">
          <span>&#10094;</span>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          <span>&#10095;</span>
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItem(cartItem)} className="remove-button">
        <span>&#10005;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
