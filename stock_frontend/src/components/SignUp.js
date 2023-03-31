import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/SignUp.css'
import { useState } from 'react';

export default function SignUp() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "", email: "", password: ""
    });
    let name, value;

    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, password } = user
        const res = await fetch('/user/signup/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, email, password
            })
        })
        const data = await res.json()
        if (data.status === 401 || !data) {
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }
        else {
            window.alert("Registration Successful")
            console.log("Successful Registration")
            navigate("/SignIn")
        }
    }

    return (
        <div className="text-center m-5-auto">
            <div color="white">
                <h1>Join us</h1>
                <h4>Create your personal account</h4>
            </div>
            <div className='box'>
                <form className='signup' method='POST'>

                    <div>
                        <p>
                            <label className='label'>Username</label>
                            <br />
                            <input className='input' type="text" name="name" autoComplete='off' value={user.name} onChange={handleInputs} placeholder="Your name" required />
                        </p>

                        <p>
                            <label className='label' >Email Address</label>
                            <br />
                            <input className='input' type="email" name="email" autoComplete='off' value={user.email} onChange={handleInputs} placeholder="Email" required />
                        </p>

                        <p>
                            <label className='label' >Password</label>
                            <br />
                            <input className='input' type="password" name="password" autoComplete='off' value={user.password} onChange={handleInputs} required />
                        </p>

                        <p>
                            <input type="checkbox" name="checkbox" id="checkbox" required /><br></br> <span className='term'>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                        </p>
                        <p>
                            <button id="sub_btn" className='submit' type="submit" onClick={PostData}>Register</button>
                        </p>
                    </div>
                </form>
            </div>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}