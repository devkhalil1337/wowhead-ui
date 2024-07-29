import React from 'react';
import './App.css';
import ItemCard from './ItemCard';

const items = [
  {
    "id": "100000-steps",
    "boss_drop": [
      "The Beast in the Ice",
      "Echo of Varshan"
    ],
    "flavor": "\"While many Barbarians remained in the Dreadlands, small groups from the Oxen, Crane and Bear tribes instead chose to search the land for a new home.\" - A History of the Children of Bul-Kathos",
    "affixes": [
      "+{{x}} Maximum Evade Charges",
      "+{{x}} Dexterity",
      "+{{x}}% Damage when Swapping Weapons",
      "+{{x}}% Movement Speed",
      "+{{x}} to Ground Stomp (Barbarian Only)"
    ],
    "class": "barbarian",
    "slot": "boots",
    "power": "After gaining the final damage bonus from the Walking Arsenal Key Passive, you automatically cast Ground Stomp and gain {{x}} Fury. This cannot happen more than once every {{x}} seconds.",
    "name": "100,000 Steps",
    "type": "armor",
    "mythic": false
  },
  {
    "id": "ahavarion",
    "slot": "staff",
    "flavor": "\"The angel Lycander left us a portion of her power in this spear. It is all the proof I need that she watches over us still.\" - Oracle Argoysni",
    "affixes": [
      "+{{x}}% Critical Strike Chance",
      "+{{x}}% Attack Speed",
      "+{{x}}% Damage",
      "Lucky Hit: Up to a +{{x}}% Chance to Stun for {{x}} Seconds"
    ],
    "power": "Gain a random Shrine effect for {{x}} seconds after killing an Elite enemy. Can only occur once every {{x}} seconds.",
    "name": "Ahavarion, Spear of Lycander",
    "type": "weapon",
    "mythic": true
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </header>
    </div>
  );
}

export default App;
