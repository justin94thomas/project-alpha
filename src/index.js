import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './Utils/i18next/i18n';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from './Store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);