import React, { useState } from 'react';
import { connect } from 'react-redux';

function Child1(props) {
    console.log('child1的props:', props);
    const {num, handleClick} = props;
    return (
        <div onClick={() => handleClick(num + 1)}>child1</div>
    )
}

function Child2(props) {
    console.log('child2的props:', props);
    const { text, handleClick } = props;
    return (
        <div>
            child2
            <Grandson text={text} handleClick={handleClick} />
        </div>
    );
}

function Grandson(props) {
    console.log('Grandson的props:', props);
    const { text, handleClick } = props;
    return (
        <div onClick={() => { handleClick(text + 1);}} >grandson</div>
    );
}

function Parent() {
    let [num, setNum] = useState(0);
    let [text, setText] = useState(1);

    return (
        <div>
            <Child1 num={num} handleClick={setNum}/>
            <Child2 text={text} handleClick={setText}/>
        </div>
    );
}

const select = (state) => {
    let helloHooks = state.helloHooks;
    return {
        user: helloHooks.user
    }
}

export default connect(select, null)(Parent);