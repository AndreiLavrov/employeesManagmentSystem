import React from 'react';

import EmployeesList from '../components/EmployeesList.jsx';
import BasicModal from '../components/Modal.jsx';

const EmployeePage = () => {
  return (
    <>
      <EmployeesList />
      <BasicModal />
    </>
  );
};

export default EmployeePage;
