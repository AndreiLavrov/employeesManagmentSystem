import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import EmployeesList from '../src/components/EmployeesList.jsx';
import '../src/App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<EmployeesList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
