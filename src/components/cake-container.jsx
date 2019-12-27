import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

export function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.nCakes} </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

// Selectors (usually in a seperate file)
const mapStateToProps = state => { nCakes: state.nCakes };

const mapDispatchToProps = dispatch => { buyCake: () => dispatch(buyCake()) }

export function connect(mapStateToProps, mapDispatchToProps)
(CakeContainer);