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
      <a href="#">About</a>
      <a href="#">Events</a>
      <a href="#">Pricing</a>
      <a href="#"></a>
     
      </nav>

      <img className ="concertImage" src= {require("../assets/concert.jpg")}></img> 

     </div>
    )}

    export default NavBar;
     