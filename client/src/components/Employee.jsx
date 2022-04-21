import React from 'react';
import { useDispatch } from 'react-redux';

import { changeEmployeeType } from '../api/employees.js';
import { employeesStatuses } from '../data/mockedData.js';
import './Employee.css';

const Employee = ({ user }) => {
  const dispatch = useDispatch();
  // const currentDir = useSelector((state) => state.files.currentDir);

  const changeEmployeeStatusHandler = (event) => {
    const { textContent } = event.target;
    if (textContent === user.status) return;
    // TODO: move logic from UI
    const newUser = {
      ...user,
      status: textContent,
    }
    dispatch(changeEmployeeType(newUser));
  };
// debugger
  return (
    <div className="employeeRow">
      {/*{user.id}*/}
      <span className="userName">{user.name}</span>
      {/*{user.status}*/}
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
  )
};

export default Employee;
