# Flight Booking App

This project is a simple flight booking application built with React and Redux. The app allows users to book flights by selecting the departure location, destination, journey date, number of guests, and class. The bookings are managed using Redux for state management.

## Features
- Add a flight booking with details including destination, date, number of guests, and class.
- Display a list of booked flights.
- Remove a booking from the list.
- Limit the number of bookings to a maximum of 3.

## Technologies Used
- React.js
- Redux
- Tailwind CSS

## Project Structure
```
.
├── src
│   ├── components
│   │   ├── BookingForm.js
│   │   ├── BookingTable.js
│   ├── redux
│   │   ├── actions.js
│   │   ├── bookingReducer.js
│   │   ├── store.js
│   ├── App.js
│   ├── index.js
├── public
│   ├── img
│   │   ├── flight_logo.png
│   │   ├── icons
│   │   │   ├── Frame.svg
│   │   │   ├── Vector (1).svg
│   │   │   ├── Vector (3).svg
│   ├── index.html
├── package.json
├── README.md
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/hafiz229/flight-booking
   ```
2. Navigate into the project directory:
   ```sh
   cd flight-booking-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Components
### `BookingForm.js`
- Handles flight booking form submission.
- Uses React state to manage form inputs.
- Dispatches the `addBooking` action to store the booking details.
- Limits the booking count to a maximum of 3.

### `BookingTable.js`
- Displays the list of booked flights.
- Fetches data from Redux store.
- Allows users to remove a booking using the `removeBooking` action.

## Redux State Management
### `actions.js`
Defines action types and action creators for adding and removing bookings.
```js
export const ADD_BOOKING = 'ADD_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const addBooking = (booking) => ({ type: ADD_BOOKING, payload: booking });
export const removeBooking = (index) => ({ type: REMOVE_BOOKING, payload: index });
```

### `bookingReducer.js`
Handles the Redux state updates based on the dispatched actions.
```js
const initialState = { bookings: [] };
const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return { ...state, bookings: [...state.bookings, action.payload] };
    case REMOVE_BOOKING:
      return { ...state, bookings: state.bookings.filter((_, index) => index !== action.payload) };
    default:
      return state;
  }
};
export default bookingReducer;
```

### `store.js`
Creates a Redux store with the `bookingReducer`.
```js
import { createStore } from "redux";
import bookingReducer from "./bookingReducer";
const store = createStore(bookingReducer);
export default store;
```

## Running the Project
Once the development server starts, open `http://localhost:3000` in your browser to see the application.

## Future Enhancements
- Add validation and error handling.
- Implement a backend API for storing booking data.
- Add user authentication.

## License
This project is open-source and available under the [MIT License](LICENSE).

