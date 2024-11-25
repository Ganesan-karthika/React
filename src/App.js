//import logo from './logo.svg';
//import './state/state.css';
//import Lifecycle2 from "./lifecycle/lifecycle";
//import ListKey from './list/keys';
//import MyList from './list/keys';
//import MyList from './list/key';
//import ListsPoints2 from './list/list';
//import ReactState from './state/state';
//import ListsPoints2 from './list/list';
//import Funrom './classcomp1';
//mport classc from '//clactionprops1 from './functprops/props1';
//import Functionprops1 from './functprops/props1';
//import ListsPoints2 from './list/list';
//import ClassProps from './props/props1';
//import Props from './props/props1';
//import ClassCompoent fsscomp';
//import Abc from'./loop';
import {BrowserRouter,Route,Routes}from 'react-router-dom';
import Signups from './e-food/signups/signup';
import Signins from './e-food/signin/signin';

//import StateExample2 from "./Hooks/useeffect";
//import Table1 from "./Hooks/useeffect";
//import ParentusingGlobalstate from './Hooks/useContext';
//import MyComponent from "./Hooks/usestatetask";
//import StateExample from "./hools/usestate";
//mport StateExample2 from "./useeffort/stateexample2";
//import {BrowserRouter,Route,Routes}from 'react-router-dom';
//import Filters from "./find/find";
//import { BrowserRouter } from "react-router-dom";

// import Signups from "./e-cart/signup/signup";
// import Signins from './e-cart/signup/signin/signin';
import { useState } from 'react';
// import { LatestItems } from './e-cart/latest/latest';
import NavbarComponent from './e-food/navbar/navbar';
//import AboutUs from './e-food/aboutus/about';
import { LatestItems } from './e-food/southindian/southindian';
import { NorthIndian } from './e-food/northindian/northindian';
import { Chinese} from './e-food/chinese/chinese';
import AboutUs from './e-food/aboutus/about';
import ContactUs from './e-food/content/content';
// import { MenItems } from './e-cart/mens/men';
// import { WomenItems } from './e-cart/womens/women';
// import { KidItems } from './e-cart/kids/kids';

//import MainPage from "./taskwebs/frontpage";

function App() { 
    const [isAuthenticated,setIsAuthenticated] =useState(false)

  const handleSignInSuccess=(nameuser)=>{
  console.log(nameuser);
  setIsAuthenticated(true);
  localStorage.setItem("username",nameuser)
  console.log("yes")
};
  return (
    // <div className="App">
    //   <h1>Welcome to Reactjs</h1>
    //   </div>
      //<Abc />
      //<ListsPoints2 myvalue= {[2,5]}/>
      //<MyList />
      //<ListKey />
     //<ReactState />
     //<Lifecycle2 />
       //<StateExample />
       //<StateExample2 />
      // <Table1 />
       //<StateExample2 />
       //<MyComponent />
      //<ListsPoints2 myvalue={[2,5,6]} />
      // <BrowserRouter>
      // <Routes>
      //   <Route path="index" element={<Table1 />}/>
      //   <Route path="home" element={<ParentusingGlobalstate />}/>
      // </Routes>
      // </BrowserRouter>
      //<Filters />
      <BrowserRouter>
    <NavbarComponent isAuthenticated={isAuthenticated}/>
      <Routes>   
        <Route path="index" element={<Signups />} />
        <Route path="signin" element={<Signins handleSignInSuccess={handleSignInSuccess}/>} />
        <Route path="about" element={<AboutUs/>}/>
        <Route path="south" element={<LatestItems />}/> 
        <Route path="north" element={<NorthIndian />} />
        <Route path="chinese" element={<Chinese />} />  
        <Route path="content" element={<ContactUs />} />  

        
 
      </Routes>

      </BrowserRouter>

     
  );
}
export default App; 