---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/13
- monster/size/large
- monster/type/monstrosity
statblock: inline
aliases: ["Muiral"]
---
# [Muiral](3-Mechanics\CLI\bestiary\npc/muiral-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 314*  

Muiral was an accomplished human warrior who long served as Halaster's bodyguard. His descent into madness began when he asked the Mad Mage to tutor him in the wizardly arts. Muiral learned enough magic to transform himself into a half-scorpion monstrosity, becoming known as Muiral the Misshapen. He then retired to the level of Undermountain that would later be called Muiral's Gauntlet, driving out and slaying its original drow denizens. Muiral now spends his days hunting adventurers and other interlopers for fun. Long years alone—and Halaster's influence—have rendered him utterly insane.

```statblock
"name": "Muiral (WDMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "195"
"hit_dice": "23d10 + 69"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "18"
- !!int "13"
- !!int "18"
"speed": "50 ft."
"saves":
  "Intelligence": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Athletics": !!int "9"
  "Stealth": !!int "5"
  "Perception": !!int "6"
  "Arcana": !!int "9"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Common, Dwarvish, Elvish, Goblin, Undercommon"
"cr": "13"
"traits":
- "desc": "Muiral is a 13th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [dancing lights](/3-Mechanics/CLI/spells/dancing-lights.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md),\
    \ [ray of frost](/3-Mechanics/CLI/spells/ray-of-frost.md), [shocking grasp](/3-Mechanics/CLI/spells/shocking-grasp.md)\n\
    \n1st level (4 slots): [expeditious retreat](/3-Mechanics/CLI/spells/expeditious-retreat.md),\
    \ [fog cloud](/3-Mechanics/CLI/spells/fog-cloud.md), [magic missile](/3-Mechanics/CLI/spells/magic-missile.md),\
    \ [shield](/3-Mechanics/CLI/spells/shield.md)\n\n2nd level (3 slots): [darkness](/3-Mechanics/CLI/spells/darkness.md),\
    \ [knock](/3-Mechanics/CLI/spells/knock.md), [see invisibility](/3-Mechanics/CLI/spells/see-invisibility.md),\
    \ [spider climb](/3-Mechanics/CLI/spells/spider-climb.md)\n\n3rd level (3 slots):\
    \ [animate dead](/3-Mechanics/CLI/spells/animate-dead.md), [counterspell](/3-Mechanics/CLI/spells/counterspell.md),\
    \ [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt.md)\n\n4th level (3\
    \ slots): [greater invisibility](/3-Mechanics/CLI/spells/greater-invisibility.md),\
    \ [polymorph](/3-Mechanics/CLI/spells/polymorph.md)\n\n5th level (2 slots):\
    \ [animate objects](/3-Mechanics/CLI/spells/animate-objects.md), [wall of force](/3-Mechanics/CLI/spells/wall-of-force.md)\n\
    \n6th level (1 slots): [create undead](/3-Mechanics/CLI/spells/create-undead.md),\
    \ [flesh to stone](/3-Mechanics/CLI/spells/flesh-to-stone.md)\n\n7th level (1\
    \ slots): [finger of death](/3-Mechanics/CLI/spells/finger-of-death.md)"
  "name": "Spellcasting"
- "desc": "If Muiral fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "Muiral makes three attacks: two with his longsword and one with his sting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13\
    \ (2d8 + 4) slashing damage, or 15 (2d10 + 4) slashing damage if used with\
    \ two hands."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit:\
    \ 9 (1d10 + 4) piercing damage. The target must make a DC 16 Constitution saving\
    \ throw, taking 27 (6d8) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Sting"
"legendary_actions":
- "desc": "Muiral casts a cantrip."
  "name": "Cast Cantrip"
- "desc": "Muiral makes one longsword attack that has a reach of 10 feet."
  "name": "Lunging Attack (Costs 2 Actions)"
- "desc": "Muiral moves up to his speed without provoking opportunity attacks. Before\
    \ the move, he can make one longsword attack."
  "name": "Retreating Strike (Costs 3 Actions)"
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Muiral.webp"
```
^statblock