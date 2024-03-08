---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mtf
- monster/cr/18
- monster/size/medium
- monster/type/fiend/devil
aliases: ["Amnizu"]
---
# Amnizu
*Source: Mordenkainen's Tome of Foes p. 164*  

![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/MTF/Amnizu.webp#right)  
Amnizus lead the infernal legions into battle and command guardians at the gateways to the Hells. Amnizus are arrogant, bullying, and ruthless, but they're also highly intelligent tacticians and unfailingly loyal—qualities that the hellish archdukes value.

## Guarding the River Styx

Some amnizus perform the critical task of watching over the River Styx from fortresses along the river's blighted banks, where it flows through Dis and Stygia. Souls arriving in the form of [lemures](/3-Mechanics/CLI/bestiary/fiend/lemure.md) have no personalities or memories; they're driven only by the desire to commit evil. The amnizus that patrol here drill the rules of the Nine Hells into the new arrivals' pitiful brains and marshal the lemures into legions.


## Statblock

```ad-statblock
title: Amnizu
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/MTF/Amnizu.webp#token)
*Medium fiend (devil), Lawful Evil*

- **Armor Class** 21 (natural armor)
- **Hit Points** 202 (`27d8 + 81`) 
- **Speed** 30 ft., fly 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|13 (+1)|16 (+3)|20 (+5)|12 (+1)|18 (+4)|

- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +7, Constitution +9, Wisdom +7, Charisma +10
- **Skills** Perception +7
- **Senses** darkvision 120 ft., passive Perception 17
- **Damage Resistances** cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** fire, poison
- **Condition Immunities** [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed), [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)
- **Languages** Common, Infernal, telepathy 1,000 ft.
- **Challenge** 18

## Traits

***Devil's Sight.*** Magical darkness doesn't impede the amnizu's darkvision.

***Magic Resistance.*** The amnizu has advantage on saving throws against spells and other magical effects.

***Innate Spellcasting.*** The amnizu's innate spellcasting ability is Intelligence (spell save DC 19, +11 to hit with spell attacks). The amnizu can innately cast the following spells, requiring no material components:

**At will**: [charm person](/3-Mechanics/CLI/spells/charm-person.md), [command](/3-Mechanics/CLI/spells/command.md)

**1/day each**: [dominate monster](/3-Mechanics/CLI/spells/dominate-monster.md), [feeblemind](/3-Mechanics/CLI/spells/feeblemind.md)

**3/day each**: [dominate person](/3-Mechanics/CLI/spells/dominate-person.md), [fireball](/3-Mechanics/CLI/spells/fireball.md)

## Actions

***Multiattack.*** The amnizu uses Poison Mind. It also makes two attacks: one with its whip and one with its Disruptive Touch.

***Taskmaster Whip.*** *Melee Weapon Attack:* +11 to hit, reach 10 ft., one target. *Hit:* 10 (`2d4 + 5`) slashing damage plus 33 (`6d10`) force damage.

***Disruptive Touch.*** *Melee Spell Attack:* +11 to hit, reach 5 ft., one target. *Hit:* 44 (`8d10`) necrotic damage.

***Poison Mind.*** The amnizu targets one or two creatures that it can see within 60 feet of it. Each target must succeed on a DC 19 Wisdom saving throw or take 26 (`4d12`) necrotic damage and is [blinded](/3-Mechanics/CLI/rules/conditions.md#blinded) until the start of the amnizu's next turn.

***Forgetfulness (Recharge 6).*** The amnizu targets one creature it can see within 60 feet of it. That creature must make a DC 18 Intelligence saving throw and on a failure the target is [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) for 1 minute. A [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) creature repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target remains [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned) for the full minute, it forgets everything it sensed, experienced, and learned during the last 5 hours.

## Reactions

***Instinctive Charm.*** When a creature within 60 feet of the amnizu makes an attack roll against it, and another creature is within the attack's range, the attacker must make a DC 19 Wisdom saving throw. On a failed save, the attacker must target the creature that is closest to it, not including the amnizu or itself. If multiple creatures are closest, the attacker chooses which one to target. If the saving throw is successful, the attacker is immune to the amnizu's Instinctive Charm for 24 hours.
```
^statblock