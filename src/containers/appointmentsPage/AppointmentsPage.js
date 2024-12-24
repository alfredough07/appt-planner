import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { Tile } from "../../components/tile/Tile";

export const AppointmentsPage = ({
  appointments,
  contacts,
  setAppointments,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

    setAppointments((prev) => [...prev, { name, contact, date, time }]);
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
          <AppointmentForm
            name={name}
            contacts={contacts}
            date={date}
            time={time}
            setName={setName}
            setContact={setContact}
            setDate={setDate}
            setTime={setTime}
            handleSubmit={handleSubmit}
          />
         

      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={appointments} />
      </section>
    </div>
  );
};
