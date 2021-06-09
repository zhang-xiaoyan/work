import * as React from 'react';

type StateType = {
    count: number
};
type ActionType = {
    type: 'reset' | 'decrement' | 'increment'
}
const initialState = {
    count: 0
}
function reducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}
function Counter({initialCount = 0}) {
    const [state, dispatch] = React.useReducer(reducer, {count: initialCount});
    return(
        <div>
            <p>Count: { state.count }</p>
            <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
            <button onClick={() => dispatch({ type: 'increment' })}> + </button>
            <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
        </div>
    )
}
export default Counter;