import React from 'react'
import {BrowserRouter} from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import RoutesList from './RoutesList';

const App = () => {


  ///www.kadeembest.com
  console.log("App Component has loaded");
  return (

    <BrowserRouter>
          <Nav/>
          <RoutesList/>
          <Footer/>
    </BrowserRouter>
   
  )
}

export default App