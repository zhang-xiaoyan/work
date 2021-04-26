import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';

// 规定props有name属性，且类型是string类型(如果注释组件内使用props.name将报错)
interface IProps {
    text: string;
}
// 规定state有color属性且值只为red或者blue
interface IState {
    color: "red" | "blue";
}

class Index extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            color: 'red'
        };
    }
    render() {
        return (
            <div>TS</div>
        )
    }

}

interface Restate {
    state: {}
}

const select = (state: Restate) => {
    // let index = state.index;
    return {
        // num: index.num
    }
}

export default connect(select, null)(Index);