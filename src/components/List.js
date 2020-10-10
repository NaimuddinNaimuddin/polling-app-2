import React, { useState } from 'react'
import { Card, Button, Spinner } from 'react-bootstrap'

function List(props) {

    const [text, textUpdate] = useState('')
    const [isBtnloading, isBtnloadingUpdate] = useState('')
    return (
        <div className="Poll">
            <Card>
                <Card.Header>  {props.poll.title} </Card.Header>
                <Card.Body>
                    {props.poll.options.map(i => {
                        return <div key={Math.random()} className="m-3">
                            <input value={i.option}
                                onChange={(e) => { textUpdate(e.target.value) }}
                                type="radio"
                            /> {i.option}
                        </div>
                    })}
                    <Button onClick={() => { props.voteHandler(props.poll._id, text) }} >
                       VOTE
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default List;
