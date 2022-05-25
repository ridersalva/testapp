
import React from 'react';
import './css/App.css';
import Sidebar from './Components/Sidebar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
    <Sidebar />
    <div className="App">
     <AppRoutes/> 
    </div>
    </>
  );
}

export default App;
