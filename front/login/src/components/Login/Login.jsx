import { useState } from "react";
import "../../login.css";
import Home from "../Home.jsx";

function Login() {

    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.token)

                if (result.token) {
                    localStorage.setItem('token', result.token)
                    setLoginSuccessful(true);

                } else {
                    setLoginSuccessful(false);
                }
                console.log(result)

            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <>
            {loginSuccessful ? <Home /> : <div className="custom-form">
                <h1>Login</h1>
                <div className="form">
                    <form>
                        <label >Username:</label>
                        <input onChange={(e) => { setUserName(e.target.value) }} placeholder="username@mail.com" type="text" />

                        <label >Password:</label>
                        <input onChange={(e) => { setPassword(e.target.value) }} placeholder="xxxxxxxxx" type="password" />

                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>}
        </>
    );
}

export default Login;