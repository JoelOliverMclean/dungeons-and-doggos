---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/15
- monster/environment/urban
- monster/size/medium
- monster/type/fiend/devil
statblock: inline
aliases: ["Green Abishai"]
---
# [Green Abishai](3-Mechanics\CLI\bestiary\fiend/green-abishai-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 40, Mordenkainen's Tome of Foes p. 162*  

Green abishais are adept at discovering secrets and other sensitive information, while their diplomatic skills and their magic ensure they can manipulate even the shrewdest opponents.

## Abishais

Each abishai was once a mortal who somehow won Tiamat's favor before death and, as a reward, found its soul transformed into a draconic devil to serve at her pleasure in the Nine Hells. Each type of abishai is associated with one of Tiamat's five dragon heads: black, blue, green, red, and white.

Tiamat deploys abishais as her agents, sending them forth to represent her interests in the Hells and across the multiverse. Some have simple tasks, such as delivering a message to cultists. Others have greater responsibilities, such as leading large groups, assassinating targets, and serving in armies. In all cases, abishais are fanatically loyal to Tiamat, ready to lay down their lives if needed.

Abishais stand outside the normal hierarchy of the Nine Hells, having their own chain of command and ultimately answering to Tiamat (and Asmodeus, when he chooses to use them). Other archdevils can command abishais to work for them, but most archdevils do so rarely, since it is never clear whether an abishai follows Tiamat's orders or Asmodeus's. There is inherent risk in countermanding an order given by Tiamat, but interfering with Asmodeus's plans invites certain destruction.

```statblock
"name": "Green Abishai (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "195"
"hit_dice": "26d8 + 78"
"stats":
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "17"
- !!int "12"
- !!int "19"
"speed": "30 ft., fly 40 ft."
"saves":
  "Charisma": !!int "9"
  "Intelligence": !!int "8"
"skillsaves":
  "Deception": !!int "9"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Persuasion": !!int "9"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "15"
"traits":
- "desc": "The abishai casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [alter self](/3-Mechanics/CLI/spells/alter-self.md), [major image](/3-Mechanics/CLI/spells/major-image.md)\n\
    \n1/day each: [confusion](/3-Mechanics/CLI/spells/confusion.md), [dominate\
    \ person](/3-Mechanics/CLI/spells/dominate-person.md), [mass suggestion](/3-Mechanics/CLI/spells/mass-suggestion.md)\n\
    \n3/day each: [charm person](/3-Mechanics/CLI/spells/charm-person.md), [detect\
    \ thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [fear](/3-Mechanics/CLI/spells/fear.md)"
  "name": "Spellcasting"
- "desc": "Magical darkness doesn't impede the abishai's [darkvision](/3-Mechanics/CLI/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- "desc": "The abishai has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The abishai makes two Fiendish Claw attacks, or it makes one Fiendish Claw\
    \ attack and uses Spellcasting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12\
    \ (2d8 + 3) force damage. If the target is a creature, it must succeed on a\
    \ DC 16 Constitution saving throw or take 16 (3d10) poison damage and become\
    \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) for 1 minute. The\
    \ [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned) target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Fiendish Claw"
"source":
- "MPMM"
- "MTF"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/MPMM/Green%20Abishai.webp"
```
^statblock

## Environment

urban