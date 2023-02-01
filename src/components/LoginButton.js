import Login  from "./Login";
import '../assets/style.css'; 

const LoginButton = ({handleLoginClick}) => {
    const handleClick = () => {
        handleLoginClick();
    }

    return (  
        <div>
            <button onClick={handleClick}>Log In</button>
        </div>
    );
}
 
export default LoginButton;