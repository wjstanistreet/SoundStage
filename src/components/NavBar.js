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
      <button> <a href="#">About</a></button>
      <button><a href="#">Events</a></button>
      <button><a href="#">Pricing</a></button>
      {/* <a href="#"></a> */}
     
      </nav>

      <img className ="concertImage" src= {require("../assets/concert.jpg")}></img> 

     </div>
    )}

    export default NavBar;
     