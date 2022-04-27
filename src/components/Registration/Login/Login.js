import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import google from '../../../logos/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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