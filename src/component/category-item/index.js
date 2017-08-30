import React from 'react';
import {connect} from 'react-redux';

import CategoryForm from '../category-form';

import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';

class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDelete} = this.props;

    return (
      <section>
        <h2>{category.name}</h2>
        <h2>{category.budget}</h2>
        <CategoryForm
          buttonText='update'
          category={category}
          onComplete={this.props.categoryUpdate} />

        <button onClick={() => this.props.categoryDelete(category)}>X</button>
      </section>
    )
  }
}

const mapStateToProps = () => ({
  expense: state.expense
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete:(category) => dispatch(categoryDelete(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
