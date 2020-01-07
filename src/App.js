import React from 'react';
import './App.css';
import Nav  from './composant/Nav'
const nav=[
  {
    elem:"Home",
    active:false
  },
  {
    elem:"Services",
    active:true,
    drop:["For entrepreneur","For student","for Hobbyistes"]
  },
  {
    elem:"Contact",
    active:false
  }
]


function App() {
  return (
    
    <div>
      <Nav dropen={nav}/> 
    </div>
  );
}

export default App;
