//import React from 'react';
// import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ id, name, email }) => {

    // const { id, name, email } = props;
    return (
    <div className="card tc dib br3 pa3 ma2 grow bw2 shadow-4-l">
        <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
        <div>
            <h2 className="name">{name}</h2>
            <p className="email">{email}</p>
        </div>
    </div>
);
};
//
// Card.propTypes = {};
//
// Card.defaultProps = {};

export default Card;
