import React, { useState } from "react";
import { Form, Button, Container, Jumbotron } from "react-bootstrap";
import { addlistReq } from "../redux/action/index";
import Header from '../components/Header'
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

const AddPoll = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const listState = useSelector((state) => state.ListReducerstatus);
    const [title, settitle] = useState('');
    const [options, setoptions] = useState([]);

    const handleAddOption = () => {
        setoptions((prevState) => [...prevState, ""]);
    };
    const handleonChangeAddOption = (e, i) => {
        e.preventDefault();
        const data = [...options];
        data[i] = e.target.value;
        setoptions(data);
    };
    const handleRemoveOption = (i) => {
        const data = [...options];
        data.splice(i, 1);
        setoptions(data);
    };
    const formdataHandler = () => {
        dispatch(addlistReq({ title, options }))
    }
    if (listState.isLoading === true ) {
        return <Redirect to="/polllist" />
    }
    return (
        <div>
            <Header heading="Addpoll" />
            <Jumbotron>
                <Container>
                    <Form.Group>
                        <Form.Label> <h2>Add Poll</h2> </Form.Label>
                        <Form.Control type="text" placeholder="Enter the question here"
                            value={title} onChange={(e) => settitle(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    {options.map((option, i) => (
                        <div key={i}>
                            <Form.Label>Option:{i + 1}</Form.Label>
                                <Form.Control type="text" placeholder="Enter your option here"
                                    value={options[i]} onChange={(e) => handleonChangeAddOption(e, i)}
                                />
                                <Button onClick={() => { handleRemoveOption(i); }} variant="danger" className="mt-2"> Delete Option</Button>
                        </div>
                    ))}
                    <div>
                        <Button onClick={handleAddOption} variant="primary" className="mt-2 mr-2"> Add Option </Button> <br/>
                        <Button onClick={formdataHandler} variant="success" className="mt-2"> Submit Poll </Button>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
};
export default AddPoll;