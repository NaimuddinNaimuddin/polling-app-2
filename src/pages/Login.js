import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from "react-bootstrap";
import '../styles/Login.css';
import Header from '../components/Header';
import Error from '../components/Error';
import { loginReq } from '../redux/action/index'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';

function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const LoginData = useSelector(state => state.LoginReducerstatus)
    const [username, usernameUpdate] = useState('')
    const [password, passwordUpdate] = useState('')
    const [err, errUpdate] = useState('')

    useEffect(() => {
        if (LoginData.isLogin) {
            history.push('/polllist')
        }
        LoginData.response ?  errUpdate(LoginData.response.data) : errUpdate('')
    }, [LoginData])

    const formDataHandler = () => {
        const formData = { username, password }
        dispatch(loginReq(formData))
    }

    return (<>
        {
            LoginData.isLoading ? " Loading..." :
                <div className="Login">
                    <Header heading="LOGIN" />
                    <Form className="login-form"
                        onSubmit={(e) => { e.preventDefault(); formDataHandler() }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" value={username}
                                onChange={(event) => { usernameUpdate(event.target.value) }}
                            />
                        </Form.Group>
                        <Error heading={err}/>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}
                                onChange={(event) => { passwordUpdate(event.target.value) }} />
                        </Form.Group>
                        <Button variant="primary" type="submit"> LOGIN </Button>
                    </Form>
                </div>
        }
    </>);
}
export default Login;




