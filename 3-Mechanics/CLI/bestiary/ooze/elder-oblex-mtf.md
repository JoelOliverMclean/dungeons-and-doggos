---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mtf
- monster/cr/10
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/huge
- monster/type/ooze
aliases: ["Elder Oblex"]
---
# Elder Oblex
*Source: Mordenkainen's Tome of Foes p. 219*  

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
title: Elder Oblex
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/MTF/Elder%20Oblex.webp#token)
*Huge ooze, Lawful Evil*

- **Armor Class** 16 
- **Hit Points** 115 (`10d12 + 50`) 
- **Speed** 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|16 (+3)|21 (+5)|22 (+6)|13 (+1)|18 (+4)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +10, Charisma +8
- **Skills** Arcana +10, Deception +8, History +10, Nature +10, Perception +5, Religion +10
- **Senses** blindsight 60 ft. (blind beyond this distance), passive Perception 15
- **Condition Immunities** [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded), [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened), [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [prone](/3-Mechanics/CLI/rules/conditions.md#prone)
- **Languages** Common plus six more
- **Challenge** 10

## Traits

***Amorphous.*** The oblex can move through a space as narrow as 1 inch wide without squeezing.

***Aversion to Fire.*** If the oblex takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.

***Sulfurous Impersonation.*** As a bonus action, the oblex can extrude a piece of itself that assumes the appearance of one Medium or smaller creature whose memories it has stolen. This simulacrum appears, feels, and sounds exactly like the creature it impersonates, though it smells faintly of sulfur. The oblex can impersonate `2d6 + 1` different creatures, each one tethered to its body by a strand of slime that can extend up to 120 feet away. For all practical purposes, the simulacrum is the oblex, meaning the oblex occupies its space and the simulacrum's space simultaneously. The slimy tether is immune to damage, but it is severed if there is no opening at least 1 inch wide between the oblex's main body and the simulacrum. The simulacrum disappears if the tether is severed.

***Innate Spellcasting.*** The oblex's innate spellcasting ability is Intelligence (spell save DC 18). It can innately cast the following spells, requiring no material components:

**At will**: [charm person](/3-Mechanics/CLI/spells/charm-person.md) (as 5th-level spell), [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [hold person](/3-Mechanics/CLI/spells/hold-person.md)

**3/day each**: [confusion](/3-Mechanics/CLI/spells/confusion.md), [dimension door](/3-Mechanics/CLI/spells/dimension-door.md), [dominate person](/3-Mechanics/CLI/spells/dominate-person.md), [fear](/3-Mechanics/CLI/spells/fear.md), [hallucinatory terrain](/3-Mechanics/CLI/spells/hallucinatory-terrain.md), [hold monster](/3-Mechanics/CLI/spells/hold-monster.md), [hypnotic pattern](/3-Mechanics/CLI/spells/hypnotic-pattern.md), [telekinesis](/3-Mechanics/CLI/spells/telekinesis.md)

## Actions

***Multiattack.*** The elder oblex makes two pseudopod attacks and uses Eat Memories.

***Pseudopod.*** *Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:* 17 (`4d6 + 3`) bludgeoning damage plus 7 (`2d6`) psychic damage.

***Eat Memories.*** The oblex targets one creature it can see within 5 feet of it. The target must succeed on a DC 18 Wisdom saving throw or take 44 (`8d10`) psychic damage and become memory drained until it finishes a short or long rest or until it benefits from the [greater restoration](/3-Mechanics/CLI/spells/greater-restoration.md) or [heal](/3-Mechanics/CLI/spells/heal.md) spell. Constructs, oozes, plants, and undead succeed on the save automatically.

While memory drained, the target must roll a `d4` and subtract the number rolled from any ability check or attack roll it makes. Each time the target is memory drained beyond the first, the die size increases by one: the `d4` becomes a `d6`, the `d6` becomes a `d8`, and so on until the die becomes a `d20`, at which point the target becomes [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious) for 1 hour. The effect then ends.

When an oblex causes a target to become memory drained, the oblex learns all the languages the target knows and gains all its proficiencies, except any saving throw proficiencies.
```
^statblock

## Environment

swamp, underdark, urban