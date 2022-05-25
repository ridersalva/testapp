
import React from 'react';
import Table_Design from './table_design'
import './css/App.css'
import Table_Setouts from './table_setouts';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Table_Design/>
      <Table_Setouts/>
    </div>
  );
}

export default App;
