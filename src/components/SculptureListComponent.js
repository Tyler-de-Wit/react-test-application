import React, { useState } from "react";
import sculptureList from "../assets/data/sculptureList";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function SculptureListComponent() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    // Loop back to the first sculpture
    // index = 11 and sculptureList.length = 12, (11 + 1) % 12 results in 0, thus looping back to the first sculpture.
    // index = 0 and sculptureList.length = 12, (0 + 1) % 12 results in 1, moving to the next sculpture.
    // index = 5 and sculptureList.length = 12, (5 + 1) % 12 results in 6.
    setIndex((index + 1) % sculptureList.length);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <Header title="Develop. Preview. Ship." />
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

export default SculptureListComponent;
