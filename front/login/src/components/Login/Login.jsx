import { useState } from "react";
import "../../login.css";

function Login() {

    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        console.log({
            username: username,
            password: password
        })
    }

    return (
        <>
            <h1>Login</h1>
            <div className="form">
                <form>
                    <label >Username:</label>
                    <input onChange={(e) => { setUserName(e.target.value) }} placeholder="username" type="text" />

                    <label >Password:</label>
                    <input onChange={(e) => { setPassword(e.target.value) }} placeholder="password" type="password" />

                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login