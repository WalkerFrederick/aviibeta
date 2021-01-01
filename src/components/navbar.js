import {
  Link
} from "react-router-dom";
import React from 'react'
import firebase from 'firebase/app'
// code split the modal til you need it!


function Navbar(props) {
  console.log("singed in status", props.signedIn)
  let signOut = () => {
    firebase.auth().signOut()
  }
  return (
    <nav>
      <div className="nav-content">
      {props.title}
      {props.signedIn ? 
      <div>
            <Link to="/account">Manage Account</Link>
            <Link onClick={() => {signOut()}} style={{marginLeft: '15px'}}>Log Out</Link>

      </div>
    :
    <Link to="/account">Create Account</Link>
    }
      </div>
      <React.Suspense fallback="loading...">
      </React.Suspense>
    </nav>
  );
}

export default Navbar;
