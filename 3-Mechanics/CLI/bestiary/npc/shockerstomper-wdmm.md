---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/14
- monster/size/gargantuan
- monster/type/construct
statblock: inline
aliases: ["Shockerstomper"]
---
# [Shockerstomper](3-Mechanics\CLI\bestiary\npc/shockerstomper-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 174*  

```statblock
"name": "Shockerstomper (WDMM)"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "300"
"hit_dice": "300d1"
"stats":
- !!int "23"
- !!int "10"
- !!int "20"
- !!int "1"
- !!int "1"
- !!int "1"
"speed": "40 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened), [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 5"
"languages": ""
"cr": "14"
"traits":
- "desc": "When a leg drops to 0 hit points, it is disabled, and Shockerstomper can\
    \ use a reaction to detach it from its main body. Whenever one of its legs is\
    \ disabled, Shockerstomper's walking speed is reduced by 10 feet. The whole contraption\
    \ topples over and shuts down if four of its seven legs are disabled."
  "name": "Disable"
- "desc": "A creature that ends its turn in contact with Shockerstomper's body (saucer\
    \ or turrets) must make a DC 15 Constitution saving throw, taking 22 (4d10)\
    \ lightning damage on a failed save, or half as much damage on a successful one."
  "name": "Electrified Surface"
- "desc": "Shockerstomper is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "A creature atop or above Shockerstomper's platform can locate its control\
    \ module with a successful DC 15 Intelligence (Investigation) check or Wisdom\
    \ (Perception) check. As an action, a character can try to open the control module's\
    \ access panel, either by tearing it off with a successful DC 25 Strength (Athletics)\
    \ check or by dislodging it with thieves' tools and a successful DC 25 Dexterity\
    \ check. Behind the panel, embedded in the floor of the control module, is a 5-foot-diameter\
    \ pulsating crystal hemisphere with AC 10, 25 hit points, and immunity to poison\
    \ and psychic damage. Destroying the crystal hemisphere shuts down Shockerstomper."
  "name": "Control Module"
- "desc": "A character can try to plug the nozzle of a lightning turret with a 10-pound\
    \ rock or similar object, doing so with a successful DC 15 Strength (Athletics)\
    \ check. A plugged turret can't shoot lightning until a creature uses an action\
    \ to try to clear the obstruction, which requires another successful DC 15 Strength\
    \ ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics)) check. Shockerstomper\
    \ has no ability to clear an obstruction itself."
  "name": "Lightning Turret"
"actions":
- "desc": "Shockerstomper makes three Lightning Turret attacks and two Stomp attacks."
  "name": "Multiattack"
- "desc": "The turret shoots a magical lightning bolt at one creature within 60 feet\
    \ of Shockerstomper. The target must make a DC 15 Dexterity saving throw, taking\
    \ 44 (8d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Turret"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit:\
    \ 22 (3d10 + 6) bludgeoning damage."
  "name": "Stomp"
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Shockerstomper.webp"
```
^statblock