import React, { useState } from "react";

const ApodFormComponent = ({ fetchApodData }) => {
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [count, setCount] = useState("");
  const [thumbs, setThumbs] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const parameters = {};

    if (date) parameters.date = date;
    if (startDate) parameters.start_date = startDate;
    if (endDate) parameters.end_date = endDate;
    if (count) parameters.count = count;
    if (thumbs) parameters.thumbs = thumbs;

    fetchApodData(parameters);
    console.log(parameters);
  };

  return (
    <form className="section" onSubmit={handleSubmit}>
      <div className="container">
        <h1 className="title">NASA Astronomy Picture of the Day</h1>

        <div className="field">
          <label className="label">Date (YYYY-MM-DD)</label>
          <div className="control">
            <input
              id="date"
              className="input"
              type="date"
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Start Date (YYYY-MM-DD)</label>
          <div className="control">
            <input
              id="start_date"
              className="input"
              type="date"
              onChange={(event) => setStartDate(event.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">End Date (YYYY-MM-DD)</label>
          <div className="control">
            <input
              id="end_date"
              className="input"
              type="date"
              onChange={(event) => setEndDate(event.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Count</label>
          <div className="control">
            <input
              id="count"
              className="input"
              type="number"
              min="1"
              onChange={(event) => setCount(event.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Include Video Thumbnails</label>
          <div className="control">
            <input
              id="thumbs"
              className="checkbox"
              type="checkbox"
              onChange={(event) => setThumbs(event.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button id="fetch-apod" className="button is-link">
              Fetch APOD
            </button>
          </div>
        </div>

        {/* <div id="apod-content" className="box">
          <p className="has-text-centered">
            Please enter parameters and click "Fetch APOD".
          </p>
        </div> */}
      </div>
    </form>
  );
};

export default ApodFormComponent;
