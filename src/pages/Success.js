import '../styles/shared.scss'
import {
  Link
} from "react-router-dom";
import '../styles/home.scss'
import BackgroundImage from '../components/backgroundImage'
import {loadStripe} from '@stripe/stripe-js';



function Success() {

  return (
    <div className="Success">
        <h1>Success</h1>
        <h2>Good Things Are Coming Your Way</h2>
    </div>
  );
}

export default Success;
