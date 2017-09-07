import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseDelete, expenseUpdate} = this.props;

    return (
      <li className='expense-item'>
        <h3>{expense.name}</h3>
        <h3>{expense.price}</h3>
        <button className='remove' onClick={() => expenseDelete(expense)}>delete</button>
        <ExpenseForm
          expense={expense}
          buttonText='update expense'
          onComplete={expenseUpdate} />
      </li>
    )
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);

