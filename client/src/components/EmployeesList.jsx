import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Employee from '../components/Employee.jsx';
import Loader from '../components/Loader.jsx';
import { getEmployees } from '../api/employees.js';
import './EmployeesList.css';

const EmployeesList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  const isLoading = useSelector((state) => state.app.loader);

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="employeesList">
      <h1>Employees</h1>
      {employees.map(user => (<Employee user={user} key={user.id} />))}
    </div>
  )
};

export default EmployeesList;
