import { useState } from "react";
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";

const Login = () => {

    const [showLogin,setShowLogin] = useState (true);

    const handleLoginClick = () => {
        setShowLogin((showLogin) => !showLogin);
        console.log(showLogin);
    }

    return ( 
        <>
            <p className="login-bar">Login</p>
            <LoginButton handleLoginClick ={handleLoginClick}/>
            <LoginForm showLogin = {showLogin} />
        </>
        
     );
}
 
export default Login;