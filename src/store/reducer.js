export const initialState = {
    messages: []
};

export const NEW_MESSAGE = 'NEW_MESSAGE';

function reducer(state, action) {
    switch(action.type){
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.message
                ]
            }
        default:
            return state;
    }
}

export default reducer;
