import {
  Link
} from "react-router-dom";
import React from 'react'
import { useIdentityContext, IdentityContextProvider } from "../react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
// code split the modal til you need it!
const IdentityModal = React.lazy(() => import("../react-netlify-identity-widget"))


function Navbar(props) {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const isLoggedIn = identity && identity.isLoggedIn

  
  return (
    <nav>
      <div className="nav-content">
      {props.title}
      {props.isLoggedIn ? 
      <div>
            <Link to="/account">Manage Account</Link>
            <Link style={{marginLeft: '15px'}} onClick={() => setDialog(true)}>Log Out</Link>

      </div>
    :
    <Link to="/account">Log In</Link>
    }
      </div>
      <React.Suspense fallback="loading...">
        <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
      </React.Suspense>
    </nav>
  );
}

export default Navbar;
