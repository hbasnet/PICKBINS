import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form.css';
import { useCookies } from 'react-cookie';

function Auth() {

    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip_code, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

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
        fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name, last_name, address, city, zip_code, country, email, username, password, password2
            })
        })
            .then(data => data.json())
            //.then(() => loginClicked())
            .catch(error => console.log(error))
    }

    return (
        <Form className="login-form">
            {isLoginView ?
                <div>
                    <h1>LOGIN TO PICKBINS</h1>
                    <FormGroup>
                        <Label for="Username">Email</Label>
                        <Input type="username" name="username" id="Username" placeholder="Username" value={username}
                            onChange={evt => setUsername(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" id="Password" placeholder="Password" name="password" value={password}
                            onChange={evt => setPassword(evt.target.value)} />
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block" onClick={loginClicked}>
                        Login
                </Button>
                    <p onClick={() => setIsLoginView(false)}>You don't have an account? Register here!</p>
                </div>
                :
                <div>
                    <h1>REGISTER TO PICKBINS</h1>
                    <FormGroup>
                        <Label for="First_Name">First_Name</Label>
                        <Input type="text" name="first_name" id="First_Name" placeholder="First_Name" value={first_name}
                            onChange={evt => setFirstname(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Last_Name">Last_Name</Label>
                        <Input type="text" name="last_name" id="Last_Name" placeholder="Last_Name" value={last_name}
                            onChange={evt => setLastname(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Address">Address</Label>
                        <Input type="text" name="address" id="Address" placeholder="1234 Main St" value={address}
                            onChange={evt => setAddress(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="City">City</Label>
                        <Input type="text" name="city" id="City" placeholder="City" value={city}
                            onChange={evt => setCity(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Zip_Code">Zip_Code</Label>
                        <Input type="text" name="zip_code" id="Zip_Code" placeholder="Zip_Code" value={zip_code}
                            onChange={evt => setZip(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Country">Country</Label>
                        <Input type="text" name="country" id="Country" placeholder="Country" value={country}
                            onChange={evt => setCountry(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" id="Email" placeholder="Email" value={email}
                            onChange={evt => setEmail(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Username">Username</Label>
                        <Input type="username" name="username" id="Username" placeholder="Username" value={username}
                            onChange={evt => setUsername(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" name="password" id="Password" placeholder="Password" value={password}
                            onChange={evt => setPassword(evt.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password2">Confirm Password</Label>
                        <Input type="password" name="password2" id="Password2" placeholder="Password2" value={password2}
                            onChange={evt => setPassword2(evt.target.value)} />
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block" onClick={registerClicked}>
                        Register
                </Button>
                    <p onClick={() => setIsLoginView(true)}>You already have an account? Login here!</p>
                </div>}
        </Form >
    );
}

export default Auth;
