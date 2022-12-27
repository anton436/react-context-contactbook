import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CounterContextProvider from './CounterContext';
import ContactsContextProvider from './ContactsContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContactsContextProvider>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </ContactsContextProvider>
  </BrowserRouter>
);
