import React from "react";


function People (props){
// const People = props => {

const { name, height, mass, birth_year, gender,skin_color } = props.data;
  return (
    <div >
      <h2><span>Name:</span> {name}</h2>
      <p><span>Height:</span> {height}</p>
      <p><span>Mass:</span> {mass}</p>
      <p><span>Birth Year:</span> {birth_year}</p>
      <p><span>Gender:</span> {gender}</p>
      <p><span>Skin Color:</span> {skin_color}</p>
    </div>
  );
};

export default People;