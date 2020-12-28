import '../styles/shared.scss'
import {
  Link
} from "react-router-dom";
import '../styles/home.scss'
import BackgroundImage from '../components/backgroundImage'
import {loadStripe} from '@stripe/stripe-js';



function Subscribe() {
    (async function () {
        const stripe = await loadStripe('pk_test_51I39udDy3Xvv28ZGaBjIkoNJDmwmdJ8Hys4sZbSgQNpJbc7MBckZbLIjg79NCq5gymDyerit0fbTr47oQ1ozXRLc00I3nl0C87');
        stripe
        .redirectToCheckout({
          lineItems: [
            // Replace with the ID of your price
            {price: 'price_1I39wxDy3Xvv28ZGxG1VlsO3', quantity: 1},
          ],
          mode: 'subscription',
          successUrl: 'https://aviibox.netlify.com',
          cancelUrl: 'https://aviibox.netlify.com',
          shippingAddressCollection: {
            allowedCountries: ['US'],
          }
        })
        .then(function(result) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
    })();
  return (
    <div className="Subscribe">
        
    </div>
  );
}

export default Subscribe;