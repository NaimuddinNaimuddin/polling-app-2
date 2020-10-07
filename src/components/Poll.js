import React from 'react';

function Poll({ poll }) {
    return (
        <div className="Poll">
            Title : { poll.title}  <br />
            Options : { poll.options.map(option => {
            return <div key={Math.random()}>  <input type="radio" name="radio" />  {option}  </div>
        })}
        </div>
    );
}
export default Poll;
