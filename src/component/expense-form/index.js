import './_expense-form.scss';

import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.expense ? {...props.expense} : {
      name: '',
      categoryID: props.categoryID,
      price: 0
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.expense) {
      this.setState({...props.expense});
    }

    if (props.categoryID) {
      this.setState({categoryID: props.categoryID});
    }
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
    this.props.onComplete(this.state);
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
        <div className='clearfix'></div>
      </form>
    )
  }
}

export default ExpenseForm;