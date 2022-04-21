import axios from 'axios';

import { API_URL } from '../config';
import { setEmployees } from '../actions/actionCreators/employees';
import { hideLoader, showLoader } from '../actions/actionCreators/app';

export const getEmployees = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      let url = `${API_URL}/employees`;

      const response = await axios.get(url);
      dispatch(setEmployees(response.data));
    } catch (e) {
      alert(e);
    } finally {
      dispatch(hideLoader());
    }
  };
};

export const changeEmployeeType = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `${API_URL}/employees`,
        {
          id: user.id,
          name: user.name,
          status: user.status,
        },
      );
      dispatch(setEmployees(response.data));
    } catch (e) {
      alert(e);
    }
  };
};

export const addEmployee = (userName) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${API_URL}/employees`,
        {
          name: userName,
        },
      );
      dispatch(setEmployees(response.data));
    } catch (e) {
      alert(e);
    }
  };
};
