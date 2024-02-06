
import React , { useState } from 'react'
import Navabar from './components/Navabar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selects from './components/Selects';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
    
    <Navabar/>
    <Hero/>
    <Destinations/>
    <Search/>
    <Selects/>
    <Carousel/>
    </>
  );
}

export default App;
