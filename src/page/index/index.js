import React, {Component, PureComponent} from 'react';
import { connect } from 'react-redux';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { num } = this.props;
        return (
            <div onClick={ this.add }>{ num }</div>
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
    return {
        num: state.num
    }
}

export default connect(select, null)(Index);