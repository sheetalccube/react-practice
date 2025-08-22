import { connect } from "react-redux";
// connect is a higher-order component (HOC) provided by the React-Redux library.
//  It takes a component as an argument and returns a new component that is connected to the Redux store.
import Home from "@/components/ProductCart/Home";
import type { Product } from "@/components/ProductCart/marketplace";
import { addToCart } from "@/store/Services/Actions/action";

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data: Product) => dispatch(addToCart(data)),
});
// component to store
// this is used to connect the Redux store to the component.
// dispatching actions to the store is done using the dispatch function provided by the Redux store.

// state to prop is used to map the state from the Redux store to the props of the component.
// store to componen
const mapStateToProps = (state) => ({
  cardData: state.cartItemReducer.cartData,
});

// connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
