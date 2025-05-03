---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdh
- monster/cr/5
- monster/size/medium
- monster/type/humanoid/half-orc
statblock: inline
aliases: ["Hrabbaz"]
---
# [Hrabbaz](3-Mechanics\CLI\bestiary\npc/hrabbaz-wdh.md)
*Source: Waterdeep: Dragon Heist p. 205*  

Hrabbaz is a muscle-bound half-orc with a cleft palate who serves the lord and lady of House Gralhund as a bodyguard. He is well mannered and dresses impeccably-a disarming appearance that belies a murderous heart. Though he has great respect for Lady Yalah Gralhund, he is less fond of her moody husband, and wouldn't be sad to see Orond knocked down a peg or two.

```statblock
"name": "Hrabbaz (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-orc"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "20"
- !!int "15"
- !!int "17"
- !!int "10"
- !!int "14"
- !!int "12"
"speed": "30 ft."
"saves":
  "Strength": !!int "8"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "4"
  "Athletics": !!int "8"
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Orc"
"cr": "5"
"traits":
- "desc": "Hrabbaz can reroll a saving throw that he fails. He must use the new roll."
  "name": "Indomitable (2/Day)"
- "desc": "When Hrabbaz is reduced to 0 hit points but not killed outright, he drops\
    \ to 1 hit point instead."
  "name": "Relentless Endurance (Recharges after a Long Rest)"
- "desc": "As long as Hrabbaz has more than half his hit points left he deals an extra\
    \ 3 (1d6) damage on all hits."
  "name": "Extra Damage"
"actions":
- "desc": "Hrabbaz makes three attacks with his morningstar."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) piercing damage."
  "name": "Morningstar"
"source":
- "WDH"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDH/Hrabbaz.webp"
```
^statblock