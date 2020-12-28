import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useIdentityContext, IdentityContextProvider } from "./react-netlify-identity-widget"

const url = "https://aviibox.netlify.app" // supply the url of your Netlify site instance with Identity enabled. VERY IMPORTANT

ReactDOM.render(
  <React.StrictMode>
        <IdentityContextProvider url={url}>
        <App />
    </IdentityContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
