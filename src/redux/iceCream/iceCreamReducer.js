import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState = {
    nIceCreams: 20
}

export const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                nIceCreams: state.nIceCreams > 0 ? --state.nIceCreams : 0
            }

        default:
            return state
    }
}
