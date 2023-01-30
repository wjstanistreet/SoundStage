import './App.css';
import './assets/style.css'; 
import ConcertContainer from './containers/ConcertContainer';

function App() {
  return (
  <>
<div className = "header">
<style className ="font">
@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
</style>
  <img className = "SoundStageLogo" src= {require("./assets/soundstage.png")}></img>
    {/* <h2>SoundStage</h2> */}
<nav className= "nav"> 
  <a href="#">About</a>
  <a href="#">Events</a>
  <a href="#">Pricing</a>
  <a href="#"></a>
 
  </nav>
 </div>
 <ConcertContainer/></>
);
}

export default App;
