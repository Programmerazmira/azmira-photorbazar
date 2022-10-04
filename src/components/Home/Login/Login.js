
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../../firebase.init';
import { getAuth } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';



const auth =getAuth(app);

const Login = () => {
    const[signInWithGoogle]= useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathName ||'/';
    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from,{replace:true})
        })
    }
    
    
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');

    const handleEmailBlur =event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur =event =>{
        setPassword(event.target.value);
    }
    const handleFormSubmit =event =>{
        console.log('form submitted',email,password);
        event.preventDefault();
    }
    return (
        <div className='w-50 mx-auto login mt-5'>
            <h2 className='text-primary'>Please Login!!</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Button onSubmit={handleFormSubmit} variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <Button className='mt-2' onClick={handleGoogleSignIn} variant="primary" type="submit">
                    Google Sign In
                </Button>
            </Form>
        </div>
    );
};

export default Login;