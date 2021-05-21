import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

function HelloHooks(props){
    const [text, setText] = useState('初始文本');
    function changeText(){
        return setText('修改后的文本');
    }
    return(
        <div>
            <p>{text}</p>
            <button onClick={changeText}>{props.user}点击修改文本</button>
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