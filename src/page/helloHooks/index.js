import React, { useState } from 'react';
import { connect } from 'react-redux';

function HelloHooks(props){
    const [text, setText] = useState('初始文本');
    const [list, setList] = useState([]);
    function changeText() {
        return setText('修改后的文本');
    }
    function changeList() {
        return setList([1,2,3]);
    }
    return(
        <div>
            <p>文案:{text}</p>
            <p>长度:{list.length}</p>
            <button onClick={changeText}>{props.user}点击修改文本</button>
            <button onClick={changeList}>点击修改数组</button>
        </div>
    );
}

const select = (state) => {
    let helloHooks = state.helloHooks;
    return {
        user: helloHooks.user
    }
}

export default connect(select, null)(HelloHooks);