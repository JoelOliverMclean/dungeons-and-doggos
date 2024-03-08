---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mtf
- monster/cr/4
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/medium
- monster/type/construct
aliases: ["Stone Defender"]
---
# Stone Defender
*Source: Mordenkainen's Tome of Foes p. 126*  

![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/MTF/Stone%20Defender.webp#right)  
> [!quote]- A quote from Mordenkainen  
> 
> Never depend on something built by a gnome. You can always rely on a gnome to take a good idea and make it impractical.

## Stone Defender

Thick plates of stone riveted onto a stone defender give it substantial protection and allow it to conceal itself against a stony surface. Its chief role isn't as an ambusher, however, but as a bodyguard for gnomes and other clockworks.

The gnomes' efforts to invent and tinker with magic and mechanical devices produce many failed constructs, but also result in genuine advances, such as clockworks. Since their discovery, the methods used to craft clockworks have passed from one community of gnomes to another and down the generations.

## Constructed Nature

A clockwork doesn't require air, food, drink, or sleep.

## Individual Designs

A gnome artisan values an individualized clockwork more highly than a perfectly functioning one that copies too much from another creation. For that reason, even clockworks that fit established designs, such as those described here, are seldom identical.

A clockwork can be customized by adding one of the following enhancements and one potential malfunction to its stat block. You can select randomly or choose a pair of modifications that fit the temperament of the clockwork's builder.

**Clockwork Enhancements**

`dice: [](stone-defender-mtf.md#^clockwork-enhancements)`

| dice: d10 | Enhancement |
|-----------|-------------|
| 1 | **Camouflaged.** The clockwork gains proficiency in [Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth) if it doesn't already have it. While motionless, it is indistinguishable from a stopped machine. |
| 2 | **Sensors.** The range of the clockwork's [darkvision](/3-Mechanics/CLI/rules/senses.md#darkvision) becomes 120 feet, unless it is higher, and it gains proficiency in [Perception](/3-Mechanics/CLI/rules/skills.md#Perception) if it doesn't already have it. |
| 3 | **Improved Armor.** The clockwork's AC increases by 2. |
| 4 | **Increased Speed.** The clockwork's speed increases by 10 feet. |
| 5 | **Reinforced Construction.** The clockwork has resistance to force, lightning, and thunder damage. |
| 6 | **Self-Repairing.** If the clockwork starts its turn with at least 1 hit point, it regains 5 hit points. If it takes lightning damage, this ability doesn't function at the start of its next turn. |
| 7 | **Sturdy Frame.** The clockwork's hit point maximum increases by an amount equal to its number of Hit Dice. |
| 8 | **Suction.** The clockwork gains a climbing speed of 30 feet. |
| 9 | **Vocal Resonator.** The clockwork gains the ability to speak rudimentary Common or Gnomish (creator's choice). |
| 10 | **Water Propulsion.** The clockwork gains a swimming speed of 30 feet. |
^clockwork-enhancements

**Clockwork Malfunctions**

`dice: [](stone-defender-mtf.md#^clockwork-malfunctions)`

| dice: d10 | Malfunction |
|-----------|-------------|
| 1 | **Faulty Sensors.** Roll a `d6` at the start of the clockwork's turn. If you roll a 1, the clockwork is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) until the end of its turn. |
| 2 | **Flawed Targeting.** Roll a `d6` at the start of the clockwork's turn. If you roll a 1, the clockwork makes attack rolls with disadvantage until the end of its turn. |
| 3 | **Ground Fault.** The clockwork has vulnerability to lightning damage. |
| 4 | **Imprinting Loop.** Roll a `d6` at the start of the clockwork's turn. If you roll a 1, the clockwork mistakes one creature it can see within 30 feet for its creator. The clockwork won't willingly harm that creature for 1 minute or until that creature attacks it or deals damage to it. |
| 5 | **Leaking Lubricant.** Roll a `d6` at the start of the clockwork's turn. If you roll a 1, the clockwork gains 1 level of [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion) that it isn't immune to. |
| 6 | **Limited Steering.** The clockwork must move in a straight line. It can turn up to 90 degrees before moving and again at the midpoint of its movement. It can rotate freely if it doesn't use any of its speeds on its turn. |
| 7 | **Overactive Sense of Self-Preservation.** If the clockwork has half its hit points or fewer at the start of its turn in combat, roll a `d6`. If you roll a 1, it retreats from combat. If retreat isn't possible, it continues fighting. |
| 8 | **Overheats.** Roll a `d6` at the start of the clockwork's turn. If you roll a 1, the clockwork is [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated) until the end of its turn. |
| 9 | **Rusty Gears.** The clockwork has disadvantage on initiative rolls, and its speed decreases by 10 feet. |
| 10 | **Weak Armor.** The clockwork isn't immune to bludgeoning, piercing, and slashing damage from nonmagical attacks that aren't adamantine. |
^clockwork-malfunctions


## Statblock

```ad-statblock
title: Stone Defender
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/MTF/Stone%20Defender.webp#token)
*Medium construct, Unaligned*

- **Armor Class** 16 (natural armor)
- **Hit Points** 52 (`7d8 + 21`) 
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|10 (+0)|17 (+3)| 3 (-4)|10 (+0)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** poison; bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine
- **Condition Immunities** [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened), [paralyzed](/3-Mechanics/CLI/rules/conditions.md#paralyzed), [petrified](/3-Mechanics/CLI/rules/conditions.md#petrified), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)
- **Languages** understands one language of its creator but can't speak
- **Challenge** 4

## Traits

***False Appearance.*** While the stone defender remains motionless against an uneven earthen or stone surface, it is indistinguishable from that surface.

***Magic Resistance.*** The stone defender has advantage on saving throws against spells and other magical effects.

## Actions

***Slam.*** *Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11 (`2d6 + 4`) bludgeoning damage, and if the target is Large or smaller, it is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone).

## Reactions

***Intercept Attack.*** In response to another creature within 5 feet of it being hit by an attack roll, the stone defender gives that creature a +5 bonus to its AC against that attack, potentially causing a miss. To use this ability, the stone defender must be able to see the creature and the attacker.
```
^statblock

## Environment

forest, grassland, hill, mountain