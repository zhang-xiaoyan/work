const initialState = {
    user: 'test'
};

const helloHooks = (state=initialState, action)=>{
    switch (action.type) {
        case 'changeUser':
            return {
                user: action.user
            }
        default:
            return state;
    }
}

export default helloHooks;