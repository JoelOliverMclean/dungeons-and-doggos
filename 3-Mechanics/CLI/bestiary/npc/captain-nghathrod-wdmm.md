---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/8
- monster/size/medium
- monster/type/aberration
statblock: inline
aliases: ["Captain N'ghathrod"]
---
# [Captain N'ghathrod](3-Mechanics\CLI\bestiary\npc/captain-nghathrod-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 250*  

Before it turned to a life of space piracy, N'ghathrod lived in a mind flayer colony on the ringed planet of Glyth, which is farther from the sun than Toril.

```statblock
"name": "Captain N'ghathrod (WDMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "[breastplate](/3-Mechanics/CLI/items/breastplate.md)"
"hp": !!int "111"
"hit_dice": "13d8 + 13"
"stats":
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "19"
- !!int "17"
- !!int "17"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Arcana": !!int "7"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "8"
"traits":
- "desc": "Captain N'ghathrod's innate spellcasting ability is Intelligence (spell\
    \ save DC 15). It can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md),\
    \ [levitate](/3-Mechanics/CLI/spells/levitate.md)\n\n1/day each: [dominate\
    \ monster](/3-Mechanics/CLI/spells/dominate-monster.md), [plane shift](/3-Mechanics/CLI/spells/plane-shift.md)\
    \ (self only)"
  "name": "Innate Spellcasting (Psionics)"
- "desc": "Captain N'ghathrod is a 10th-level spellcaster. Its spellcasting ability\
    \ is Intelligence (save DC 15, +7 to hit with spell attacks). Captain N'ghathrod\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [blade\
    \ ward](/3-Mechanics/CLI/spells/blade-ward.md), [dancing lights](/3-Mechanics/CLI/spells/dancing-lights.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [shocking grasp](/3-Mechanics/CLI/spells/shocking-grasp.md)\n\
    \n1st level (4 slots): [detect magic](/3-Mechanics/CLI/spells/detect-magic.md),\
    \ [disguise self](/3-Mechanics/CLI/spells/disguise-self.md), [shield](/3-Mechanics/CLI/spells/shield.md),\
    \ [sleep](/3-Mechanics/CLI/spells/sleep.md)\n\n2nd level (3 slots): [blur](/3-Mechanics/CLI/spells/blur.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md), [ray of enfeeblement](/3-Mechanics/CLI/spells/ray-of-enfeeblement.md)\n\
    \n3rd level (3 slots): [clairvoyance](/3-Mechanics/CLI/spells/clairvoyance.md),\
    \ [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt.md), [sending](/3-Mechanics/CLI/spells/sending.md)\n\
    \n4th level (3 slots): [confusion](/3-Mechanics/CLI/spells/confusion.md),\
    \ [hallucinatory terrain](/3-Mechanics/CLI/spells/hallucinatory-terrain.md)\n\n\
    5th level (2 slots): [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md),\
    \ [wall of force](/3-Mechanics/CLI/spells/wall-of-force.md)"
  "name": "Spellcasting"
- "desc": "Captain N'ghathrod has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15\
    \ (2d10 + 4) psychic damage. If the target is Medium or smaller, it is [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ humanoid [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled) by Captain\
    \ N'ghathrod. Hit: The target takes 55 (10d10) piercing damage. If this damage\
    \ reduces the target to 0 hit points, Captain N'ghathrod kills the target by extracting\
    \ and devouring its brain."
  "name": "Extract Brain"
- "desc": "Captain N'ghathrod magically emits psychic energy in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 15 Intelligence saving throw or take\
    \ 22 (4d8 + 4) psychic damage and be [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"lair_actions":
- "desc": "When fighting aboard the Scavenger, N'ghathrod can take lair actions. On\
    \ initiative count 20 (losing initiative ties), N'ghathrod can take one lair action\
    \ to cause one of the following effects:"
  "name": ""
- "desc": "- N'ghathrod creates a magical duplicate of itself anywhere aboard the\
    \ ship. Formed out of psionic energy, this duplicate lasts until it is reduced\
    \ to 0 hit points, until it is dispelled (DC 15), or until N'ghathrod takes another\
    \ lair action. The duplicate has the statistics of a normal mind flayer and is\
    \ friendly toward N'ghathrod, but not under its control. It cannot leave the Scavenger.\
    \  \n- N'ghathrod fills all interior areas of the ship with mind-warping images\
    \ and sounds of the Far Realm that last until initiative count 20 on the next\
    \ round. Any creature that isn't an aberration that starts its turn inside the\
    \ ship must succeed on a DC 15 Wisdom saving throw or take 10 (3d6) psychic\
    \ damage.  "
  "name": ""
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Captain%20N%27ghathrod.webp"
```
^statblock