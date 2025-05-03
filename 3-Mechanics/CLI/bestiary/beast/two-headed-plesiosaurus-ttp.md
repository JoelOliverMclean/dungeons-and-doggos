---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ttp
- monster/cr/4
- monster/size/large
- monster/type/beast
statblock: inline
aliases: ["Two-Headed Plesiosaurus"]
---
# [Two-Headed Plesiosaurus](3-Mechanics\CLI\bestiary\beast/two-headed-plesiosaurus-ttp.md)
*Source: The Tortle Package p. 18*  

A two-headed plesiosaurus is a marine dinosaur whose compact body is driven by powerful flippers. Predatory and aggressive, it attacks any creature it encounters. Its flexible necks account for a third of its total length, letting it twist in any direction to deliver a powerful bite.

## Dinosaurs

Dinosaurs, or behemoths, are among the oldest reptiles in the world. Predatory dinosaurs are savage, territorial hunters. Herbivorous dinosaurs are less aggressive, but they might attack to defend their young, or if startled or harassed.

Dinosaurs come in many sizes and shapes. Larger varieties often have drab coloration, while smaller dinosaurs have colorful markings akin to birds. Dinosaurs roam rugged and isolated areas that humanoids seldom visit, including remote mountain valleys, inaccessible plateaus, tropical islands, and deep fens.

```statblock
"name": "Two-Headed Plesiosaurus (TTP)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "100"
"hit_dice": "8d10 + 24"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "20 ft., swim 40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "4"
"traits":
- "desc": "The two-headed plesiosaurus has advantage on Wisdom ([Perception](/3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks and on saving throws against being [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
    \ [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened),\
    \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned),\
    \ and knocked [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)."
  "name": "Two Heads"
- "desc": "The plesiosaurus can hold its breath for 1 hour."
  "name": "Hold Breath"
"actions":
- "desc": "The two-headed plesiosaurus makes two bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14\
    \ (3d6 + 4) piercing damage."
  "name": "Bite"
"source":
- "TTP"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/TTP/Two-Headed%20Plesiosaurus.webp"
```
^statblock