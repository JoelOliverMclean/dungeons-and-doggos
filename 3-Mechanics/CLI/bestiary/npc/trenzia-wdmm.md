---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/4
- monster/size/tiny
- monster/type/undead
statblock: inline
aliases: ["Trenzia"]
---
# [Trenzia](3-Mechanics\CLI\bestiary\npc/trenzia-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 32*  

Blazing green flames and mad, echoing laughter surround an undead flameskull. This disembodied skull blasts foes with fiery rays from its eyes and dreadful spells called up from the dark recesses of its memory.

```statblock
"name": "Trenzia (WDMM)"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d4 + 18"
"stats":
- !!int "1"
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "11"
"speed": "0 ft., fly 40 ft. (hover)"
"skillsaves":
  "Perception": !!int "2"
  "Arcana": !!int "5"
"damage_resistances": "fire, necrotic, piercing"
"damage_immunities": "lightning, cold, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common"
"cr": "4"
"traits":
- "desc": "Trenzia is a 5th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). She requires no somatic\
    \ or material components to cast its spells. Trenzia has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [mage hand](/3-Mechanics/CLI/spells/mage-hand.md)\n\
    \n1st level (3 slots): [magic missile](/3-Mechanics/CLI/spells/magic-missile.md),\
    \ [shield](/3-Mechanics/CLI/spells/shield.md)\n\n2nd level (2 slots): [blur](/3-Mechanics/CLI/spells/blur.md),\
    \ [flaming sphere](/3-Mechanics/CLI/spells/flaming-sphere.md)\n\n3rd level (1\
    \ slots): [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt.md)"
  "name": "Spellcasting"
- "desc": "Trenzia sheds either dim light in a 15-foot radius, or bright light in\
    \ a 15-foot radius and dim light for an additional 15 feet. It can switch between\
    \ the options as an action."
  "name": "Illumination"
- "desc": "Trenzia has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "If Trenzia is destroyed, it regains all its hit points in 1 hour unless\
    \ holy water is sprinkled on its remains or a [dispel magic](/3-Mechanics/CLI/spells/dispel-magic.md)\
    \ or [remove curse](/3-Mechanics/CLI/spells/remove-curse.md) spell is cast on\
    \ them."
  "name": "Rejuvenation"
"actions":
- "desc": "Trenzia uses Lightning Ray twice."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10\
    \ (3d6) lightning damage."
  "name": "Fire Ray"
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Trenzia.webp"
```
^statblock