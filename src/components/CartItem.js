import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { DECREASE, INCREASE, REMOVE } from "../actions";
import { connect } from "react-redux";

const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
}) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>{price}</h4>
        <button type="button" className="remove-btn" onClick={() => remove()}>
          remove
        </button>
      </div>
      <div>
        <FaAngleUp className="amount-btn" onClick={() => increase()} />
        <h4>{amount}</h4>
        <FaAngleDown
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              remove();
            } else {
              decrease();
            }
          }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
