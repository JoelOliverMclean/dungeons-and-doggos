---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdh
- monster/cr/3
- monster/size/medium
- monster/type/monstrosity/shapechanger
statblock: inline
aliases: ["Willifort Crowelle"]
---
# [Willifort Crowelle](3-Mechanics\CLI\bestiary\npc/willifort-crowelle-wdh.md)
*Source: Waterdeep: Dragon Heist p. 62*  

```statblock
"name": "Willifort Crowelle (WDH)"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "11"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "12"
- !!int "14"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "3"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "3"
"traits":
- "desc": "Willifort can use its action to polymorph into a Small or Medium humanoid\
    \ it has seen, or back into its true form. Its statistics, other than its size,\
    \ are the same in each form. Any equipment it is wearing or carrying isn't transformed.\
    \ It reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "In the first round of a combat, Willifort has advantage on attack rolls\
    \ against any creature it surprised."
  "name": "Ambusher"
- "desc": "If Willifort surprises a creature and hits it with an attack during the\
    \ first round of combat, the target takes an extra 10 (3d6) damage from the\
    \ attack."
  "name": "Surprise Attack"
"actions":
- "desc": "Willifort makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage."
  "name": "Slam"
- "desc": "Willifort magically reads the surface thoughts of one creature within 60\
    \ feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2\
    \ feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the\
    \ target is in range, Willifort can continue reading its thoughts, as long as\
    \ Willifort's [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ isn't broken (as if concentrating on a spell). While reading the target's mind,\
    \ Willifort has advantage on Wisdom ([Insight](/3-Mechanics/CLI/rules/skills.md#Insight))\
    \ and Charisma ([Deception](/3-Mechanics/CLI/rules/skills.md#Deception), [Intimidation](/3-Mechanics/CLI/rules/skills.md#Intimidation),\
    \ and [Persuasion](/3-Mechanics/CLI/rules/skills.md#Persuasion)) checks against\
    \ the target."
  "name": "Read Thoughts"
"source":
- "WDH"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDH/Willifort%20Crowelle.webp"
```
^statblock