import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="footer">
        <h3><b>Company</b></h3>
        <h3><b>Support</b></h3>     
           <a href="#">Contact us!</a>
        <h3><b>Services</b></h3>
        <h3><b>What's On</b></h3>
        <Link to="/concerts">Concerts</Link>
        <h2>Getting you straight to the stage...</h2>
        <p>SoundStage 2023 ©</p>

        </footer>


);  
}


export default Footer; 