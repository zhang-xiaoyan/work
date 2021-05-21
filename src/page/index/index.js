import React, { Component } from 'react';
import { connect } from 'react-redux';

import TestTs from '../testTs/index';
import HelloHooks from '../helloHooks/index';

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
                <HelloHooks />
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