import { combineReducers } from 'redux';

import index from './re_index';
import helloHooks from './re_helloHooks';

export default combineReducers({
    index,
    helloHooks
});