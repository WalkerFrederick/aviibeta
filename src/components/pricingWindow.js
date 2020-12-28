import {
    Link
  } from "react-router-dom";
  import react, {useState} from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

  function PricingWindow(props) {
    const [plan, setPlan] = useState(3);
    let plans = [{name: '1 Month', price: '25', timePhrase: ''}, {name: '2 Months', price: '23', timePhrase: '2 Months' }, {name: '3 Months', price: '20', timePhrase: '3 Months'},{name: '4 Month', price: '18', timePhrase: '4 months'}]
    return (
      <div className="pricing-window">
          <div className="price">
            <span className="large">$</span>
            <span className="large">{plans[plan-1].price}</span>
            <span>/month</span>
            {plans[plan-1].timePhrase.length > 0 ? <span style={{fontSize: '1rem'}}> billed every {plans[plan-1].timePhrase}</span> : <></>}
          </div>
          <div className="slider-container">
          <Slider
          defaultValue={plan}
            onChange={(val) => {
                setPlan(val)
            }}
           handleStyle={{borderColor: '#FCA5A5', backgroundColor:'#FCA5A5', height: '25px', width:'25px', bottom: -15, marginLeft: '10px' }}	activeDotStyle={{height: '25px', bottom: -20, backgroundColor: "#FCA5A5", borderColor:'white'}} dotStyle={{height: '25px', width: '25px', bottom: -20, right: 0, left: '90%', borderColor: '#FCA5A5'}} trackStyle={{height: '20px', backgroundColor: '#FCA5A5'}} railStyle={{height: '20px', backgroundColor: '#FECACA'}} dots="true" min={1} max={4} marks={{1: <span>1 month</span>, 2: <span>2 months</span>, 3: <span>3 months</span>, 4: <span>4 months</span>}} />

          </div>

      </div>
    );
  }
  
  export default PricingWindow;
  