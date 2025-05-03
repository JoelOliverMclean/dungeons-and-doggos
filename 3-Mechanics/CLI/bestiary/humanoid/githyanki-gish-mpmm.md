---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/10
- monster/environment/desert
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/gith
- monster/type/humanoid/wizard
statblock: inline
aliases: ["Githyanki Gish"]
---
# [Githyanki Gish](3-Mechanics\CLI\bestiary\humanoid/githyanki-gish-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 140, Mordenkainen's Tome of Foes p. 205*  

Gish blend their magical abilities with swordplay to become dangerous foes in battle. Their specialized capabilities make them well suited for assassination, raiding, and espionage.

## Githyanki

Githyanki descend from an ancient people who were also the progenitors of githzerai (also in this book). These tall, gaunt folk have potent psionic powers and dwell, for the most part, on the Astral Plane. Among the best-known githyanki are the bellicose followers of the Lich Queen Vlaakith. They terrorize the Astral Plane, raiding into other planes to plunder the multiverse of its magic and riches.

```statblock
"name": "Githyanki Gish (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "gith, wizard"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[half plate](/3-Mechanics/CLI/items/half-plate-armor.md)"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "17"
- !!int "15"
- !!int "14"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Stealth": !!int "6"
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Gith"
"cr": "10"
"traits":
- "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [light](/3-Mechanics/CLI/spells/light.md), [mage hand](/3-Mechanics/CLI/spells/mage-hand.md)\
    \ (the hand is invisible), [message](/3-Mechanics/CLI/spells/message.md)\n\n1/day\
    \ each: [dimension door](/3-Mechanics/CLI/spells/dimension-door.md), [plane\
    \ shift](/3-Mechanics/CLI/spells/plane-shift.md), [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md)\n\
    \n3/day each: [fireball](/3-Mechanics/CLI/spells/fireball.md), [invisibility](/3-Mechanics/CLI/spells/invisibility.md),\
    \ [nondetection](/3-Mechanics/CLI/spells/nondetection.md) (self only)"
  "name": "Spellcasting (Psionics)"
"actions":
- "desc": "The githyanki makes three Longsword or Telekinetic Bolt attacks, or it\
    \ makes one of those attacks and uses Spellcasting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands,\
    \ plus 22 (5d8) psychic damage."
  "name": "Longsword"
- "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 28\
    \ (8d6) force damage."
  "name": "Telekinetic Bolt"
"bonus_actions":
- "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
"source":
- "MPMM"
- "MTF"
- "BMT"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/MPMM/Githyanki%20Gish.webp"
```
^statblock

## Environment

desert, mountain, urban