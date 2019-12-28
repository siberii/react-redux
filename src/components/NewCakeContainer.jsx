import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of cakes - {props.nCakes} </h2>
            <input
                type="text"
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake(s)
            </button>
        </div>
    );
};

// Selectors (usually in a seperate file)
const mapStateToProps = state => {
    return {
        nCakes: state.cake.nCakes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer);