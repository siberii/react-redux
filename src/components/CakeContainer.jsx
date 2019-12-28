import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.nCakes} </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

// Selectors (usually in a seperate file)
const mapStateToProps = state => {
    return {
        nCakes: state.nCakes 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);