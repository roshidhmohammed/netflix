import React from 'react'
import NavBar from './Component/navBar/navBar'
import './App.css'
import Banner from './Component/Banner/banner'
import RowPost  from './Component/RowPost/RowPost'
import {originals,actions} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={actions} title='Action' isSmall />
     
    </div>
  );
}

export default App;
