import { Provider } from "react-redux";
import store from "./redux/store";
import BookingForm from "./components/BookingForm";
import BookingTable from "./components/BookingTable";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header id="header">
          <div className="container">
            <img src="./img/flight_logo.png" alt="logo" className="logo" />
            <div className="flex items-center">
              <a className="text-white min-w-[50px] font-medium" href="#home">Home</a>
              <button className="log-btn btn">Login</button>
            </div>
          </div>
        </header>
        <section>
          <BookingForm />
          <BookingTable />
        </section>
      </div>
    </Provider>
  );
}

export default App;
