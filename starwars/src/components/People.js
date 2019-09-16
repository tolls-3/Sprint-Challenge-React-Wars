import React from "react";
import styled from "styled-components";

function People(props) {
  const { name, height, mass, birth_year, gender, skin_color } = props.data;
  return (
    <SyledDivPo className="stylePo">
      <h2>
        Name: {name}
      </h2>
      <p>
        Height: {height}
      </p>
      <p>
        Mass:{mass}
      </p>
      <p>
        Birth Year: {birth_year}
      </p>
      <p>
        Gender: {gender}
      </p>
      <p>
        Skin Color: {skin_color}
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
