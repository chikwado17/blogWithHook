import React, { useState } from 'react';


const HooksComponent = () => {
 
    const [ count, setCount ] = useState(0);

    const [ name, SetName ] = useState("Emmanuel");
 
 
    return ( 
        <div>
            <h1>Count : { count } </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <br/>
            <h1>Name: { name }</h1>
            <button onClick={() => SetName('Chikwado')}>Change Name</button>
        </div>
     );
}
 
export default HooksComponent;