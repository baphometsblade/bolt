```javascript
import React from 'react'
import PropTypes from 'prop-types'

function Card({ type, name, stats, specialMove, image }) {
  return (
    <div className={`card ${type}`}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <ul>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
      {specialMove && <p>Special Move: {specialMove}</p>}
    </div>
  )
}

Card.propTypes = {
  type: PropTypes.oneOf(['teddy', 'action', 'equipment']).isRequired,
  name: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  specialMove: PropTypes.string,
  image: PropTypes.string.isRequired,
}

export default Card
```
