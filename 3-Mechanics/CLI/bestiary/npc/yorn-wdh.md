---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdh
- monster/cr/1-2
- monster/size/medium
- monster/type/humanoid/half-orc
statblock: inline
aliases: ["Yorn"]
---
# [Yorn](3-Mechanics\CLI\bestiary\npc/yorn-wdh.md)
*Source: Waterdeep: Dragon Heist p. 150*  

A burly half-orc Zhentarim in the employ of Manshoon

```statblock
"name": "Yorn (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-orc"
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
"speed": "30 ft."
"skillsaves":
  "Intimidation": !!int "2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Orc"
"cr": "1/2"
"traits":
- "desc": "The thug has advantage on an attack roll against a creature if at least\
    \ one of the thug's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)."
  "name": "Pack Tactics"
- "desc": "When reduced to 0 hit points Yorn drops to 1 hit point instead."
  "name": "Relentless Endurance (1/Day)"
"actions":
- "desc": "The thug makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5\
    \ (1d6 + 2) bludgeoning damage."
  "name": "Mace"
- "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
    \ 5 (1d10) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "WDH"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDH/Yorn.webp"
```
^statblock