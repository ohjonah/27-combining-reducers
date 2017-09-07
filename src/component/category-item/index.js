import './_category-item.scss'

import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import {expenseCreate} from '../../action/expense-actions.js';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDelete, expenses, expenseCreate} = this.props;

    return (
      <section className='category-item'>
        <div className='category-container'>
          <h2 className='category'>Category: {category.name}</h2>
          <h2 className='budget'>Budget Available: ${category.budget}</h2>
          <CategoryForm
            buttonText='update'
            category={category}
            onComplete={categoryUpdate} />
          <button className='remove' onClick={() => this.props.categoryDelete(category)}>delete</button>
        </div>

        <div className='expense-container'>
          <ExpenseForm
            categoryID={category.id}
            buttonText='create expense'
            onComplete={expenseCreate}
            />

          <ul className='expense-items'>
            {expenses.map(expense =>
              <ExpenseItem key={expense.id} expense={expense} />
            )}
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expenses: state.expenses[props.category.id]
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    expenseCreate: (expense) => dispatch(expenseCreate(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
