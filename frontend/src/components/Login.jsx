import React, { useState } from 'react'
import userServices from '../services/userServices';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();
    const user = {
        email: "skaiste@gmail.com",
        password: "labas123"
    };
   
    const handleSubmit = e => {
        
        
        

        if (email === user.email || email === user.username) {
            if (password === user.password) {
                console.log("User loged in")
            }  else {
                console.log("Wrong password")
            }
        } else {

            console.log("Please check your Username or Email");
        }
        history('/form');

        const setLogin = {
            email: email,
            password: password
        }

        userServices.getLogIn(setLogin)

        setEmail('');
        setPassword('');
    }

    return (
        <div className="container">
            <h1 className='text-center my-3 mb-5'>LogIn</h1>
            <Form className='w-80 m-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className='bg-light' type="email" placeholder="Enter Email"
                        name='text' value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control className='bg-light' type="password" placeholder="Enter Password" name='text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required
                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default LogIn