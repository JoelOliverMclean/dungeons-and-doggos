---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/9
- monster/size/medium
- monster/type/undead
statblock: inline
aliases: ["Shadow Assassin"]
---
# [Shadow Assassin](3-Mechanics\CLI\bestiary\undead/shadow-assassin-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 316*  

A shadow assassin looks like an undead shadow (as described in the *Monster Manual*) that wields shortswords also made of shadow. It exists only to slay the living.

```statblock
"name": "Shadow Assassin (WDMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "6"
- !!int "19"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "14"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "8"
  "Intelligence": !!int "5"
"skillsaves":
  "Stealth": !!int "12"
  "Perception": !!int "9"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled),\
  \ [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned), [prone](/3-Mechanics/CLI/rules/conditions.md#prone),\
  \ [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "understands the languages it knew in life but can't speak"
"cr": "9"
"traits":
- "desc": "The assassin can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "While in dim light or darkness, the assassin can take the Hide action as\
    \ a bonus action."
  "name": "Shadow Stealth"
- "desc": "While in sunlight, the assassin has disadvantage on attack rolls, ability\
    \ checks, and saving throws."
  "name": "Sunlight Weakness"
"actions":
- "desc": "The assassin makes two Shadow Blade attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage plus 10 (3d6) necrotic damage. Unless the target is\
    \ immune to necrotic damage, the target's Strength score is reduced by 1d4 each\
    \ time it is hit by this attack. The target dies if its Strength is reduced to\
    \ 0. The reduction lasts until the target finishes a short or long rest. If a\
    \ non-evil humanoid dies from this attack, a shadow (see the Monster Manual) rises\
    \ from the corpse 1d4 hours later."
  "name": "Shadow Blade"
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Shadow%20Assassin.webp"
```
^statblock