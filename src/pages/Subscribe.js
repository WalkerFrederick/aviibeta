import '../styles/shared.scss'
import {
  Link,
  useHistory 
} from "react-router-dom";
import '../styles/home.scss'
import BackgroundImage from '../components/backgroundImage'
import {loadStripe} from '@stripe/stripe-js';
import image from '../images/image-3.jpg'
import image2 from '../images/image-2.jpg'

import '../styles/subscribe.scss'
import PricingWindow from '../components/pricingWindow'
function Subscribe(props) {
  let {signedInStatus, user} = props
  let history = useHistory()
  if(signedInStatus === true) {
    history.push("/account");
  }
    let goToPayment = async () => {
        const stripe = await loadStripe('pk_test_51I39udDy3Xvv28ZGaBjIkoNJDmwmdJ8Hys4sZbSgQNpJbc7MBckZbLIjg79NCq5gymDyerit0fbTr47oQ1ozXRLc00I3nl0C87');
        stripe
        .redirectToCheckout({
          lineItems: [
            // Replace with the ID of your price
            {price: 'price_1I3SBSDy3Xvv28ZGsVfEG59r', quantity: 1},
          ],
          mode: 'subscription',
          successUrl: 'https://aviibox.netlify.com',
          cancelUrl: 'https://aviibox.netlify.com',
          shippingAddressCollection: {
            allowedCountries: ['US'],
          }
        })
        .then(function(result) {
            console.log(result)
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
    }
    (async function () {
        
    })();
  return (
    <div className="Subscribe">
      <div className="signup">
            <div style={{backgroundImage: `url(${image2})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className={"signup-header"}>
              <h1>Create Account</h1>
              <div className="signup-step-counter-container">
                <div className="signup-step-counter-active">1</div>
                <div className="signup-step-counter">2</div>
                <div className="signup-step-counter">3</div>
              </div>
            </div>
      </div>
        <div  className="subscribe-header">
          <div className="subscribe-header-left">
            <div style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="img">

            </div>
            </div>
            <div className="subscribe-header-right">
              <h1>Step 1 - Choose Your Price</h1>
              <p>We will send you a new set of items to try each month from brands you already love and brands we think you might like.</p>
            <PricingWindow/>
            <Link style={{width: '100%'}} to="/account"><button style={{width: '100%'}} >Continue to Next Step</button></Link>
          </div>
        </div>
    </div>
  );
}

export default Subscribe;
