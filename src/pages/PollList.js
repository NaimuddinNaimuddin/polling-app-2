import React from 'react';
import '../styles/PollList.css';
import Poll from '../components/Poll'
import Header from '../components/Header';

function Home() {
  const pollList = [{ title: "Your favorite food.", options: ["A", "B", "C", "D"] }]
  return (
    <div className="Home">
      <Header heading="POLLING APP" />
      {
        pollList.map(poll => {
          return <Poll key = {poll.options[0]} poll={poll} />
        })
      }
    </div>
  );
}
export default Home;
