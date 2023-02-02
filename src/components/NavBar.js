import { Link } from "react-router-dom";
import "../assets/style.css";
import Login from "./Login";

const NavBar = () => {
  return (
    <div className="header">
      <style className="font">
        @import
        url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
      </style>
        <Link to = '/'> 
         <div>
      <img src = {require("../assets/WhiteSoundStageLogo.png")} alt='Logo' className='SoundStageLogo'/>
        </div>
      </Link>
      {/* <h2>SoundStage</h2> */}

      <nav className="nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            {/* {" "} */}
            <Link to="/HowItWorks">HOW IT WORKS</Link>
          </li>
          <li>
            <Link to="/concerts">CONCERTS</Link>
          </li>
          <li>
            <a href="#">PRICING</a>
          </li>
        </ul>
      </nav>
      <Login/>
    </div>
  );
};

export default NavBar;
