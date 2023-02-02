import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";
import "../assets/style.css";

const Login = () => {

    const [showLogin,setShowLogin] = useState (true);

    const handleLoginClick = () => {
        setShowLogin((showLogin) => !showLogin);
    }

    //

    return ( 
        <div className="login-bar">
            <LoginButton handleLoginClick ={handleLoginClick}/>
            <LoginForm showLogin = {showLogin} />
        </div>
        
     );
}
 
export default Login;