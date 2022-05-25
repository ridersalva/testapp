import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Table_Design from '../Components/table_design';
import Table_Setouts from '../Components/table_setouts';


function AppRoutes() {
    return (
        <Routes>
        <Route path="Design" element={<Table_Design/>}/>
        <Route path="Setout" element={<Table_Setouts/>}/>
        </Routes>
    )
}
export default AppRoutes