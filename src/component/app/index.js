import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import DashboardContainer from '../dashboard-container';
import reducer from '../../reducer';
import reporter from '../../lib/redux-reporter.js';

const store = createStore(reducer, applyMiddleware(reporter));

class App extends React.Component {

  componentDidMount() {
    store.dispatch({ type: null });
  }

  render() {
    return (
      <section>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={DashboardContainer} />
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App;