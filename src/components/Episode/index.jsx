import React from 'react'

const Episode = ({ number, title, description }) => (
  <div>
    <h3>Episode {number}
    </h3>
    <h4>{title}
    </h4>
    <p>{description}
    </p>
  </div>)

export default Episode
