import React, { useEffect } from 'react';
import { Spinner, Button, Navbar, Nav } from "react-bootstrap";
import '../styles/PollList.css';
import Poll from '../components/Poll'
import { useSelector, useDispatch } from 'react-redux';
import { dellistReq, deloptionlistReq, addoptionlistReq, listReq } from '../redux/action';
import { useHistory } from 'react-router-dom';

function PollList() {
  const history = useHistory()
  const dispatch = useDispatch()
  const listState = useSelector(state => state.ListReducerstatus)
  useEffect(() => {
    dispatch(listReq())
  }, [listState.isDel, listState.isoptionDel, listState.isoptionAdd])
  return (
    <div className="Home">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>POLLING APP</Navbar.Brand>
        <Button onClick={() => { history.push('/addpoll') }}
          variant="info" className="mt-2 mr-3"> Add Poll </Button>
      </Navbar>

      {
        listState.isLoading ?
          <Spinner animation="border" variant="info" className="Spinner" />
          : listState.response ?
            listState.response.map(poll => {
              return <Poll key={poll._id} poll={poll}
                addOptionHandler={
                  (id, optionText) => { dispatch(addoptionlistReq({ id, optionText })) }
                }
                deleteOptionHandler={(id, option_text) => {
                  dispatch(deloptionlistReq({ id, option_text }))
                }}
                deleteHandler={(_id) => { dispatch(dellistReq(_id)) }} />
            }) : ""
      }
    </div>
  );
}
export default PollList;