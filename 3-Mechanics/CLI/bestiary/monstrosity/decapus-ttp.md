---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ttp
- monster/cr/4
- monster/size/large
- monster/type/monstrosity
statblock: inline
aliases: ["Decapus"]
---
# [Decapus](3-Mechanics\CLI\bestiary\monstrosity/decapus-ttp.md)
*Source: The Tortle Package p. 21*  

Decapuses are carnivorous, solitary hunters that swing through trees, scooping up prey with their 10-foot-long, suckered tentacles. Decapuses also use their tentacles to climb walls and ceilings.

After securing a high vantage point, a decapus hangs by one tentacle and attacks with the other nine. On the ground, a decapus is slower and less dangerous. It must use half of its tentacles to support its weight upright, leaving five tentacles with which it can attack and defend itself.

## Marine Decapus

A marine decapus is similar to its land-dwelling cousin, except that it gains a swimming speed of 30 feet and can breathe only underwater.

```statblock
"name": "Decapus (TTP)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "4"
- !!int "10"
- !!int "7"
"speed": "15 ft., climb 30 ft."
"skillsaves":
  "Athletics": !!int "4"
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "4"
"actions":
- "desc": "The decapus makes two attacks: one with its bite and one with its tentacles."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ by the decapus. Hit: 7 (2d4 + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 24\
    \ (9d4 + 2) bludgeoning damage or 14 (5d4 + 2) bludgeoning damage if the decapus\
    \ is grappling a creature other than the target or if the decapus is on the ground\
    \ or floor. The target is also [grappled](/3-Mechanics/CLI/rules/conditions.md#grappled)\
    \ (escape DC 14) unless the decapus is already grappling a creature. Until this\
    \ grapple ends, the target is [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)."
  "name": "Tentacles"
"source":
- "TTP"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/TTP/Decapus.webp"
```
^statblock