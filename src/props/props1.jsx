 import React from 'react';
import Classprops2 from './props2';
//import ClassComponent2 from './classcomp1';
//import ClassComp2 from '//classcomp2';
 //import ReactDOM from 'react-dom';
 class ClassProps extends React.Component
 {
    render()
    {
        let name2 = {name:"karthi",age:20}
        return (
        <div>
            <h1>your name is{this.props.name}</h1>   
            <Classprops2 name="karthi"/>
        </div>
        );
    }
 }
 export default ClassProps