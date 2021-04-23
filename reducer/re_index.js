const initialState = {
    num: 0
};

const index = (state=initialState, action)=>{
    switch (action.type) {
        case 'add':
            return {
                num: action.num
            }
    }
}