import { useState } from "react";
import "../../Login.css";
import Home from "../Home.jsx";

import Swal from 'sweetalert2';
function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

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
                    if (setUserName != username) {
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "User o Password Ingresados, Incorrectos!",

                        });
                    }
                }

            })
            .catch(error => {
                console.log(error)
            })



        if (!data.username) {
            return setUserNameError('Ingrese un username');
        }
        if (!data.password) {
            return setPasswordError('Ingrese un Password');
        }
        else {
            return setUserNameError(false), setPasswordError(false);
        }



    }



    return (
        <div >
            {loginSuccessful ? <Home /> :
                <div className='login-box'>
                    <h2>Login</h2>
                    <form>
                        <div className='user-box'>
                            <input onChange={(e) => { setUserName(e.target.value) }} name="" required="Ingresa un username" type="text" />
                            <div className='danger'>
                                {userNameError && <p>{userNameError}</p>}
                            </div>
                            <label>Username</label>
                        </div>
                        <div className='user-box'>
                            <input onChange={(e) => { setPassword(e.target.value) }} name="" required="Ingresa una pass" type="password" />
                            <div className='danger'>
                                {passwordError && <p>{passwordError}</p>}
                            </div>
                            <label >Password</label>
                        </div>
                        <div className="button">
                            <button onClick={handleLogin}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Sing In
                            </button>
                        </div>
                    </form>
                </div>}
        </div>
    );
}

export default Login;