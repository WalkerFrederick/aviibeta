import '../styles/shared.scss'
import {
  Link
} from "react-router-dom";
import '../styles/home.scss'
import BackgroundImage from '../components/backgroundImage'
import PricingWindow from '../components/pricingWindow'
import BackgroundPatternImage from '../images/background-darkpink.png'
import BackgroundPatternImage2 from '../images/image-2.jpg'
import BackgroundPatternImage3 from '../images/image-3.jpg'


import boxImg from '../images/box1.png'
function Home() {
  return (
    <div className="Home">
        <div style={{height: '400px', width: '100%'}}>
            <BackgroundImage>
              <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end'}}>
                <Link to ='/join'><button>Subscribe</button><button style={{marginLeft: 0,backgroundColor:'white', color:  '#FCA5A5'}}>Starting at $18/month</button></Link>
              </div>
            </BackgroundImage>
        </div>
        <div className="home-savings">
            <div className="home-savings-left" style={{backgroundImage: `url(${BackgroundPatternImage})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <h1>Bring On The Savings</h1>

            </div>
            <div className="home-savings-right" style={{backgroundImage: `url(${BackgroundPatternImage2})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
              <div>
                <img className="boximg" style={{height: '250px'}} src={boxImg}></img>
              </div>
              <div>
              </div>
            </div>
        </div>
        <div style={{backgroundColor: 'white', backgroundPosition: 'center', backgroundSize: 'cover'}} className="home-how-it-works">
          <h1>5 Name Brand Products Every Month</h1>
          <Link to="/how-it-works">[ View Past Boxes ]</Link>
        </div>
        <div className="home-pricing">
          <div className="home-pricing-half">
            <h1>Pricing For Everyone.</h1>
            <p>Save when you subscribe to a multi-month plan, or try us out for a month and cancel if you aren't happy.</p>
            <Link to='/join'><button style={{backgroundColor: 'white', color: '#FCA5A5'}}>Subscribe Now</button></Link>
          </div>
          <div className="home-pricing-half">
            <PricingWindow/>
          </div>
        </div>
        <div className="home-points">
            <h1>Always Free Shipping</h1>
            <h1>Try Us Risk Free</h1>
            <h1>Cancel Anytime</h1>
        </div>
        <div className="home-savings">
            <div className="home-savings-left" style={{minHeight: '300px',backgroundImage: `url(${BackgroundPatternImage3})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

            </div>
            <div className="home-savings-right" style={{color: 'white',minHeight: '200px', backgroundColor: '#FCA5A5', backgroundPosition: 'center', backgroundSize: 'cover'}}>
              <div>
              <h1>5 New Items Every Month</h1>
              <p>We will send you a new set of items to try each month from brands you already love and brands we think you might like.</p>
              <Link to="/past-boxes"><button style={{backgroundColor: 'white', color: '#FCA5A5', marginBottom: '15px'}}>View Past Boxes</button></Link>
              </div>
              <div>
              </div>
            </div>
        </div>
        <div style={{backgroundImage: `url(${BackgroundPatternImage2})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="home-how-it-works">
          <h1>How do we get these prices?</h1>
          <p>
            We buy all our products at wholesale prices; Passing the savings on to you.
          </p>
          <Link to="/how-it-works">[ Read More ]</Link>
        </div>
    </div>
  );
}

export default Home;
