import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import Header from '../components/Header';
import '../styles/Signup.css';
import { signupReq } from '../redux/action/index'
import { useEffect } from 'react';

function Signup() {
    const dispatch = useDispatch()
    const signupState = useSelector(state => state.SignupReducerstatus)
    const [role, roleUpdate] = useState('')
    const [username, usernameUpdate] = useState('')
    const [password, passwordUpdate] = useState('')
    const [err, errUpdate] = useState('')
    const [success, successUpdate] = useState('')
    useEffect(() => {
        if (signupState.response) {
            if (signupState.response.message) {
                errUpdate(signupState.response.message);
                successUpdate('');
            } else if (signupState.response.data) {
                successUpdate('Signup Success.')
                errUpdate('')
                usernameUpdate('')
                passwordUpdate('')
                roleUpdate('')
            }
        } else {
            successUpdate('')
            errUpdate('')
        }
    }, [signupState])
    const formDataHandler = () => {
        const formData = { username, password, role }
        dispatch(signupReq(formData))
    }
    return (<>
        {
            signupState.isLoading ?
                <Spinner animation="border" variant="info" className="Spinner" /> :
                <div className="Signup">
                    <Header heading="SIGNUP" />
                    <Form className="signup-form"
                        onSubmit={(e) => { e.preventDefault(); formDataHandler() }}>
                        {success ? <Alert variant='success'> {success} </Alert> : ''}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="User Name" value={username}
                                onChange={(event) => { usernameUpdate(event.target.value) }}
                            />
                        </Form.Group>
                        {err ? <Alert variant='danger'> {err} </Alert> : ''}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}
                                onChange={(event) => { passwordUpdate(event.target.value) }} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label> Select Role </Form.Label>
                            <Form.Control as="select"
                                value={role}
                                onChange={(event) => { roleUpdate(event.target.value) }}>
                                <option value=""> Select Role </option>
                                <option value="admin"> Admin </option>
                                <option value="guest"> Guest </option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit"> SIGNUP </Button>
                    </Form>
                </div>
        }
    </>);
}
export default Signup;


