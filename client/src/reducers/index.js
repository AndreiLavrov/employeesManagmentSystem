import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import employeesReducer from '../reducers/employeesReducer';
import appReducer from '../reducers/appReducer';

const rootReducer = combineReducers({
  employees: employeesReducer,
  app: appReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
