export const loggedIn = (payload) => {
    return (dispatch, getState)=>
    {
        dispatch({type: 'LOGIN_SUCCESS',payload})
    }
}
