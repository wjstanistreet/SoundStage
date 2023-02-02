import "../assets/style.css"
import { useEffect, useState } from "react";


const LoginForm = ({showLogin}) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [attendees, setAttendees] = useState([]);
    const [userForm, setUserForm] = useState(""); 
    const [userUndefined, setUserUndefined] = useState(""); 


    useEffect(() => {
        fetchAttendees();
    }, []); 


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("test")


        const foundUser = attendees.find((attendee) => {
            if(attendee.name === userForm){
                return attendee;
            }

        })
        
      if(foundUser !== undefined){
         setUser(foundUser)
         setLoggedIn(true)
      }  

      else {
            setUserUndefined("User not found"); 
            setLoggedIn(false)
      }

    }

    async function fetchAttendees() {
        const response = await fetch(`http://localhost:8080/attendees`)
        const json = await response.json();  
        setAttendees(json)
    }
     

    return ( 
        <div className={`${showLogin ? "active" : ""} show`}>
            <div className="placeholder-login-form" >
                <div className="placeholder-form-box solid">
                    <form onSubmit={handleFormSubmit}>
                        <h1 className="login-text">Log In</h1>
                        <label>Username</label>
                        <br></br>
                        <input onChange={(event)=>setUserForm(event.target.value)} type="text" name="username" className="placeholder-login-box"/>
                        <br></br>
                        <input type="submit" value="LOGIN" className="placeholder-login-btn"/>
                    </form>
                    {loggedIn ? <p>Hello {user.name}</p> : <p>{userUndefined}</p>}
                </div>   
            </div>
        </div>
     );
}
 
export default LoginForm;