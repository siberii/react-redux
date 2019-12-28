import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Icecream - {props.nIceCreams} </h2>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
    );
};

// Selectors (usually in a seperate file)
const mapStateToProps = state => {
    return {
        nIceCreams: state.iceCream.nIceCreams 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);