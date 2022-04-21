import {
  SET_EMPLOYEES,
} from '../actions/actionTypes/employees';

const defaultState = {
  employees: [],
};

export default function employeesReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_EMPLOYEES:
      return { ...state, employees: action.payload };
    default:
      return state;
  }
}
