const init = {
    isLogged: false,
    name: null,
    lastName: null,
    type: null
};


const rootReducer = (state = init, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                isLogged: true,
                name: action.payload.globalName,
                lastName: action.payload.globalLast,
                type: action.payload.globalType,
                creds:action.payload.globalCreds
            };
        default:
            return state
    }
};
export default rootReducer;
