import React from 'react';

function Counter(props: { counterNumber: string; counterTitle: string }) {
    return (
        <div className="counter-item">
            <h2>{props.counterNumber}</h2>
            <p>{props.counterTitle}</p>
        </div>
    );
}

export default Counter;