import { Link } from 'react-router-dom';
import '../assets/style.css'; 

const NavBar = () => {
    return ( 
    <div className = "header">
    <style className ="font">
    @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
    </style>
      <img className = "SoundStageLogo" src= {require("../assets/soundstage.png")}></img>
        {/* <h2>SoundStage</h2> */}


    <nav className= "nav">
      <button><Link to="/">HOME</Link></button>
      <button> <a href="#">ABOUT</a></button>
      <button><Link to="/concerts">CONCERTS</Link></button>
      <button><a href="#">PRICING</a></button>
      {/* <a href="#"></a> */}
     
      </nav>

      

     </div>
    )}

    export default NavBar;
     