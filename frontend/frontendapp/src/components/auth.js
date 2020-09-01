import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form.css';
import { useCookies } from 'react-cookie';

function Auth() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [isLoginView, setIsLoginView] = useState(true);

    const [token, setToken] = useCookies(['mr-token']);

    useEffect(() => {
        console.log(token);
        if (token['mr-token']) window.location.href = '/home';
    }, [token])

    const loginClicked = () => {
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        }).then(resp => resp.json())
            .then(resp => setToken('mr-token', resp.token))
            .catch(error => console.log(error))
    }

    const registerClicked = () => {
        fetch('http://127.0.0.1:8000/api/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username, password, email, address
            })
        })
            .then(data => data.json())
            .then(() => loginClicked())
            .catch(error => console.log(error))
    }

    return (
        <Form className="login-form">
            {isLoginView ? <h1>LOGIN TO PICKBINS</h1> : <h1>REGISTER TO PICKBINS</h1>}
            <FormGroup>
                <Label for="Username">Username</Label>
                <Input type="username" id="Username" placeholder="Username" name="username" value={username}
                    onChange={evt => setUsername(evt.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" id="Password" placeholder="Password" name="password" value={password}
                    onChange={evt => setPassword(evt.target.value)} />
            </FormGroup>
            {isLoginView ? <Button className="btn-lg btn-dark btn-block" onClick={loginClicked}>
                Login
                </Button> :
                <div>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" id="Email" placeholder="Email" name="email" value={email}
                            onChange={evt => setEmail(evt.target.value)} />
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block" onClick={registerClicked}>
                        Register
                </Button>
                </div>}

            {isLoginView ?
                <p onClick={() => setIsLoginView(false)}>You don't have an account? Register here!</p> :
                <p onClick={() => setIsLoginView(true)}>You already have an account? Login here!</p>}
        </Form>
    );
}

export default Auth;

/*
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');


    <FormGroup>
    <FormGroup>
                        <Label for="Address">Address</Label>
                        <Input type="text" name="address" id="Address" placeholder="1234 Main St, City, State(TX) Zip" value={address}
                            onChange={evt => setAddress(evt.target.value)} />
                    </FormGroup>
                        <Label for="Address2">Address 2</Label>
                        <Input type="text" name="address2" id="Address2" placeholder="Apartment, studio, or floor" value={address2}
                            onChange={evt => setAddress2(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="City">City</Label>
                        <Input type="text" name="city" id="City" placeholder="City" value={city}
                            onChange={evt => setCity(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="State">State</Label>
                        <Input type="text" name="state" id="State" placeholder="State eg: TX" value={state}
                            onChange={evt => setState(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Zip">Zip</Label>
                        <Input type="text" name="zip" id="Zip" placeholder="Zip" value={zip}
                            onChange={evt => setZip(evt.target.value)} />
                    </FormGroup>
*/
