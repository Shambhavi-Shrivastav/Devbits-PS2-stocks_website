import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import '../styles/SignIn.css'
import { useState } from 'react';
export default function SignIn() {
    const navigate = useNavigate()
    const [signuser, setsignuser] = useState({
        email: "", password: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name
        value = e.target.value
        setsignuser({ ...signuser, [name]: value })
    }

    const GetData = async(e) => {
        e.preventDefault();
        const {email,password} = signuser
        console.log(signuser)

        const res = await fetch('/user/signin/',{
            method:"POST",
            body:JSON.stringify({
                email,password
            }),
            headers:{
                "Content-Type": "application/json",
            }
        })
        
        const data = await res.json()

        if(data.status===401){
            window.alert('Invalid password or New User')
            console.log('Invalid password or New User')
        }
        else{
            window.alert('Successfully logged in')
            console.log('Successfully logged in')
        }
        navigate('./')
    }
   
    return (
        <div className="text-center m-5-auto">
            <h2>Sign In</h2>
            <form className='signin'>
                <p>
                    <label className='label'>Username or Email Address</label><br />
                    <input className='input' type="text" name="email" autoComplete='off' value={signuser.email} onChange={handleInputs} placeholder="Email" required />
                </p>
                <p>
                    <label className='label'>Password</label>
                    <br />
                    <input className='input' type="password" name="password" autoComplete='off' value={signuser.password} onChange={handleInputs} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" className='submit' onClick={GetData}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/SignUp">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}