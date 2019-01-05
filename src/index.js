import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "tachyons"
import FormContainer from './modules/form/form.container';
import configureStore from './modules/store';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <div>
    <App />
    <FormContainer />
  </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
