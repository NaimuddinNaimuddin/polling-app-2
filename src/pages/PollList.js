import React, { useEffect } from 'react';
import { Spinner } from "react-bootstrap";
import '../styles/PollList.css';
import Poll from '../components/Poll'
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { listReq } from '../redux/action';

function Home() {
  const dispatch = useDispatch()
  const listState = useSelector(state => state.ListReducerstatus)
  console.log(listState)

  useEffect(() => {
    dispatch(listReq())
  }, [])

  return (
    <div className="Home">
      <Header heading="POLLING APP" />
      {
        listState.isLoading ?
          <Spinner animation="border" variant="info" className="Spinner" />
          : listState.response ?
            listState.response.map(poll => {
              return <Poll key={poll._id} poll={poll} />
            }) : "bh"
      }
    </div>
  );
}
export default Home;
