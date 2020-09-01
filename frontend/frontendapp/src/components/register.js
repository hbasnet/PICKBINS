import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form.css';

class RegisterForm extends Component {

    state = {
        credentials: { username: '', password: '' }
    }

    register = event => {
        fetch('http://127.0.0.1:8000/api/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .then(data => data.json())
            .then(
                data => {
                    console.log(data);
                }
            ).catch(error => console.error(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
    }

    render() {
        return (
            <Form className="login-form">
                <h1>REGISTER TO PICKBINS</h1>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="username" placeholder="Username" name="username" value={this.state.credentials.username} onChange={this.inputChanged} />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" name="password" value={this.state.credentials.password} onChange={this.inputChanged} />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block" onClick={this.register}>
                    Register
                </Button>
                <div className="text-center">
                    <Link to='/'><p>Login</p></Link>
                </div>
            </Form>
        );
    }
}

export default RegisterForm;
