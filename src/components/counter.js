import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);


    return (
        <div>
            <input type="number" value={count} onchange={((e) =>setCount(parseFloat(e.target.value)))}></input>
            <p>Le compteur est à : {count}</p>
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
            <button onClick={() => setCount(count - 1)}>
                -1
            </button>
        </div>
    );
}

export default Counter;