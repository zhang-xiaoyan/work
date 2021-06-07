import React, { Component } from 'react';
import { connect } from 'react-redux';

import TestTs from '../testTs/index';
import HelloHooks from '../helloHooks/index';
import HelloEffect from '../helloEffect/index';
import Example from '../testMemo';
import { User, User1, User2 } from '../first/index';
import { UserMsg } from '../second/index';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { num } = this.props;
        return (
            <div onClick={ this.add }>
                {/*<div>测试 redux 的数据：{ num }</div>*/}
                {/*<TestTs />*/}
                {/*<HelloHooks />*/}
                {/*<HelloEffect />*/}
                {/*<Example />*/}
                {/*<User name='first' age={25} />*/}
                {/*<User1 name='first-1' age={26}>I am children text!</User1>*/}
                {/*<User2 name='first-2' age={27}>I am children text!!</User2>*/}
                <UserMsg name='Joe' age={30} />
            </div>
        )
    }

    add =()=> {
        const { dispatch } = this.props;
        dispatch({
            type: 'add',
            num: 100
        });
    }
}

const select = (state) => {
    let index = state.index;
    return {
        num: index.num
    }
}

export default connect(select, null)(Index);