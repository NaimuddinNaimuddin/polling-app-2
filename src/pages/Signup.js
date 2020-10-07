import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from "react-bootstrap";
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
    const [role] = useState('admin')
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
        const formData = { username, password, role: role }
        dispatch(signupReq(formData))
    }

    return (<>
        {
            signupState.isRegistion ? 'Loading...' :
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
                        <Button variant="primary" type="submit"> SIGNUP </Button>
                    </Form>
                </div>
        }
    </>);
}
export default Signup;


