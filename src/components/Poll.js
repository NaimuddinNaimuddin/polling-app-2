import React from 'react';

function Poll({ poll }) {
    return (
        <div className="Poll">
            { poll.title}
            {poll.options.map(i => {
                return <div key={Math.random()}>
                    <input type="radio" name="option" /> {i.option}
                </div>
            })}
        </div>
    );
}
export default Poll;
