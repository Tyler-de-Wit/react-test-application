import React from "react";

function DateInputComponent({ newDate = "", onDateChange }) {
  const inputStyle = {
    margin: "5px",
    padding: "8px",
    border: "1px solid #0f0",
    borderRadius: "8px",
  };

  const handleChange = (event) => {
    onDateChange(event.target.value);
  };

  return (
    <>
      <input
        className="input"
        type="date"
        style={inputStyle}
        onChange={handleChange}
      />
      <p>{newDate}</p>
    </>
  );
}

export default DateInputComponent;
