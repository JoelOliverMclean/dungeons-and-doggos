---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ttp
- monster/cr/1-4
- monster/size/small
- monster/type/elemental
statblock: inline
aliases: ["Geonid"]
---
# [Geonid](3-Mechanics\CLI\bestiary\elemental/geonid-ttp.md)
*Source: The Tortle Package p. 22*  

Also known as rocklings and rock hermits, geonids are small, intelligent cave dwellers that originated on the Elemental Plane of Earth. A geonid's arms and legs come out of a small opening in the bottom of its shell. A geonid can draw its limbs into its shell and close the opening. When it does so, the creature looks like a small boulder. In this state, the geonid can't see and relies on its [tremorsense](/3-Mechanics/CLI/rules/senses.md#tremorsense) to detect other creatures nearby.

## Dark Lairs

Geonids live in natural tunnels and caves. They feed primarily on lizards, rats, slugs, and other vermin, as well as on cave lichen and moss. Geonids like to collect coins and gemstones, and they rarely confront creatures larger than themselves except to rob them or scare them away.

## Stone Tell

Geonids can attune to stone in a way that lets them discern what other creatures have been in the area recently. Geonids use this ability to track prey and to determine whether other creatures have trespassed in their territory. The information gleaned is imprecise and doesn't include the specific identities of such creatures or the precise times when they passed nearby.

```statblock
"name": "Geonid (TTP)"
"size": "Small"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "26"
"hit_dice": "4d6 + 12"
"stats":
- !!int "12"
- !!int "10"
- !!int "16"
- !!int "9"
- !!int "14"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "2"
  "Perception": !!int "4"
"senses": "darkvision 60 ft., tremorsense 30 ft., passive Perception 14"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "While fully withdrawn into its shell, the geonid can't see and is indistinguishable\
    \ from a small boulder"
  "name": "Boulder Guise"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) bludgeoning damage."
  "name": "Club"
- "desc": "The geonid touches a stone object or surface and knows what types of creatures\
    \ have been within 10 feet of that stone in the past 24 hours. The geonid can\
    \ also determine the number of creatures of each type, but not their identities."
  "name": "Stone Tell"
"source":
- "TTP"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/TTP/Geonid.webp"
```
^statblock