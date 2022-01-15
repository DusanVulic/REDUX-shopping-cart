import CartItem from "./CartItem";
import { connect } from "react-redux";

import { CLEAR_CART, GET_TOTALS } from "../actions";
import { useEffect } from "react";

const CartCointainer = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  });

  if (cart.length === 0) {
    return (
      <section className="cart-container">
        <header>
          <h2>your cart </h2>
          <p>is currently empty</p>
          <hr />
          <p style={{ marginTop: "1rem" }}>please refresh the page</p>
        </header>
      </section>
    );
  }

  return (
    <section className="cart-container">
      <header>
        <h2>your cart</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>total</h4> <span>${total}</span>
        </div>
        <button
          type="button"
          className="clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { cart, total } = state;
  return { cart, total };
  //return { cart: state.cart, total: state.total };
};

export default connect(mapStateToProps)(CartCointainer);
