import React from 'react'

import PropTypes from 'prop-types'

import './numbers-card.css'

const NumbersCard = (props) => {
  return (
    <div className="numbers-card-numbers-card">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="numbers-card-image"
      />
      <span className="numbers-card-number">{props.number}</span>
      <span className="numbers-card-text">{props.text}</span>
    </div>
  )
}

NumbersCard.defaultProps = {
  imageSrc: '/message-200h.png',
  text: 'sessions',
  imageAlt: 'image',
  number: '2,148',
}

NumbersCard.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  number: PropTypes.string,
}

export default NumbersCard
