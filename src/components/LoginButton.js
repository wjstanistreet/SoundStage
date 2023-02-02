import Login  from "./Login";
import '../assets/style.css'; 


const LoginButton = ({handleLoginClick}) => {
    const handleClick = () => {
        handleLoginClick();
    }

    return (  
        <div className="login-button" data-toggle="modal" data-target="#myModal">
            <button onClick={handleClick}>Log In</button>
        </div>
    );
}
 
export default LoginButton;