import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.expense.name ? props.expense.name : '',
      categoryID: props.expense.categoryID ? props.expense.categoryID : '',
      price: props.expense.price ? props.expense.price : 0
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCategoryIDChange = this.handleCategoryIDChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handlePriceChange(e) {
    this.setState({
      price: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete({...this.state});
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>

      <input
        name='name'
        type='text'
        placeholder='expense'
        value={this.state.name}
        onChange={this.handleNameChange}
        />

      <input
        name='price'
        type='number'
        placeholder='$0.00'
        value={this.state.price}
        onChange={this.handlePriceChange}
        />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default ExpenseForm;