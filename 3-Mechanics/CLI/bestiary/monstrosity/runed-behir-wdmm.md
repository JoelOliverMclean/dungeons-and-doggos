---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/11
- monster/size/huge
- monster/type/monstrosity
statblock: inline
aliases: ["Runed Behir"]
---
# [Runed Behir](3-Mechanics\CLI\bestiary\monstrosity/runed-behir-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 158*  

```statblock
"name": "Runed Behir (WDMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"stats":
- !!int "23"
- !!int "16"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "12"
"speed": "50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "6"
"damage_immunities": "lightning"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Draconic"
"cr": "11"
"actions":
- "desc": "The behir makes two attacks: one with its bite and one to constrict."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22\
    \ (3d10 + 6) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller\
    \ creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing\
    \ damage. The target is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 16) if the behir isn't already constricting a creature, and the target\
    \ is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained) until this\
    \ grapple ends."
  "name": "Constrict"
- "desc": "The behir exhales a line of lightning that is 20 feet long and 5 feet wide.\
    \ Each creature in that line must make a DC 16 Dexterity saving throw, taking\
    \ 66 (12d10) lightning damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Lightning Breath (Recharge 5-6)"
- "desc": "The behir makes one bite attack against a Medium or smaller target it is\
    \ grappling. If the attack hits, the target is also swallowed, and the grapple\
    \ ends. While swallowed, the target is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded)\
    \ and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained), it has total\
    \ cover against attacks and other effects outside the behir, and it takes 21 (6d6)\
    \ acid damage at the start of each of the behir's turns. A behir can have only\
    \ one creature swallowed at a time.\n\nIf the behir takes 30 damage or more on\
    \ a single turn from the swallowed creature, the behir must succeed on a DC 14\
    \ Constitution saving throw at the end of that turn or regurgitate the creature,\
    \ which falls [prone](/3-Mechanics/CLI/rules/conditions.md#prone) in a space within\
    \ 10 feet of the behir. If the behir dies, a swallowed creature is no longer [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ by it and can escape from the corpse by using 15 feet of movement, exiting [prone](/3-Mechanics/CLI/rules/conditions.md#prone)."
  "name": "Swallow"
"legendary_actions":
- "desc": "The behir casts [color spray](/3-Mechanics/CLI/spells/color-spray.md) or\
    \ [sleep](/3-Mechanics/CLI/spells/sleep.md), requiring no components."
  "name": "Lesser Magic"
- "desc": "The behir casts [invisibility](/3-Mechanics/CLI/spells/invisibility.md)\
    \ or [misty step](/3-Mechanics/CLI/spells/misty-step.md), requiring no components."
  "name": "Greater Magic (Costs 2 Actions)"
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Runed%20Behir.webp"
```
^statblock