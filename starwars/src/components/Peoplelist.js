import React from "react";
import People from "./People";



function Peoplelist (props){
// const Peoplelist = props => {
    
  return (
    <div>
      
      {props.data.map(character => (
        <People key={character} data={character} />
      ))}
    </div>

  );
};

export default Peoplelist;