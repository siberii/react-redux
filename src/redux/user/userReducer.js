import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE
} from "./userTypes"

const initialState = {
    isLoading: false,
    users: [],
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                isLoading: false,
                users: payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                isLoading: false,
                users: [],
                error: payload
            }

        default:
            return state
    }
}
