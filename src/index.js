import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const devTools = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, devTools)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
  );


serviceWorker.unregister();
