import React, { useState } from "react";

const ApodContentComponent = ({ apodData }) => {
  if (!apodData) {
    return (
      <div id="apod-content" className="box">
        <p className="has-text-centered">
          Please enter parameters and click "Fetch APOD".
        </p>
      </div>
    );
  }

  return (
    <>
      {apodData.map((data, index) => {
        <div key={index} className="box">
          <figure className="image is-4by3">
            <img src={data.url} alt={data.title}></img>
          </figure>
          <h2 className="title is-4">{data.title}</h2>
          <p>{data.explanation}</p>
        </div>;
      })}
    </>
  );
};

export default ApodContentComponent;
