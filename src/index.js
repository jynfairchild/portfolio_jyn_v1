import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import App from './routes/app';
import * as serviceWorker from './routes/serviceWorker';
// import { ScrollToTop } from './components/scrolltotop';

ReactDOM.render(
  <React.StrictMode>
    {/* <ScrollToTop /> */}
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();