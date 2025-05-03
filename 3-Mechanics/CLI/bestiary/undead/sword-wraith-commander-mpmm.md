---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/8
- monster/environment/grassland
- monster/environment/swamp
- monster/size/medium
- monster/type/undead
statblock: inline
aliases: ["Sword Wraith Commander"]
---
# [Sword Wraith Commander](3-Mechanics\CLI\bestiary\undead/sword-wraith-commander-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 239, Mordenkainen's Tome of Foes p. 241*  

Sword wraith commanders haunt battlefields, attacking anyone who questions their valor but looking kindly on those who sing their praises.

## Sword Wraiths

When glory-obsessed warriors die in battle without honor, they might haunt the site as sword wraiths.

```statblock
"name": "Sword Wraith Commander (MPMM)"
"size": "Medium"
"type": "undead"
"alignment": "Typically  Lawful Evil"
"ac": !!int "18"
"ac_class": "[breastplate](/3-Mechanics/CLI/items/breastplate.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned),\
  \ [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "8"
"traits":
- "desc": "The commander and any other sword wraiths within 30 feet of it have advantage\
    \ on saving throws against effects that turn Undead."
  "name": "Turning Defiance"
- "desc": "The commander doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The commander makes two Longsword or Longbow attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 6 (1d8 + 2) piercing damage."
  "name": "Longbow"
- "desc": "If the commander has taken damage during this combat, it gives itself advantage\
    \ on attack rolls until the end of its next turn, and 1d4 + 1 [sword wraith\
    \ warriors](/3-Mechanics/CLI/bestiary/undead/sword-wraith-warrior-mpmm.md) appear\
    \ in unoccupied spaces within 30 feet of it. The warriors last until they drop\
    \ to 0 hit points, and they take their turns immediately after the commander's\
    \ turn on the same initiative count."
  "name": "Call to Honor (1/Day)"
"bonus_actions":
- "desc": "The commander makes one Longsword or Longbow attack, which deals an extra\
    \ 9 (2d8) necrotic damage on a hit, and attack rolls against it have advantage\
    \ until the start of its next turn."
  "name": "Martial Fury"
"source":
- "MPMM"
- "MTF"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/MPMM/Sword%20Wraith%20Commander.webp"
```
^statblock

## Environment

grassland, swamp