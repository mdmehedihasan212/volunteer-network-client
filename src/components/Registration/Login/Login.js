import React from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../logos/google.png';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';

const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <section className='form-container'>
            <form onSubmit={handleSubmit} className='main-form'>
                <h1 className='text-center mb-4'>Login with</h1>
                <button onClick={() => signInWithGoogle()} className='register-btn'>
                    <img className='icon' src={google} alt="" />
                    Continue With Google
                </button>
                <div className="text-center mt-3">
                    <p>Don't have an account? <Link to={'/signup'}>Create an account</Link>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default Login;