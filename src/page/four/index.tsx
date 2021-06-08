import * as React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const handleCount =()=> {
        setTimeout(()=> {
            alert('current count: ' + count);
        }, 3000);
    }

    return(
        <div>
            <p>current count: { count }</p>
            <button onClick={() => setCount(count + 1)}>加</button>
            <button onClick={() => handleCount()}>弹框显示</button>
        </div>
    )
}
export default Counter;