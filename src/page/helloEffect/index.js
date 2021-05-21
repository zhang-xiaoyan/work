import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
function IncreasingTodoList(props) {
    const [count, setCount] = useState(0);
    // 此处的定位与 componentDidMount 和 componentDidUpdate 相似
    useEffect(() => {
        // 每次 count 增加时，都增加对应的待办项
        const todoList = document.getElementById('todoList');
        const newItem = document.createElement('li');
        newItem.innerHTML = `我是第${count}个待办事项`;
        todoList.append(newItem);
    });
    function addCount() {
        return setCount(count + 1);
    }
    return(
        <div>
            <p>当前共计 {count} 个 todo Item</p>
            <ul id='todoList'></ul>
            <button onClick={addCount}>点我增加一个但办事项</button>
        </div>
    )
}
const select = (state) => {
    let helloHooks = state.helloHooks;
    return {
        user: helloHooks.user
    }
}

export default connect(select, null)(IncreasingTodoList);