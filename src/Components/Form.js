import React from "react";
import SideInfo from "./SideInfo";
import { useState } from "react";

function Form() {
  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    power: "",
    email: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };
  return (
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            name="name"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            onChange={handleChange}
          />
        </label>
        <label>
          Power:
          <input
            name="power"
            type="text"
            placeholder="Power"
            onChange={handleChange}
          />
        </label>
        <label>
          E-mail Address:
          <input
            name="email"
            type="text"
            placeholder="E-mail Address"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Apply</button>
      </form>
      <SideInfo />
    </div>
  );
}

export default Form;
