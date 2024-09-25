import React from 'react';
// ClassComp from './/classcomp';
//import ReactDOM from 'react-dom';
//import classprops1 from './classprops1';

class Classprops2 extends React.Component
{
   render()
   {
       return(
        <div>
        <h1>your name is{this.props.name.name}your age is 
        {this.props.name.age}</h1></div>
       );
       }

   }

export default Classprops2