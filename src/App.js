import './App.css';
import './assets/style.css'; 
import NavBar from './components/NavBar';
import ConcertContainer from './containers/ConcertContainer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer';
import Concerts from './pages/Concerts';
import HowItWorks from './pages/HowItWorks';
import Home from './pages/Home';


function App() {
  return (
  <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/concerts" element={<Concerts/>}/>
      <Route path="/HowItWorks" element={<HowItWorks/>}/>
    </Routes>
    <Footer/>
    </div>

    </BrowserRouter>

);
}

export default App;
