import React, { useState } from 'react'
import { Accordion, Card, Button, Col, Form, Row } from 'react-bootstrap'
import { X } from 'react-bootstrap-icons';

function Poll(props) {

    const [optionText, optionTextUpdate] = useState('')

    return (
        < div className="Poll" >
            <Card>
                <Card.Header>  {props.poll.title} </Card.Header>
                <Card.Body>
                    {props.poll.options.map(i => {
                        return <div key={Math.random()} className="m-3">
                            <input type="radio" name="option" /> {i.option}  ......... {i.vote}
                            <Button onClick={() => { props.deleteOptionHandler(props.poll._id, i.option) }}
                                variant="danger" size="sm" className="float-right mt-2"> <X /> </Button>
                        </div>
                    })}
                </Card.Body>
            </Card>

            <Accordion defaultActiveKey="1">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <Button onClick={() => { }}
                                className="mr-2" variant="info"> Add Option </Button>
                            <Button onClick={() => { props.deleteHandler(props.poll._id) }}
                                variant="danger"> Delete Poll </Button>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row className="mt-2 mb-2">
                                <Col xs={10}>
                                    <Form.Control value={optionText}
                                        onChange={(e) => { optionTextUpdate(e.target.value) }}
                                        type="text" placeholder="Enter option here." />
                                </Col>
                                <Col xs={2}>
                                    <Button onClick={() => { props.addOptionHandler(props.poll._id, optionText) }}> Submit  </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </div >
    );
}
export default Poll;
