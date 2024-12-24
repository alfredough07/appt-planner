import React from "react";

export const ContactPicker = ({contacts,onChange, value, name }) => {
  return (
    <>
    <select value={value} onChange={onChange} name={name}>
      <option value="">No Contact Selected</option>
      {
        contacts.map((contact, index) =>(
          <option key={index} value={contact.name}>{contact.name}</option>
        ))
      }
    </select>
    </>
  );
};
