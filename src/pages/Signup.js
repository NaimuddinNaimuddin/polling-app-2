import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Spinner } from "react-bootstrap";
import Header from '../components/Header';
import Error from '../components/Error';
import { useHistory } from 'react-router-dom'
import '../styles/Signup.css';
import { signupReq } from '../redux/action/index'
import { useEffect } from 'react';

function Signup() {
    const dispatch = useDispatch()
    const history = useHistory()
    const signupState = useSelector(state => state.SignupReducerstatus)
    const [role, roleUpdate] = useState('')
    const [username, usernameUpdate] = useState('')
    const [password, passwordUpdate] = useState('')
    const [err, errUpdate] = useState('')

    useEffect(() => {
        if (signupState.isRegistion) {
            history.push('/login')
        }
        signupState.error ? errUpdate(signupState.error.message) : errUpdate('')
    }, [signupState.isRegistion])

    const formDataHandler = () => {
        const formData = { username, password, role }
        console.log(formData)
        dispatch(signupReq(formData))
    }

    return (<>
        {
            signupState.isRegistion ?
                <Spinner animation="border" variant="info" className="Spinner" /> :
                <div className="Signup">
                    <Header heading="SIGNUP" />
                    <Form className="signup-form"
                        onSubmit={(e) => { e.preventDefault(); formDataHandler() }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="User Name" value={username}
                                onChange={(event) => { usernameUpdate(event.target.value) }}
                            />
                        </Form.Group>
                        <Error heading={err} />
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


