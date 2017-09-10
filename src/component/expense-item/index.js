import './_expense-item.scss';

import React from 'react';
import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    let {expense, expenseDelete, expenseUpdate} = this.props;

    return (
      <li className='expense-item'>
        <h3 className='left'>Expense: {expense.name}</h3>
        <button className='remove' onClick={() => expenseDelete(expense)}>X</button>
        <h3 className='right'>Price: ${expense.price}</h3>


        <ExpenseForm
          expense={expense}
          buttonText='update expense'
          onComplete={expenseUpdate} />


        <div className='clearfix'></div>
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

