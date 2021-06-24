import React from 'react';

import './App.css';
import {action,originals, romance} from './url';
import Banner from './components/Banner/Banner';
import Navbar from './components/navbar/Navbar';
import Rowpost from './components/rowpost/Rowpost';


function App() {

  
  return (
    <div className="app">
    <Navbar/>
    <Banner/>
    <Rowpost url={romance} title="Romance "/>
    <Rowpost url={action}  title="Action" ifsmall={true}/>
    
    </div>
  );
}

export default App;
