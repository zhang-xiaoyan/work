import React, { useState, useEffect, useMemo } from 'react';
export  default function Example(props) {
    const [count, setCount] = useState(0);
    const [foo] = useState("foo");

    // const main = (
    //     <div>
    //         <Item key={1} x={1} foo={foo} />
    //         <Item key={2} x={2} foo={foo} />
    //         <Item key={3} x={3} foo={foo} />
    //         <Item key={4} x={4} foo={foo} />
    //         <Item key={5} x={5} foo={foo} />
    //     </div>
    // );

    const main = useMemo(() => {
        return(
            <div>
                <Item key={1} x={1} foo={foo} />
                <Item key={2} x={2} foo={foo} />
                <Item key={3} x={3} foo={foo} />
                <Item key={4} x={4} foo={foo} />
                <Item key={5} x={5} foo={foo} />
            </div>
        )
    }, [foo]);

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>setCount</button>
            {main}
        </div>
    );
}

function Item(props) {
    console.log('item:', props);
    return(
        <div>{props.foo}</div>
    )
}