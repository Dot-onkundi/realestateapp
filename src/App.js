import React, {useState} from 'react'
// import CardSection from './components/CardSection';
// import Cards from './components/Cards';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Infosection from './components/Infosection';
// import Navbar from './components/Navbar';
// import { CardData0ne } from './data/Carddata';
import {  InfoDataOne, InfoDataThree, InfoDataTwo } from './data/Infodata';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';

function App() {

  const [isopen, setIsOpen]=useState(false)
  const toggle=()=>{
    setIsOpen(!isopen)

  }
  return (
    <>
   <DropDown isopen={isopen} toggle={toggle}/>
    <GlobalStyle/>
    {/* <Navbar toggle={toggle}/> */}
    <Hero slides={SliderData}/>
    <Infosection {...InfoDataOne}/>
    <Infosection {...InfoDataTwo}/>
    <Infosection {...InfoDataThree}/>
    {/* <Infosection {...InfoDataFour}/> */}
    {/* <Cards/> */}
    {/* <CardSection {...CardData0ne}/> */}
    
    
    

    <Footer/>
    </>
  );
}

export default App;
