import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                history.push('/');
            }
        }).catch(error => alert(error.message))

    }


    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src="https://blog.logomyway.com/wp-content/uploads/2017/02/amazon-logo-1.jpg" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login_signIn'>Sign In</button>

                    <p>
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>
                </form>

                <button onClick={register} className='login_registration'>Create your Amazon Account</button>
            </div>

        </div>

    );
}


export default Login