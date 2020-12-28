import '../styles/shared.scss'
import {
  Link
} from "react-router-dom";
import '../styles/home.scss'
import BackgroundImage from '../components/backgroundImage'
import {loadStripe} from '@stripe/stripe-js';



function Account() {
    fetch("https://aviibox.azurewebsites.net/customer-portal", {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin,
      body: ''
  }).then(response=> response.text()).then(res => {console.log(res)})
  return (
    <div className="Subscribe">
        
    </div>
  );
}

export default Account;
