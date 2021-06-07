import * as React from 'react';

export const Counter:React.FC<{initial: number}> =({initial = 0})=> {
    const [count, setCount] = React.useState(initial);
    return(
        <div>
           <p>Count: { count }</p>
           <button onClick={add}>加</button>
           <button onClick={plus}>减</button>
        </div>
    )
    function add() {
        setCount(count + 1);
    }
    function plus() {
        setCount(count - 1);
    }
}