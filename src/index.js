import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/custom.scss";
import "./i18n";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
