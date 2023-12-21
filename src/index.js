import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NoteProvider } from './noteContext';

ReactDOM.render(
  <React.StrictMode>
    <NoteProvider>
      <App />
    </NoteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
