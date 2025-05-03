---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ttp
- monster/cr/3
- monster/size/large
- monster/type/monstrosity
statblock: inline
aliases: ["Giant Slug"]
---
# [Giant Slug](3-Mechanics\CLI\bestiary\monstrosity/giant-slug-ttp.md)
*Source: The Tortle Package p. 18*  

```statblock
"name": "Giant Slug (TTP)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "66"
"hit_dice": "6d10 + 18"
"stats":
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "1"
- !!int "12"
- !!int "5"
"speed": "10 ft., climb 10 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Abyssal, Aquan, Common"
"cr": "3"
"traits":
- "desc": "The slug's innate spellcasting ability is Wisdom (spell save DC 11, +3\
    \ to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\n1/day each: [guiding bolt](/3-Mechanics/CLI/spells/guiding-bolt.md),\
    \ [sanctuary](/3-Mechanics/CLI/spells/sanctuary.md), [spiritual weapon](/3-Mechanics/CLI/spells/spiritual-weapon.md)"
  "name": "Innate Spellcasting"
- "desc": "The slug has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The slug can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "The slug makes two attacks: one with its tentacles and one with its bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit:\
    \ 4 (1d4 + 2) poison damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ for 1 minute. Until this poison ends, the target is [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed).\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the poison on itself on a success."
  "name": "Tentacles"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage."
  "name": "Bite"
"reactions":
- "desc": "When the slug takes damage in this cave (Shrine of Umberlee), it can use\
    \ its reaction to animate one of the tentacles of the kraken statue and cause\
    \ it to   make a melee weapon attack (+3 to hit) against one creature within\
    \ 20 feet of the statue that the slug can see. The tentacle deals 8 (1d8 + 4)\
    \ bludgeoning damage on a hit."
  "name": "Animate Tentacle"
"source":
- "TTP"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/TTP/Giant%20Slug.webp"
```
^statblock