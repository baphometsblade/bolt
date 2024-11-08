```javascript
import React, { useState } from 'react'
import Card from './Card'

function BattleField() {
  const [energy, setEnergy] = useState(10)
  const [playerCards, setPlayerCards] = useState([
    { type: 'teddy', name: 'Naughty Napper', stats: { attack: 5, defense: 3, health: 10, energy: 10 }, specialMove: 'Pillow Pummel', image: '/images/naughty-napper.png' },
    { type: 'action', name: 'Sneaky Snack', stats: { energyCost: 2 }, image: '/images/sneaky-snack.png' },
    { type: 'equipment', name: 'Teddy Armor', stats: { defense: 2 }, image: '/images/teddy-armor.png' },
  ])

  const playCard = (card) => {
    if (card.type === 'teddy' && energy >= card.stats.energy) {
      setEnergy(energy - card.stats.energy)
      // Implement battle logic here
    } else if (card.type === 'action' && energy >= card.stats.energyCost) {
      setEnergy(energy - card.stats.energyCost)
      // Implement action card effects
    }
  }

  return (
    <div className="battle-field">
      <h2>Energy: {energy}</h2>
      <div className="player-cards">
        {playerCards.map((card, index) => (
          <Card key={index} {...card} onClick={() => playCard(card)} />
        ))}
      </div>
    </div>
  )
}

export default BattleField
```
