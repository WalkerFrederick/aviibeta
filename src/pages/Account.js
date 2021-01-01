import '../styles/shared.scss'
import React, {useState} from 'react'
import {
  Link
} from "react-router-dom";
import '../styles/account.scss'
import BackgroundImage from '../components/backgroundImage'
import {loadStripe} from '@stripe/stripe-js';
import { useIdentityContext, IdentityContextProvider } from "../react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import image2 from '../images/image-2.jpg'
import firebase from "firebase/app";

// code split the modal til you need it!
const IdentityModal = React.lazy(() => import("../react-netlify-identity-widget"))


function Account(props) {

  let {signedInStatus, user} = props
  let [email, setEmail]= useState('')
  let [password, setPassword] = useState('')
  let [formError, setFormError] = useState('')


  console.log(signedInStatus, user)
  let goToAccountPage = () => {
    (async function() {
      const stripe = await loadStripe('pk_test_51I39udDy3Xvv28ZGaBjIkoNJDmwmdJ8Hys4sZbSgQNpJbc7MBckZbLIjg79NCq5gymDyerit0fbTr47oQ1ozXRLc00I3nl0C87');

      console.log("LOGGED IN")
      fetch("https://us-central1-aviibox-d4bc5.cloudfunctions.net/getStripeCustomerNumberByUid", {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin,
        body: JSON.stringify(user)
    }).then(response=> response.text()).then(res => {
      fetch("https://us-central1-aviibox-d4bc5.cloudfunctions.net/createCustomerPortalSession", {
          method: 'POST',
          mode: 'cors', // no-cors, *cors, same-origin,
          body: res
      }).then(response=> response.text()).then(res => {return JSON.parse(res)}).then(json => {
        window.location = json.url
      })
    })
    })()
  }

  if(signedInStatus === true) {
    goToAccountPage()
  }
  let createAccountWithEmail = (email, password) => {
    (async function () {
      const stripe = await loadStripe('pk_test_51I39udDy3Xvv28ZGaBjIkoNJDmwmdJ8Hys4sZbSgQNpJbc7MBckZbLIjg79NCq5gymDyerit0fbTr47oQ1ozXRLc00I3nl0C87');
      console.log("LOOK", email, password)
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("SIGNEDIN", user.user)
        return user.user
      })
      .then(res => {
        let userJSON = JSON.stringify(res)
        console.log("USER", res)
        return userJSON
      })
      .then(userjson => {
        fetch("https://us-central1-aviibox-d4bc5.cloudfunctions.net/createCheckoutSession", {mode: 'cors', method: 'POST', body: userjson})
        .then(response=> response.text())
        .then(res => {stripe.redirectToCheckout({ sessionId: res })})
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setFormError(` ${errorMessage}`)
      });
    })();

  }
  return (
    <div className="Account">

      {signedInStatus?
          <h1>Account Found - If you just subscribed please wait 5 minutes. Check your email for a conformation.</h1>
      :
          <div className="signup">
            <div style={{backgroundImage: `url(${image2})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className={"signup-header"}>
              <h1>Create Account</h1>
              <div className="signup-step-counter-container">
                <div className="signup-step-counter-active">1</div>
                <div className="signup-step-counter">2</div>
                <div className="signup-step-counter">3</div>
              </div>
            </div>
            <div className="signup-form-container">
              {formError.length > 0 ? <div className="signup-form-error">Error: {formError}</div> : <></>}
              <label>Email</label>
              <input autoComplete="email" name="email" type="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <button onClick={() => {createAccountWithEmail(email, password)}}>Continue</button>
            </div>
          </div>
      }
      
      
    </div>
  );
}


export default Account;
