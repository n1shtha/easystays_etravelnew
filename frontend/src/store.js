import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newReviewReducer,
  roomDetailsReducer,
  roomReducer,
} from "./reducers/roomReducer";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { listReducer } from "./reducers/listReducer";
import {
  bookingDetailsReducer,
  myBookingsReducer,
  newBookingReducer,
} from "./reducers/bookingReducer";

const reducer = combineReducers({
  rooms: roomReducer,
  roomDetails: roomDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  list: listReducer,
  newBooking: newBookingReducer,
  myBookings: myBookingsReducer,
  bookingDetails: bookingDetailsReducer,
  newReview: newReviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  list: {
    listItems: localStorage.getItem("listItems")
      ? JSON.parse(localStorage.getItem("listItems"))
      : [],
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
