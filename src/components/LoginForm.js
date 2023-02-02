import "../assets/style.css"
import { useState } from "react";



const LoginForm = ({showLogin}) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    const [attendees, setAttendees] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("test")
        fetchAttendees();
        const foundUser = attendees.find((attendee) => {
            if(attendee.name === event.target.value){
                return attendee;
            }

        })
        console.log(foundUser)
    }

    const fetchAttendees = () => {
        fetch(`http://localhost:8080/attendees`)
        .then((response) => {return response.json()})
        .then((data) => setAttendees(data));
    }
     

    return ( 
        <div className={`${showLogin ? "active" : ""} show`}>
            {console.log(showLogin)}
            <div className="placeholder-login-form" >
                <div className="placeholder-form-box solid">
                    <form onSubmit={handleFormSubmit} 
                    >
                        <h1 className="login-text">Log In</h1>
                        <label>Username</label>
                        <br></br>
                        <input type="text" name="username" className="placeholder-login-box"/>
                        {/* <br></br>
                        <label>Password</label>
                        <br></br>
                        <input type="password" name="password" className="placeholder-login-box"/> */}
                        <br></br>
                        <input type="submit" value="LOGIN" className="placeholder-login-btn"/>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginForm;