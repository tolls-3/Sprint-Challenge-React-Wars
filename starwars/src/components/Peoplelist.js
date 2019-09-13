import React from "react";
import People from "./People";
import styled from 'styled-components';


function Peoplelist (props){    
  return (
    <SyledDivP>
      
      {props.data.map(character => (
        <People key={character} data={character} />
      ))}
    </SyledDivP>

  );
};

export default Peoplelist;

const SyledDivP = styled.div`
    /* border:2px solid blue;; */
    margin:80px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
`;