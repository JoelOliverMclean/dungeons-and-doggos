---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ttp
- monster/cr/1-2
- monster/size/small
- monster/type/undead
statblock: inline
aliases: ["Topi"]
---
# [Topi](3-Mechanics\CLI\bestiary\undead/topi-ttp.md)
*Source: The Tortle Package p. 22*  

Topis are similar to zombies. Before a topi is animated, its corpse is shrunk until it stands only 2 feet tall, and its heart is cut out and replaced with a leather bag that contains a live poisonous snake. The snake requires neither air nor sustenance, and it magically renders the topi's claws venomous. When a topi dies, the snake inside it dies too. The process of creating a topi is known only to a handful of evil priests and necromancers.

Topis are more difficult to turn than ordinary zombies, and their spongy bodies make them resistant to bludgeoning.

## Undead Traits

A topi doesn't require air, food, drink, or sleep.

```statblock
"name": "Topi (TTP)"
"size": "Small"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "7"
- !!int "15"
- !!int "12"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "30 ft."
"damage_resistances": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages it knew in life but can't speak"
"cr": "1/2"
"traits":
- "desc": "The topi has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
- "desc": "If damage reduces the topi to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5+the damage taken, unless the damage is radiant or\
    \ from a critical hit. On a success, the topi drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage plus 2 (1d4) poison damage, and the target must succeed\
    \ on a DC 11 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/rules/conditions.md#poisoned)\
    \ until the end of the target's next turn."
  "name": "Venomous Claws"
"source":
- "TTP"
"image": "https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/TTP/Topi.webp"
```
^statblock