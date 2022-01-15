import logo from "../images/logo.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
const Navbar = ({ amount }) => {
  return (
    <nav>
      <div className="nav-header">
        <img src={logo} alt="logo" className="logo" />
        <span>React Redux App Project</span>
        <div className="shopping-cart">
          <FaShoppingCart className="cart" />
          <div className="amount-container">
            <p className="amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return { amount: state.amount };
};

export default connect(mapStateToProps)(Navbar);
