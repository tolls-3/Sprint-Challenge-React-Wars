import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Peoplelist from "./components/Peoplelist";

const peopleApi = "https://swapi.co/api/people/";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [currentState, updateCurrentState] = useState({
    character: []
  });

  useEffect(() => {
    axios
      .get(peopleApi)
      .then(res => {
        updateCurrentState({
          character: res.data.results
        });
      })

      .catch(error => {
        alert(`GET  403 (Forbidden)`);
      });
  }, []);

  return (
    <SyledDivApp>
      <StyledHeader>React Wars</StyledHeader>
      <Peoplelist data={currentState.character} />
    </SyledDivApp>
  );
};

export default App;

const SyledDivApp = styled.div`
  text-align: center;
  max-width: 1440px;
  width: 99%;
  margin: 0 auto;
  display:flex;
  flex-direction:row;
`;

const StyledHeader = styled.h1`
  position: fixed;
  top: 0px;
  width: 96%;
  font-family: Georgia, sans-serif;   
  text-transform: uppercase;
  font-size: 4rem;
  background-color: rgb(233, 52, 6);
  padding: 20px;
  color: black;
  margin-right: 2px;
`;
