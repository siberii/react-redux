import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const nCakes = useSelector(state => state.nCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes - {nCakes} </h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
