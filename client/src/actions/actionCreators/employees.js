import {
  SET_EMPLOYEES,
} from '../actionTypes/employees';

export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, payload: employees });
