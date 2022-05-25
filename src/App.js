
import React from 'react';
import './css/App.css';
import Sidebar from './Components/Sidebar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Sidebar/>
     <AppRoutes/> 
    </div>
  );
}

export default App;
