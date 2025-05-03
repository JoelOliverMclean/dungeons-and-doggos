---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdh
- monster/cr/2
- monster/size/medium
- monster/type/humanoid/half-elf
statblock: inline
aliases: ["Kalain"]
---
# [Kalain](3-Mechanics\CLI\bestiary\npc/kalain-wdh.md)
*Source: Waterdeep: Dragon Heist p. 89*  

Kalain, was once a famous Waterdavian painter, but now Kalain's spirit is broken, leading to the onset of madness. She locks herself away, content to let time erode the last of her conscience.

```statblock
"name": "Kalain (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-elf"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[chain shirt](/3-Mechanics/CLI/items/chain-shirt.md)"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
"skillsaves":
  "Perception": !!int "5"
  "Performance": !!int "6"
  "Acrobatics": !!int "4"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Elvish"
"cr": "2"
"traits":
- "desc": "Kalain is a 4th-level spellcaster. Her spellcasting ability is Charisma.\
    \ She has the following bard spells prepared:\n\nCantrips (at will): [friends](/3-Mechanics/CLI/spells/friends.md),\
    \ [mage hand](/3-Mechanics/CLI/spells/mage-hand.md), [vicious mockery](/3-Mechanics/CLI/spells/vicious-mockery.md)\n\
    \n1st level (4 slots): [charm person](/3-Mechanics/CLI/spells/charm-person.md),\
    \ [healing word](/3-Mechanics/CLI/spells/healing-word.md), [heroism](/3-Mechanics/CLI/spells/heroism.md),\
    \ [sleep](/3-Mechanics/CLI/spells/sleep.md), [thunderwave](/3-Mechanics/CLI/spells/thunderwave.md)\n\
    \n2nd level (3 slots): [invisibility](/3-Mechanics/CLI/spells/invisibility.md),\
    \ [shatter](/3-Mechanics/CLI/spells/shatter.md)"
  "name": "Spellcasting"
- "desc": "Kalain has advantage on saving throws against being [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ and magic can't put her to sleep."
  "name": "Fey Ancestry"
- "desc": "Kalain touches one of her paintings and causes its subject to spring forth,\
    \ becoming a creature of that kind provided its CR is 3 or lower. The creature\
    \ appears in an unoccupied space within 5 feet of the painting, which becomes\
    \ blank. The creature is friendly toward Kalain and hostile toward all others.\
    \ It rolls initiative to determine when it acts. It disappears after 1 minute,\
    \ when it is reduced to 0 hit points, or when Kalain dies or falls [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)."
  "name": "Art Imitates Life (3/Day)"
- "desc": "Kalain can use a bonus action on her turn to target one creature within\
    \ 30 feet of it. If the target can hear Kalain, the target must succeed on a DC\
    \ 12 Charisma saving throw or have disadvantage on ability checks, attack rolls,\
    \ and saving throws until the start of Kalain's next turn."
  "name": "Taunt (2/Day)"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage."
  "name": "Shortbow"
"source":
- "WDH"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDH/Kalain.webp"
```
^statblock