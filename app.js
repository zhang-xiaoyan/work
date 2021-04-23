import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/rootReducer';

import Index from './src/index';

const store = createStore(reducer, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));