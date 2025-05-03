---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/16
- monster/size/gargantuan
- monster/type/construct
statblock: inline
aliases: ["Bore Worm"]
---
# [Bore Worm](3-Mechanics\CLI\bestiary\construct/bore-worm-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 171*  

Trobriand modeled this 100-foot-long, 15-foot-diameter drilling machine after a purple worm. Unless Trobriand commands it to do otherwise, the worm tirelessly moves through well-worn tunnels and trenches. It mindlessly attacks anything that gets in its way, and occasionally ventures up to level 12 or down to level 14. Characters hear it long before they see it.

```statblock
"name": "Bore Worm (WDMM)"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "247"
"hit_dice": "15d20 + 90"
"stats":
- !!int "28"
- !!int "7"
- !!int "22"
- !!int "1"
- !!int "8"
- !!int "4"
"speed": "50 ft., burrow 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "11"
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "blindsight 30 ft., tremorsense 60 ft., passive Perception 9"
"languages": ""
"cr": "16"
"traits":
- "desc": "The worm can burrow through solid rock at half its burrow speed and leaves\
    \ a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
- "desc": "The worm regains 10 hit points at the start of each of its turns if it\
    \ has at least 1 hit point."
  "name": "Regeneration"
"actions":
- "desc": "The worm makes two attacks: one with its grinding jaws and one with its\
    \ stinger."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22\
    \ (3d8 + 9) slashing damage."
  "name": "Grinding Jaws"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit:\
    \ 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution\
    \ saving throw, taking 42 (12d6) poison damage on a failed save, or half as\
    \ much damage on a successful one."
  "name": "Tail Stinger"
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Bore%20Worm.webp"
```
^statblock