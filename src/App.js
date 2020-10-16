import React from 'react';
import './App.css';
import Header from './Header';
import Recommended from './Recommended';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app_page">
        <Sidebar />
        <Recommended/>

      </div>
    </div>

    
    
      
    
  );
}

export default App;
