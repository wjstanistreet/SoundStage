import { Link } from "react-router-dom";
import "../assets/style.css";

const NavBar = () => {
  return (
    <div className="header">
      <style className="font">
        @import
        url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
      </style>
      <img
        className="SoundStageLogo"
        src={require("../assets/SoundStageLogo.png")} onClick= "/Home"

      ></img>
      {/* <h2>SoundStage</h2> */}

      <nav className="nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            {/* {" "} */}
            <Link to="/HowItWorks">HOW IT WORKS</Link>

            {/* src/pages/HowItWorks.js */}
          </li>
          <li>
            <Link to="/concerts">CONCERTS</Link>
          </li>
          <li>
            <a href="#">PRICING</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
