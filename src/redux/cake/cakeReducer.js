import { BUY_CAKE } from './cakeTypes';

const initialState = {
    nCakes: 10
};

export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                nCakes: state.nCakes > 0 ? state.nCakes - 1 : 0
            }
        default: return state
    }
}