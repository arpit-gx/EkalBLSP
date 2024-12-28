//@ts-nocheck
import LandingPage from "./Components/Common/landing";

import React from "react";
import Navbar from "./Components/Common/navbar";
import Mainav from './Components/Common/mainav';
import Info from './Components/info';
import About from "./Components/about";


const App = () =>{
  return(
    <div>
     <Navbar />
     <Mainav />
     <LandingPage />
     
     <Info />
    </div>
  )

}

export default App;





