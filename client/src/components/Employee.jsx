import React from 'react';
import { useDispatch } from 'react-redux';

import { changeEmployeeType } from '../api/employees.js';
import { employeesStatuses } from '../data/mockedData.js';
import './Employee.css';

const Employee = ({ user }) => {
  const dispatch = useDispatch();

  const changeEmployeeStatusHandler = (event) => {
    const { textContent } = event.target;
    if (textContent === user.status) return;
    const newUser = {
      ...user,
      status: textContent,
    }
    dispatch(changeEmployeeType(newUser));
  };

  return (
    <div className="employeeRow">
      <span className="userName">{user.name}</span>
      <div className="statusesWrapper">
        {
          employeesStatuses.map(status => (
            <div
              className={`employeeStatus ${status === user.status ? 'active' : ''}`}
              onClick={changeEmployeeStatusHandler}
            >
              {status}
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Employee;
