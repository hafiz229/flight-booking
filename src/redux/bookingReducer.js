import { ADD_BOOKING, REMOVE_BOOKING } from './actions';

const initialState = {
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case REMOVE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default bookingReducer;