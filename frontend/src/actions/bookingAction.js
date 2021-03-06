import {
  CREATE_BOOKING_REQUEST,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAIL,
  MY_BOOKINGS_REQUEST,
  MY_BOOKINGS_SUCCESS,
  MY_BOOKINGS_FAIL,
  BOOKING_DETAILS_REQUEST,
  BOOKING_DETAILS_SUCCESS,
  BOOKING_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/bookingConstant";

import axios from "axios";

// Create Booking
export const createBooking = (booking) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BOOKING_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/booking/new", booking, config);

    dispatch({ type: CREATE_BOOKING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_BOOKING_FAIL,
      payload: error.response.data.message,
    });
  }
};

// My Bookings
export const myBookings = () => async (dispatch) => {
  try {
    dispatch({ type: MY_BOOKINGS_REQUEST });

    const { data } = await axios.get("/api/v1/bookings/me");

    dispatch({ type: MY_BOOKINGS_SUCCESS, payload: data.bookings });
  } catch (error) {
    dispatch({
      type: MY_BOOKINGS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Bookings details
export const getBookingDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOOKING_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/booking/${id}`);

    dispatch({ type: BOOKING_DETAILS_SUCCESS, payload: data.booking });
  } catch (error) {
    dispatch({
      type: BOOKING_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
