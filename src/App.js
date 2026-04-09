import React, { useState } from "react";
import DateInputComponent from "./components/DateInputComponent.js";
import StyledComponent from "./components/StyledComponent.js";
import SculptureListComponent from "./components/SculptureListComponent.js";
import FormComponent from "./components/FormComponent.js";
import AccordionComponent from "./components/AccordionComponent.js";
import ApodFormComponent from "./components/ApodFormComponent.js";
import ApodContentComponent from "./components/ApodContentComponent.js";

function App() {
  // Show components state
  const [dateIsVisible, setDateIsVisible] = useState(false);
  const [styleIsVisible, setStyleIsVisible] = useState(false);
  const [sculptureIsVisible, setSculptureIsVisible] = useState(false);
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [accordionIsVisible, setAccordionIsVisible] = useState(false);
  const [apodIsVisible, setApodIsVisible] = useState(false);

  // Components state
  const [date, setDate] = useState("");
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");

  // NASA APOD API call
  const fetchApodData = async () => {
    const date = document.getElementById("date").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const count = document.getElementById("count").value;
    const thumbs = document.getElementById("thumbs").checked;

    const apiKey = "E5D0xT1ZLCAUbhfmhJj5RZySfvXIaS6uSaR3VCfh";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    if (date) {
      apiUrl += `&date=${date}`;
    }
    if (startDate) {
      apiUrl += `&start_date=${startDate}`;
    }
    if (endDate) {
      apiUrl += `&end_date=${endDate}`;
    }
    if (count) {
      apiUrl += `&count=${count}`;
    }
    if (thumbs) {
      apiUrl += `&thumbs=true`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApodData(Array.isArray(data) ? data : [data]);
    } catch (err) {
      setError(`Error fetching data: ${err.message}`);
      console.log(error);
    }
  };

  // Handle show component functions
  const handleDateInputComponent = () => {
    setDateIsVisible(!dateIsVisible);
    setStyleIsVisible(false);
    setSculptureIsVisible(false);
    setFormIsVisible(false);
    setAccordionIsVisible(false);
    setApodIsVisible(false);
  };

  const handleStyledComponent = () => {
    setStyleIsVisible(!styleIsVisible);
    setDateIsVisible(false);
    setSculptureIsVisible(false);
    setFormIsVisible(false);
    setAccordionIsVisible(false);
    setApodIsVisible(false);
  };

  const handleSculptureComponent = () => {
    setSculptureIsVisible(!sculptureIsVisible);
    setDateIsVisible(false);
    setStyleIsVisible(false);
    setFormIsVisible(false);
    setAccordionIsVisible(false);
    setApodIsVisible(false);
  };

  const handleFormComponent = () => {
    setFormIsVisible(!formIsVisible);
    setDateIsVisible(false);
    setStyleIsVisible(false);
    setSculptureIsVisible(false);
    setAccordionIsVisible(false);
    setApodIsVisible(false);
  };

  const handleAccordionComponent = () => {
    setAccordionIsVisible(!accordionIsVisible);
    setDateIsVisible(false);
    setStyleIsVisible(false);
    setSculptureIsVisible(false);
    setFormIsVisible(false);
    setApodIsVisible(false);
  };

  const handleApodComponent = () => {
    setApodIsVisible(!apodIsVisible);
    setDateIsVisible(false);
    setStyleIsVisible(false);
    setSculptureIsVisible(false);
    setFormIsVisible(false);
    setAccordionIsVisible(false);
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
      <div className="App">
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
          <button
            onClick={handleFormComponent}
            style={showComponentButtonStyle}
          >
            {formIsVisible ? "Hide Input Component" : "Show Input Component"}
          </button>
          <button
            onClick={handleAccordionComponent}
            style={showComponentButtonStyle}
          >
            {accordionIsVisible
              ? "Hide Accordion Component"
              : "Show Accordion Component"}
          </button>
          <button
            onClick={handleApodComponent}
            style={showComponentButtonStyle}
          >
            {apodIsVisible ? "Hide APOD Component" : "Show APOD Component"}
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
          {formIsVisible && <FormComponent />}
          {accordionIsVisible && <AccordionComponent />}
          {apodIsVisible && (
            <>
              <ApodFormComponent fetchApodData={fetchApodData} />
              <ApodContentComponent apodData={apodData} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
