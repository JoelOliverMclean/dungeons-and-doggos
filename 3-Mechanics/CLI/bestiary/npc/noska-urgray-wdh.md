---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdh
- monster/cr/1-2
- monster/size/medium
- monster/type/humanoid/dwarf
statblock: inline
aliases: ["Noska Ur'gray"]
---
# [Noska Ur'gray](3-Mechanics\CLI\bestiary\npc/noska-urgray-wdh.md)
*Source: Waterdeep: Dragon Heist p. 213*  

Noska is a ruthless enforcer in the Xanathar Guild. A green slime in Undermountain dissolved his left hand and forearm, and the lost appendage has been replaced with a heavy crossbow that attaches to the stump.

```statblock
"name": "Noska Ur'gray (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "11"
"ac_class": "[leather armor](/3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "15"
- !!int "11"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "25 ft."
"skillsaves":
  "Intimidation": !!int "2"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Dwarvish"
"cr": "1/2"
"traits":
- "desc": "Noska has advantage on an attack roll against a creature if at least one\
    \ of Noska's allies is within 5 feet of the creature and the ally isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- "desc": "Noska has advantage on saving throws against poison and resistance to poison\
    \ damage."
  "name": "Dwarven Resilience"
- "desc": "Noska has disadvantage on Strength checks made to climb, due to his disability."
  "name": "Difficult Climber"
"actions":
- "desc": "Noska makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5\
    \ (1d6 + 2) bludgeoning damage."
  "name": "Mace"
- "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
    \ 5 (1d10) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "WDH"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDH/Noska%20Ur%27gray.webp"
```
^statblock