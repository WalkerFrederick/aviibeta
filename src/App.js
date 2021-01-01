import logo from './logo.svg';
import './styles/shared.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Subscribe from './pages/Subscribe'
import Account from './pages/Account'
import Success from './pages/Success'

import Navbar from './components/navbar'

import {FirebaseAuthConsumer} from '@react-firebase/auth'

import './styles/shared.scss'
function App() {
  return (
    <Router>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return (
            <div className="App">

            <Navbar signedIn={isSignedIn} title={appLogo()}>
            </Navbar>
          
        <div style={{paddingTop: 50}}/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/join" ><Subscribe signedInStatus={isSignedIn}></Subscribe></Route>
          <Route path="/how-it-works"></Route>
          <Route path="/past-boxes"></Route>
          <Route path="/news"></Route>
          <Route path="/account"><Account signedInStatus={isSignedIn} user={user}/></Route>
          <Route path="/success"><Success/></Route>
          <Route path="/become-an-influencer"></Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <footer>
            {appLogo()}
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/past-boxes">Past Boxes</Link>
              <Link to="/join">Subscribe</Link>
              <Link to="/account">Account</Link>

            </div>
      </footer>
      </div>

      );
    }}
      </FirebaseAuthConsumer>

    </Router>
  );
}

function appLogo() {
  return (
    <span style={{display: 'block', fontSize: '28px', fontWeight: 'bold'}}>
      <span style={{display: 'inline-block', color: "#FCA5A5", fontSize: 'inherit'}}>avii</span>
      <span style={{display: 'inline-block'}}>box</span>
    </span>
  )
}

export default App;
