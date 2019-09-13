import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';


const peopleApi = 'https://swapi.co/api/people/';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [currentState, updateCurrentState] = useState({
    character:[]
  })

  useEffect(() =>{
    axios.get(peopleApi)
        .then(res => {
          // debugger;
          updateCurrentState({
          character:res.data.results
          });
          
        })
  
        .catch(error => {
          alert(`GET  403 (Forbidden)`);
          
        });
    }, []); 

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
