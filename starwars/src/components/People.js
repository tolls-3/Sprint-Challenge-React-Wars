import React from "react";
import styled from "styled-components";

function People(props) {
  const { name, height, mass, birth_year, gender, skin_color } = props.data;
  return (
    <SyledDivPo className="stylePo">
      <h2>
        <span>Name:</span> {name}
      </h2>
      <p>
        <span>Height:</span> {height}
      </p>
      <p>
        <span>Mass:</span> {mass}
      </p>
      <p>
        <span>Birth Year:</span> {birth_year}
      </p>
      <p>
        <span>Gender:</span> {gender}
      </p>
      <p>
        <span>Skin Color:</span> {skin_color}
      </p>
    </SyledDivPo>
  );
}

export default People;

const SyledDivPo = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  border: 2px solid red;
  width: 30%;
  margin: 50px auto;
  padding: 50px 210px;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;
`;
