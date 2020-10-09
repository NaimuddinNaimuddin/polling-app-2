import React, { useEffect } from 'react';
import { Spinner, Button } from "react-bootstrap";
import '../styles/PollList.css';
import Poll from '../components/Poll'
import Header from '../components/Header';
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
      <Header heading="POLLING APP" />
      <Button onClick={() => { history.push('/addpoll') }}
        variant="info" className="float-right mt-2 mr-3"> Add Poll </Button>
      <div className="clearfix"></div>
      {
        listState.isLoading ?
          <Spinner animation="border" variant="info" className="Spinner" />
          : listState.response ?
            listState.response.map(poll => {
              return <Poll key={poll._id} poll={poll}
                addOptionHandler={
                  (id, optionText) => {
                    console.log(id, optionText)
                    dispatch(addoptionlistReq({ id, optionText }))
                  }
                }
                deleteOptionHandler={(id, option_text) => {
                  console.log(id, option_text)
                  dispatch(deloptionlistReq({ id, option_text }))
                }}
                deleteHandler={(_id) => { dispatch(dellistReq(_id)) }} />
            }) : ""
      }
    </div>
  );
}
export default PollList;