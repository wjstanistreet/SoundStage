import './App.css';
import './assets/style.css'; 
import NavBar from './components/NavBar';
import ConcertContainer from './containers/ConcertContainer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Concerts from './pages/Concerts';


function App() {
  return (
  <BrowserRouter>
    <div className="App">

    <NavBar/>
    <img className ="concertImage" src= {require("./assets/concert.jpg")}></img> 
    <ConcertContainer/>
    

   
    </div>

    <Routes>
      <Route path="/concerts" element={<Concerts/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

);
}

export default App;
