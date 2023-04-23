import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('')


    const googlePorvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    const loginUsers = (event) => {
        event.preventDefault()
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                result.user;
                form.reset()
                setSuccess(true)
            })
            .catch(error => {
                console.error(error)
                setErrorMessage(error.message);
            })
    }

    const getResetEmail = event => {
        setUserEmail(event.target.value)
    }


    const forgottenPassword = () => {
        if(!userEmail){
            alert('Please enter your valid user email')
            return
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Please check your email and reset your email')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const googleSignIn = () => {
        signInWithPopup(auth, googlePorvider)
            .then(result => {
                result.user;
            })
            .catch(error => {
                console.error(error)
            })
    }

    const githubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                result.user;
            })
            .catch(error => {
                console.error(error)
            })
    }

    const facebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                result.user;
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className=' bg-indigo-600 p-20'>
            <h1 className='text-white text-center text-5xl'>Please Login</h1>
            <form onSubmit={loginUsers} className='w-1/2 mx-auto'>
                <div className='my-5 flex flex-col'>
                    <label className='text-white mb-3' htmlFor="">Enter your email</label>
                    <input onBlur={getResetEmail} className=' w-full p-2 rounded-md' type="email" name="email" id="" />
                </div>
                <div className=' flex flex-col'>
                    <label className='text-white mb-3' htmlFor="">Enter your password</label>
                    <input className=' w-full p-2 rounded-md' type="password" name="password" id="" />
                </div>
                {success && <p>Login Succesfull</p>}
                <p>{errorMessage}</p>
                <button className=' bg-violet-500 py-3 px-5 rounded-md text-white mt-5 hover:bg-black'>Login</button>

                <p onClick={forgottenPassword}><Link className='text-white hover:underline hover:text-orange-500'>Forgotten Password ?</Link></p>

                <p className='text-white'>Don't have an account ? Please <Link className='text-black' to='/register'>Signup</Link></p>

                <div className=' text-center mt-5 flex justify-center flex-col items-center'>
                    <h1 onClick={googleSignIn} className='bg-white w-1/3 rounded-md p-2 cursor-pointer hover:bg-orange-500 hover:text-white'>Sign in with google</h1>
                    <h1 onClick={facebookSignIn} className='bg-white w-1/3 rounded-md p-2 my-2 cursor-pointer hover:bg-blue-600 hover:text-white'>Sign in with faceook</h1>
                    <h1 onClick={githubSignIn} className='bg-white w-1/3 rounded-md p-2 cursor-pointer hover:bg-black hover:text-white'>Sign in with github</h1>
                </div>
            </form>
        </div>
    );
};

export default Login;