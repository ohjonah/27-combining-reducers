import React from 'react';
import {connect} from 'react-redux';

import {categoryCreate as actionCategoryCreate} from '../../action/category-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  render() {
    return (
      <main className='dashboard-container'>
        <h2>Create Budget</h2>
        <CategoryForm
          buttonText='create budget category'
          onComplete={this.props.categoryCreate}
          />

        {this.props.categories.map((item) =>
          <CategoryItem key={item.id} category={item} />
        )}
        <div className='clearfix'></div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(actionCategoryCreate(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);