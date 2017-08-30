import {combineReducer} from 'redux';
import categoryReducer from './category-reducer.js';
import expenseReducer from './expense-reducer.js';

export default combineReducer({
  categoryReducer, expenseReducer
})