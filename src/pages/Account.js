import '../styles/shared.scss'
import React from 'react'
import {
  Link
} from "react-router-dom";
import '../styles/home.scss'
import BackgroundImage from '../components/backgroundImage'
import {loadStripe} from '@stripe/stripe-js';
import { useIdentityContext, IdentityContextProvider } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
// code split the modal til you need it!
const IdentityModal = React.lazy(() => import("react-netlify-identity-widget"))


function Account() {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const isLoggedIn = identity && identity.isLoggedIn

  let goToAccountPage = () => {
    fetch("https://aviibox.azurewebsites.net/customer-portal", {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin,
      body: ''
  }).then(response=> response.text()).then(res => {console.log(res)})
  
  }

  return (
    <div className="Account">
        <button className="btn" onClick={() => setDialog(isLoggedIn)}>
        {isLoggedIn ? "LOG OUT" : "LOG IN"}
      </button>
      <React.Suspense fallback="loading...">
        <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
      </React.Suspense>
    </div>
  );
}

export default Account;
