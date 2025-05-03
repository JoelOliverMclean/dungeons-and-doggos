---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/wdmm
- monster/cr/16
- monster/size/large
- monster/type/celestial
statblock: inline
aliases: ["Fazrian"]
---
# [Fazrian](3-Mechanics\CLI\bestiary\npc/fazrian-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 275*  

Once an exemplar of courage and good judgment, Fazrian now seeks to destroy any creature it believes is undeserving of continued existence. Fazrian's views are a mockery of what they once were. Every creature is guilty of "deformity" in the planetar's eyes. Unless someone can swiftly prove their innocence, Fazrian sentences that individual to an immediate death.

```statblock
"name": "Fazrian (WDMM)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "24"
- !!int "20"
- !!int "24"
- !!int "19"
- !!int "22"
- !!int "25"
"speed": "40 ft., fly 120 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "11"
  "Constitution": !!int "12"
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "16"
"traits":
- "desc": "Fazrian's spellcasting ability is Charisma (spell save DC 20). Fazrian\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [detect evil and good](/3-Mechanics/CLI/spells/detect-evil-and-good.md),\
    \ [invisibility](/3-Mechanics/CLI/spells/invisibility.md) (self only)\n\n1/day\
    \ each: [commune](/3-Mechanics/CLI/spells/commune.md), [control weather](/3-Mechanics/CLI/spells/control-weather.md),\
    \ [insect plague](/3-Mechanics/CLI/spells/insect-plague.md)\n\n3/day each:\
    \ [blade barrier](/3-Mechanics/CLI/spells/blade-barrier.md), [dispel evil and\
    \ good](/3-Mechanics/CLI/spells/dispel-evil-and-good.md), [flame strike](/3-Mechanics/CLI/spells/flame-strike.md),\
    \ [raise dead](/3-Mechanics/CLI/spells/raise-dead.md)"
  "name": "Innate Spellcasting"
- "desc": "Fazrian's weapon attacks are magical. When Fazrian hits with any weapon,\
    \ the weapon deals an extra 5d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- "desc": "Fazrian knows if it hears a lie."
  "name": "Divine Awareness"
- "desc": "Fazrian has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Fazrian makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21\
    \ (4d6 + 7) slashing damage plus 22 (5d8) radiant damage."
  "name": "Greatsword"
"lair_actions":
- "desc": "Unless he is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated),\
    \ Fazrian can take one of the following lair actions on initiative count 20 (losing\
    \ initiative ties) while on the Terminus Level:"
  "name": ""
- "desc": "- Blood flows from Fazrian's eyes until initiative count 20 on the next\
    \ round. No creature within 120 feet of the planetar can regain hit points until\
    \ the effect ends.  \n- Fazrian's eyes become smoldering black voids until initiative\
    \ count 20 on the next round. All other creatures within 120 feet of the planetar\
    \ have disadvantage on saving throws until the effect ends.  \n- Blinding magical\
    \ light springs from Fazrian's eyes until initiative count 20 on the next round.\
    \ If a creature starts its turn within 120 feet of the planetar and the two of\
    \ them can see each other, Fazrian can force the creature to make a DC 20 Constitution\
    \ saving throw. On a failed save, the creature is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded).\
    \ The blindness lasts until the creature receives a [lesser restoration](/3-Mechanics/CLI/spells/lesser-restoration.md)\
    \ spell or similar magic.  "
  "name": ""
"source":
- "WDMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/WDMM/Fazrian.webp"
```
^statblock