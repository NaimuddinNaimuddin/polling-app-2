import React, { useEffect, useState } from 'react';
import { Spinner, Alert, Navbar } from "react-bootstrap";
import '../styles/PollList.css';
import List from '../components/List';
import { useSelector, useDispatch } from 'react-redux';
import { listReq, voteReq } from '../redux/action';
import { useHistory } from 'react-router-dom';

function Guest() {
    const listState = useSelector(state => state.ListReducerstatus)
    const history = useHistory()
    const dispatch = useDispatch()
    const [success, successUpdate] = useState('')
    const [err, errUpdate] = useState('')
    console.log(listState)
    useEffect(() => {
        dispatch(listReq())
    }, [])

    return (
        <div className="Home">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>POLLING APP</Navbar.Brand>
            </Navbar>
            {listState.isVoteLoading ?
                <Spinner className="ml-5 mt-2" animation="border" variant="success" />
                : ''}
            {  success ? <Alert className="ml-4 mr-4 mt-2" variant="success"> {success} </Alert> : ''}
            {  err ? <Alert className="ml-4 mr-4 mt-2" variant="danger"> {err} </Alert> : ''}
            {
                listState.isLoading ?
                    <Spinner animation="border" variant="info" className="Spinner" />
                    : listState.response ?
                        listState.response.map(poll => {
                            return <List isVoteLoading={listState.isVoteLoading ? true : false}
                                key={poll._id} poll={poll}
                                voteHandler={(id, text) => {
                                    console.log(id, text);
                                    dispatch(voteReq({ id, text }))
                                }} />
                        }) : ""
            }
        </div>
    );
}
export default Guest;