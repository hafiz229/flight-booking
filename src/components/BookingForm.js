import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../redux/actions';

const BookingForm = () => {
  const [form, setForm] = useState({ from: '', to: '', date: '', guests: '', ticketClasss: '' });
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookings.length < 3) {
      dispatch(addBooking(form));
      setForm({ from: '', to: '', date: '', guests: '', ticketClasss: '' });
    }
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero inputform" onSubmit={handleSubmit}>
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select className="outline-none px-2 py-2 w-full" name="from" id="from" value={form.from} onChange={handleChange} required>
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select className="outline-none px-2 py-2 w-full" name="to" id="to" value={form.to} onChange={handleChange} required>
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Journey Date</p>
            <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="date" value={form.date} onChange={handleChange} required />
          </div>

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select className="outline-none px-2 py-2 w-full" name="guests" id="guests" value={form.guests} onChange={handleChange} required>
                <option value="" hidden>Please Select</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select className="outline-none px-2 py-2 w-full" name="ticketClasss" id="ticketClass" value={form.ticketClasss} onChange={handleChange} required>
                <option value="" hidden>Please Select</option>
                <option value="Business">Business</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
          </div>

          <button className="addCity" type="submit" id="addCity" disabled={bookings.length >= 3}>
            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;