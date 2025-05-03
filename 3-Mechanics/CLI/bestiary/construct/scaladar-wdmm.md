---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/8
- monster/size/huge
- monster/type/construct
statblock: inline
aliases: ["Scaladar"]
---
# [Scaladar](3-Mechanics\CLI\bestiary\construct/scaladar-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 315*  

Scaladar are constructs created by Trobriand, one of Halaster's apprentices. They move and attack like giant scorpions, grabbing prey with two large pincer claws and delivering a deadly pulse of lightning with their metal stinger tails.

```statblock
"name": "Scaladar (WDMM)"
"size": "Huge"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "94"
"hit_dice": "7d12 + 49"
"stats":
- !!int "19"
- !!int "10"
- !!int "25"
- !!int "1"
- !!int "12"
- !!int "1"
"speed": "30 ft., climb 20 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "force, lightning, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "8"
"traits":
- "desc": "Whenever the scaladar is subjected to lightning damage, it takes no damage,\
    \ and its sting deals an extra 11 (2d10) lightning damage until the end of its\
    \ next turn."
  "name": "Lightning Absorption"
- "desc": "The scaladar knows the location of other scaladar within 100 feet of it,\
    \ and it can sense when any of them take damage."
  "name": "Scaladar Link"
"actions":
- "desc": "The scaladar makes three attacks: two with its claws and one with its sting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 10\
    \ (1d12 + 4) bludgeoning damage, and the target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 15). The scaladar has two claws, each of which can grapple one target."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9\
    \ (1d10 + 4) piercing damage plus 11 (2d10) lightning damage."
  "name": "Sting"
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Scaladar.webp"
```
^statblock