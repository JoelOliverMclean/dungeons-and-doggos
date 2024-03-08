---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mtf
- monster/cr/5
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/ooze
aliases: ["Adult Oblex"]
---
# Adult Oblex
*Source: Mordenkainen's Tome of Foes p. 218*  

![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/MTF/Oblex.webp#right)  
> [!quote]- A quote from Mordenkainen  
> 
> Mind flayers unleash all manner of foul experiments upon the planes with little thought for the consequences. Here, though, I suspect another influence: Juiblex.

## Adult and Elder Oblexes

Newly formed oblexes lack the capabilities of their older kin. They seek only to feed on memories and grow until they can impersonate their victims.

Older oblexes, called adults and elders, have eaten so many memories that they can form duplicates of the creatures they have devoured from the substance of their bodies, sending them off to lure prey into their clutches, while remaining tethered to the slime by long tendrils of goo. These duplicated creatures are indistinguishable from their victims except for a faint sulfurous smell. Oblexes use these duplicates to lure prey into danger or to infiltrate settlements so they can feed on superior victims.

## Oblex

By experimenting on the slimes, jellies, and puddings that infest the depths of the Underdark, mind flayers created a special breed of ooze, the oblex—a slime capable of assaulting the minds of other creatures. Cunning hunters, these pools of jelly stalk prey, searching for the memories they so desperately crave. When oblexes feed on those thoughts, sometimes killing their victims, they can form weird copies of their prey, which help them to harvest even more victims for their dark masters.

## Memory Eaters

Oblexes feed on thoughts and memories. The sharper the mind, the better the meal, so oblexes hunt obviously intelligent targets such as wizards and other spellcasters. When suitable fare comes within reach, an oblex draws its body up to engulf its victim. As it withdraws, it plunders the creature's mind, leaving its prey befuddled and confused.

## Ooze Nature

An oblex doesn't require sleep.

> [!quote]- A quote from Mordenkainen  
> 
> An oblex wants memories, but not to serve any end of its own making. Oblexes are hungry for memories and personalities because they are empty without such nourishment. In this way they serve their creators, the illithids. An oblex in the range of an elder brain's powers provides everything necessary for the mind flayers to find choice victims.



## Statblock

```ad-statblock
title: Adult Oblex
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/MTF/Adult%20Oblex.webp#token)
*Medium ooze, Lawful Evil*

- **Armor Class** 14 
- **Hit Points** 75 (`10d8 + 30`) 
- **Speed** 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|19 (+4)|16 (+3)|19 (+4)|12 (+1)|15 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +7, Charisma +5
- **Skills** Deception +5; Perception +4; _One of_ Arcana +7, History +7, Nature +7, Religion +7
- **Senses** blindsight 60 ft. (blind beyond this distance), passive Perception 14
- **Condition Immunities** [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded), [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened), [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [prone](/3-Mechanics/CLI/rules/conditions.md#prone)
- **Languages** Common plus two more languages
- **Challenge** 5

## Traits

***Amorphous.*** The oblex can move through a space as narrow as 1 inch wide without squeezing.

***Aversion to Fire.*** If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.

***Sulfurous Impersonation.*** As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate `1d4 + 1` different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. For all practical purposes, the simulacrum is the oblex, meaning that the oblex occupies its space and the simulacrum's space simultaneously. The slimy tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex's main body and the simulacrum. The simulacrum disappears if the tether is severed.

***Innate Spellcasting.*** The oblex's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components:

**3/day each**: [charm person](/3-Mechanics/CLI/spells/charm-person.md) (as 5th-level spell), [color spray](/3-Mechanics/CLI/spells/color-spray.md), [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [hold person](/3-Mechanics/CLI/spells/hold-person.md) (as 3rd-level spell)

## Actions

***Multiattack.*** The oblex makes one pseudopod attack and uses Eat Memories.

***Pseudopod.*** *Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 7 (`1d6 + 4`) bludgeoning damage plus 5 (`2d4`) psychic damage.

***Eat Memories.*** The oblex targets one creature it can see within 5 feet of it. The target must succeed on a DC 15 Wisdom saving throw or take 18 (`4d8`) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the [greater restoration](/3-Mechanics/CLI/spells/greater-restoration.md) or [heal](/3-Mechanics/CLI/spells/heal.md) spell. Constructs, oozes, plants, and undead succeed on the save automatically.

While memory drained, the target must roll a `d4` and subtract the number rolled from any ability check or attack roll it makes. Each time the target is memory drained beyond the first, the die size increases by one: the `d4` becomes a `d6`, the `d6` becomes a `d8`, and so on until the die becomes a `d20`, at which point the target becomes [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious) for 1 hour. The effect then ends.

When an oblex causes a target to become memory drained, the oblex learns all the languages the target knows and gains all its proficiencies, except for any saving throw proficiencies.
```
^statblock

## Environment

swamp, underdark, urban