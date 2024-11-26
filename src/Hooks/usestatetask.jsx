import React, {useState ,useEffect} from "react";

const MyComponent = () => {
  // State variables
  const [state1, setState1] =  useState('HTML');

  const [state2, setState2] = useState('CSS');

  const [state3, setState3] = useState('BOOTSTRAP');

  const [state4, setState4] = useState('JAVASCRIPT');

  const [state5, setState5] = useState('REACT');

  // Update function

  const updateState1 = () =>
    setState1('html developer');

  const updateState2 = () =>
    setState2('css developer');

  const updateState3 = () =>
    setState3('booststrap developer');

  const updateState4 = () =>
    setState4('javascript developer');

  const updateState5 = () =>
    setState5('react developer');
  useEffect( () => {setTimeout( () => {
    alert("This is alert!..");},1000)},[state1,state2,state3]);

  return (
    <div>
      <h1>My Component</h1>
      <p>State 1: {state1}</p>
      <p>State 2: {state2}</p>
      <p>State 3: {state3}</p>
      <p>State 4: {state4}</p>
      <p>State 5: {state5}</p>

      <button onClick={updateState1}>Change 1</button>
      <button onClick={updateState2}>Change 2</button>
      <button onClick={updateState3}>Change 3</button>
      <button onClick={updateState4}>Change 4</button>
      <button onClick={updateState5}>Change 5</button>

      {/* <button onClick={() => handleAlert('This is an alert!')}>Show Alert</button> */}
      {/* <button onClick={handlePrompt}>Show Prompt</button> */}
    </div>
  );
};

export default MyComponent;
