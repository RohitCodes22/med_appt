import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber,dateofappointement });
      setName('');
      setPhoneNumber('');
      setdateofappointement('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <label htmlFor="dateofappointement">Date of Appointment: </label>
          <input 
            type='date'
            id= "dateofappointement"
            value={dateofappointement} 
            onChange={(e) => setdateofappointement(e.target.value)}
            required
            />

        <label htmlFor="timeSlot">Book Time Slot:</label>
        <select
        id="timeSlot"
        value={timeSlot}
        onChange={(e) => handleSlotSelection(e.target.value)}
        >
        <option value="">Select a time slot</option>
      </select>
      <br />
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm ;