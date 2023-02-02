import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";
import "../assets/style.css";

const Login = () => {

    const [showLogin,setShowLogin] = useState (true);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setShowLogin((showLogin) => !showLogin);
    }

    const logInUser = () => {
        fetch(`http://localhost:8080/attendees`)
        .then((response) => {return response.json()})
        .then((data) => console.log(data));
    }

    //

    return ( 
        <div className="login-bar">
            <LoginButton handleLoginClick ={handleLoginClick}/>
            <LoginForm showLogin = {showLogin} logInUser= {logInUser}/>
        </div>
        
     );
}
 
export default Login;