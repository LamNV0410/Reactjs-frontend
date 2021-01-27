import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

function LoginAndRegister(props) {


    const handleClickRegisterForm = () => {
        let x = document.getElementById('login');
        let y = document.getElementById('register');
        let z = document.getElementById('btn');

        ReactDOM.findDOMNode(x).style.left = '-450px'
        ReactDOM.findDOMNode(y).style.left = '50px'
        ReactDOM.findDOMNode(z).style.left = '110px'
    }

    const handleClickLoginForm = () => {
        let x = document.getElementById('login');
        let y = document.getElementById('register');
        let z = document.getElementById('btn');

        ReactDOM.findDOMNode(x).style.left = '50px'
        ReactDOM.findDOMNode(y).style.left = '450px'
        ReactDOM.findDOMNode(z).style.left = '0'
    }

    // ---userLogin--
    const [useId, setUseId] = useState();
    const handleUserIdChange = (e) => {
        setUseId(e.target.value);
    }

    const [password, setPassword] = useState();
    const handleEnterPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const [isRemember, setIsRemember] = useState(false);
    const handleRememberMechange = (e) => {
        setIsRemember(e.target.checked);
    }

    const history = useHistory();
    const handleLoginClick = (e) => {
        e.preventDefault();
        let data = {
            userName: useId,
            password: password,
            isRememberMe: isRemember
        };

        axios.post('https://localhost:5001/api/User/login', data)
            .then(res => {
                console.log(res.data.responseBody);
                localStorage.setItem("JWT", res.data.responseBody)
            });
        history.push('/products');
    }

    // -------- register---------------------
    const [userIdRegister, setUserIdRegister] = useState();
    const [userEmailIdRegister, setUserEmailIdRegister] = useState();
    const [userPasswordRegister, setUserPasswordRegister] = useState();

    const handleRegisterUser = (e) => {
        e.preventDefault();
        let data = {
            userName: userIdRegister,
            email: userEmailIdRegister,
            password: userPasswordRegister,
        };

        axios.post('https://localhost:5001/api/User/register', data)
            .then(res => {
                console.log(res);
            });
    }
    return (
        <div className="hero">
            <div className="form-box">
                <div className="button-box">
                    <div id="btn" />
                    <button type="button" className="toggle-btn" onClick={() => handleClickLoginForm()}>Login</button>
                    <button type="button" className="toggle-btn" onClick={() => handleClickRegisterForm()}>Register</button>
                </div>
                <div className="social-icons">
                    <img src="./images/fb.png" alt='infomation' />
                    <img src="./images/tw.png" alt='infomation' />
                    <img src="./images/gp.png" alt='infomation' />
                </div>
                <form id="login" className="input-group">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="User Id"
                        required
                        onInput={(e) => handleUserIdChange(e)}
                    />
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Enter Password"
                        required
                        onInput={(e) => handleEnterPasswordChange(e)}
                    />
                    <input
                        type="checkbox"
                        className="check-box"
                        onInput={(e) => handleRememberMechange(e)}
                    />
                    <span> Remember Password </span>
                    <button
                        type="button"
                        className="submit-btn"
                        onClick={(e) => handleLoginClick(e)}
                    > Login Button
                    </button>
                </form>
                <form id="register" className="input-group">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="User Id" required
                        onInput={(e) => setUserIdRegister(e.target.value)}
                    />
                    <input
                        type="email"
                        className="input-field"
                        placeholder="Email Id" required
                        onInput={(e) => setUserEmailIdRegister(e.target.value)}
                    />
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Enter Password" required
                        onInput={(e) => setUserPasswordRegister(e.target.value)}
                    />
                    <input
                        type="checkbox"
                        className="check-box" />
                    <span> I agree to the term condition </span>
                    <button type="button" className="submit-btn" onClick={(e) => handleRegisterUser(e)}> Register Button</button>
                </form>
            </div>
        </div>

    );
}

export default LoginAndRegister;