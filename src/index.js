import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/auth";
import {FirebaseAuthProvider} from '@react-firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyB1g2VpQK_IS1Ac_ng7XwZpEmYYabXSBQI",
  authDomain: "aviibox-d4bc5.firebaseapp.com",
  databaseURL: "https://aviibox-d4bc5-default-rtdb.firebaseio.com",
  projectId: "aviibox-d4bc5",
  storageBucket: "aviibox-d4bc5.appspot.com",
  messagingSenderId: "404972634376",
  appId: "1:404972634376:web:3ce0a95afc681455efacbd",
  measurementId: "G-YNREG8MBKH"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <App />
    </FirebaseAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
