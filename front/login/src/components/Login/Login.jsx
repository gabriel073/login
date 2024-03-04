import { useState } from "react";
import "../../login.css";

function Login() {

    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        };
        fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)

            })
            .catch(error => {
                console.log(error)
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