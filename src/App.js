import products from "./products";
import Navbar from "./components/Navbar";
import CartCointainer from "./components/CartContainer";
import Footer from "./components/Footer";
//import store
import { createStore } from "redux";

//import reducer
import reducer from "./reducer";
import { Provider } from "react-redux";
//initial store :
const initialStore = {
  cart: products,
  total: 105,
  amount: 69,
};

const store = createStore(reducer, initialStore);

function App() {
  //console.log(products);
  return (
    <Provider store={store}>
      <Navbar />
      <CartCointainer />
      <Footer />
    </Provider>
  );
}

export default App;
