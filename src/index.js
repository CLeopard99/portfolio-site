import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import '../node_modules/react-modal-video/scss/modal-video.scss';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);