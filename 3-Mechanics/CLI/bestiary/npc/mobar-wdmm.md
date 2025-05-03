---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/2
- monster/size/small
- monster/type/humanoid/goblinoid
- monster/type/humanoid/shapechanger
statblock: inline
aliases: ["Mobar"]
---
# [Mobar](3-Mechanics\CLI\bestiary\npc/mobar-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 77*  

```statblock
"name": "Mobar (WDMM)"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid, shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "42"
"hit_dice": "7d6"
"stats":
- !!int "8"
- !!int "17"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "8"
"speed": "30 ft. (climb 30 ft. fly 60 ft. in bat or hybrid form)"
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Goblin (can't speak in bat form)"
"cr": "2"
"traits":
- "desc": "Mobar can use its action to polymorph into a Medium bat-humanoid hybrid,\
    \ or into a Large giant bat, or back into its true form, which is humanoid. Its\
    \ statistics, other than its size, are the same in each form. Any equipment it\
    \ is wearing or carrying isn't transformed. It reverts to its true form if it\
    \ dies."
  "name": "Shapechanger"
- "desc": "Mobar has blindsight out to a range of 60 feet as long as it's not [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened)."
  "name": "Echolocation (Bat or Hybrid Form Only)"
- "desc": "Mobar has advantage on Wisdom (Perception) checks that rely on hearing."
  "name": "Keen Hearing"
- "desc": "Mobar can take the Disengage or Hide action as a bonus action on each of\
    \ its turns."
  "name": "Nimble Escape (Humanoid Form Only)"
- "desc": "While in sunlight, Mobar has disadvantage on attack rolls, as well as on\
    \ Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "Due to poor depth perception, Mobar has disadvantage on any attack roll\
    \ against a target more than 30 feet away."
  "name": "Blind Eye"
"actions":
- "desc": "In humanoid form, Mobar makes two scimitar attacks or two shortbow attacks.\
    \ In hybrid form, it can make one bite attack and one scimitar attack."
  "name": "Multiattack (Humanoid or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6\
    \ (1d6 + 3) piercing damage, and Mobar gains temporary hit points equal to the\
    \ damage dealt. If the target is a humanoid, it must succeed on a DC 10 Constitution\
    \ saving throw or be cursed with werebat lycanthropy."
  "name": "Bite (Bat or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage."
  "name": "Scimitar (Humanoid or Hybrid Form Only)"
- "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit:\
    \ 6 (1d6 + 3) piercing damage."
  "name": "Shortbow (Humanoid or Hybrid Form Only)"
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Mobar.webp"
```
^statblock