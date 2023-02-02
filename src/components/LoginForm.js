import "../assets/style.css"

const LoginForm = (showLogin) => {
    return ( 
        <div className={`${showLogin ? "active" : ""} show`}>
            <div className="placeholder-login-form">
                <div className="placeholder-form-box solid">
                    <form>
                        <h1 className="login-text">Log In</h1>
                        <label>Username</label>
                        <br></br>
                        <input type="text" name="username" className="placeholder-login-box"/>
                        <br></br>
                        <label>Password</label>
                        <br></br>
                        <input type="password" name="password" className="placeholder-login-box"/>
                        <br></br>
                        <input type="submit" value="LOGIN" className="placeholder-login-btn"/>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginForm;