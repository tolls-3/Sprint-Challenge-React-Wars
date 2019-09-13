import React from "react";

const Buttons = ({ next, previous, action }) => (
  <div>
    <button onClick={() => action(previous)}>Previous</button>
    <button onClick={() => action(next)}>Next</button>
  </div>
);

export default Buttons;