import {
    Link
  } from "react-router-dom";
  import react, { Children } from 'react'

import '../styles/shared.scss'
import image1 from '../images/image-1.jpg'
function backgroundImage(props) {
        return (
            <section className="background-image" style={{backgroundImage: `url(${image1})`}}>
              {props.children}
            </section>
        );
}
  
  export default backgroundImage;
  