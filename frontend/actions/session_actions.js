import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER  = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER  = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS  = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (payload) => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

//errors = array
export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}


export const createUser = (user) => (dispatch) => {
    return (
        SessionApiUtil.signup(user)
            .then(
                // on success, dispatch receiveCurrentUser with result
                payload => dispatch(receiveCurrentUser(payload)),
                // on failure, dispatch receiveErrors with result
                errors => dispatch(receiveErrors(errors.responseJSON))
                // errors => console.log(errors)
            )
    )
}

export const signIn = (user) => (dispatch) => {
    return (
        SessionApiUtil.login(user)
            .then(
                // on success, dispatch receiveCurrentUser with result
                currentUser => dispatch(receiveCurrentUser(currentUser)),
                // on failure, dispatch receiveErrors with result
                errors => dispatch(receiveErrors(errors.responseJSON))
            )
    )
}

export const signOut = () => (dispatch) => {
    return (
        SessionApiUtil.logout()
            .then( () => dispatch(logoutCurrentUser()))
    )
}


