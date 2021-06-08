import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from '../four/index';

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
                <Counter />
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