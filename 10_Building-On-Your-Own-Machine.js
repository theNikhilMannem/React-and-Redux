/*

Buidling React Apps on your own machine require importing the dependencies as in the example below, if you're working with npm.

Writing React and Redux code generally requires some configuration. This can get complicated quickly. If you are interested in experimenting on your own machine, the
 'create-react-app' (refer it here: https://github.com/facebook/create-react-app) comes configured and ready to go.

Alternatively, you can enable Babel as a JavaScript Preprocessor in CodePen, add React and ReactDOM as external JavaScript resources, and work there as well.

*/



import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
