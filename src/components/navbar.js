import {
  Link
} from "react-router-dom";
import react from 'react'
function navbar(props) {
  return (
    <nav>
      <div className="nav-content">
      {props.title}
      </div>
    </nav>
  );
}

export default navbar;
