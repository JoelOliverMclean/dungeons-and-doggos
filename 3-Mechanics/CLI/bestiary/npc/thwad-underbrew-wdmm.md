---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/9
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Thwad Underbrew"]
---
# [Thwad Underbrew](3-Mechanics\CLI\bestiary\npc/thwad-underbrew-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 204*  

Thwad Underbrew is a former champion of Gorm Gulthyn (the dwarven god of vigilance) who long ago set out to rid Undermountain of the evil that is Halaster Blackcloak. Halaster defeated Underbrew but offered to spare the dwarf's life if he vowed to serve the Mad Mage as an enforcer, ridding the dungeon of other invaders. Unwilling to face his own mortal end, Underbrew made this vow and convinced himself over time that the executions he performed were acts of mercy, because those he killed would never be forced to turn against their beliefs as he had. In time, these acts stopped weighing on Underbrew's conscience. In fact, the dwarf began to enjoy his grisly work.

```statblock
"name": "Thwad Underbrew (WDMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Neutral Evil"
"ac": !!int "18"
"ac_class": "[plate armor](/3-Mechanics/CLI/items/plate-armor.md)"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"stats":
- !!int "20"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "12"
"speed": "30 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "9"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "any one language (usually Common)"
"cr": "9"
"traits":
- "desc": "Thwad rerolls a failed saving throw."
  "name": "Indomitable (2/Day)"
- "desc": "As a bonus action, Thwad can regain 20 hit points."
  "name": "Second Wind (Recharges after a Short or Long Rest)"
"actions":
- "desc": "Thwad makes three attacks with his maul or his shortbow."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12\
    \ (2d6 + 5) bludgeoning damage, plus 7 (2d6) bludgeoning damage if Thwad has\
    \ more than half of his total hit points remaining."
  "name": "Maul"
- "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if Thwad has more\
    \ than half of its total hit points remaining."
  "name": "Shortbow"
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Thwad%20Underbrew.webp"
```
^statblock