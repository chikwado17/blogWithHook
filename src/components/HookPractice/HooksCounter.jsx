import React, { useState } from 'react';

const HooksCounter = () => {

    const initialState = 0;
    const [ count, setCount ] = useState(initialState);

    const handIncrement = () => {
        setCount((preState) => preState + 1);
    }

    const handleReset = () => {
        setCount(initialState)
        console.log(initialState);
    }

    const handleDecrement = () => {
        setCount(preState => preState - 1);
    }

    return (
        <div>
            <h1>count : { count } </h1>
            <button onClick={handIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default HooksCounter;


