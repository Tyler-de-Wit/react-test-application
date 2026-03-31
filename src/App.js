import React, { useState } from "react";
import DateInputComponent from "./components/DateInputComponent.js";
import StyledComponent from "./components/StyledComponent.js";
import SculptureListComponent from "./components/SculptureListComponent.js";

function App() {
  const [date, setDate] = useState("");
  const [dateIsVisible, setDateIsVisible] = useState(false);
  const [styleIsVisible, setStyleIsVisible] = useState(false);
  const [sculptureIsVisible, setSculptureIsVisible] = useState(false);

  const handleDateInputComponent = () => {
    setDateIsVisible(!dateIsVisible);
    setStyleIsVisible(false);
    setSculptureIsVisible(false);
  };

  const handleStyledComponent = () => {
    setStyleIsVisible(!styleIsVisible);
    setDateIsVisible(false);
    setSculptureIsVisible(false);
  };

  const handleSculptureComponent = () => {
    setSculptureIsVisible(!sculptureIsVisible);
    setDateIsVisible(false);
    setStyleIsVisible(false);
  };

  const showComponentButtonStyle = {
    margin: "0.5rem",
    padding: "1rem",
    border: "1px solid #000",
    borderRadius: "8px",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="componentButtons">
        <button
          onClick={handleDateInputComponent}
          style={showComponentButtonStyle}
        >
          {dateIsVisible ? "Hide Date Component" : "Show Date Component"}
        </button>
        <button
          onClick={handleStyledComponent}
          style={showComponentButtonStyle}
        >
          {styleIsVisible ? "Hide Styled Component" : "Show Styled Component"}
        </button>
        <button
          onClick={handleSculptureComponent}
          style={showComponentButtonStyle}
        >
          {sculptureIsVisible
            ? "Hide Sculpture Component"
            : "Show Sculpture Component"}
        </button>
      </div>
      <div className="componentArea">
        {dateIsVisible && (
          <DateInputComponent newDate={date} onDateChange={setDate} />
        )}
        {styleIsVisible && (
          <StyledComponent message="This is a styled section with animation" />
        )}
        {sculptureIsVisible && <SculptureListComponent />}
      </div>
    </>
  );
}

export default App;
