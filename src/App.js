import './App.css';
import './assets/style.css'; 
import NavBar from './components/NavBar';
import ConcertContainer from './containers/ConcertContainer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <div className="App">

    <NavBar/>
    <ConcertContainer/>
    </div>

    <Routes>
      


    </Routes>

    </BrowserRouter>

);
}

export default App;
