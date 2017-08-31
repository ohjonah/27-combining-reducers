import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import DashboardContainer from '../dashboard-container';
import reducer from '../../reducer';

const store = createStore(reducer);

class App extends React.Component {

  componentDidMount() {
    store.subscribe(() => {
      console.log('__STATE__:', store.getState())
    });

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