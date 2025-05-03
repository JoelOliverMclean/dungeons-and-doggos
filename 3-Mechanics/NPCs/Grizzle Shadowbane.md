---
AssociatedGroup: "[[Xanathar Guild]]"
Gender: Male
Race:
  - "[[goblin-vgm|Goblin]]"
Age: 
Class:
  - "[[barbarian|Barbarian]]"
Alignment: Chaotic Evil
Character-Role: 
Location: "[[The Angry Coxswain]]"
NoteIcon: npc_male
Vitality: 
tags:
  - npc
accent: Gruff but a bit squeaky
---



> [!infobox]
> # `=this.file.name`
> ![[Grizzle Shadowbane-20241017193748895.webp|cover hsmall]]
> [[Grizzle Shadowbane-20241017193748895.webp|Show To Players]]
> ###### Basic Information
> Type |  Stat |
> ---|---|
> Location | `=this.Location` |
> Group | `=this.AssociatedGroup` |
> Sex | `=this.Gender` |
> Race | `=this.Race` |
> Age | `=this.Age` |
> Condition | Healthy |
> ###### Rules Info
> Type |  Stat |
> ---|---|
> Alignment | `=this.Alignment` |
> Class | `=this.Class` |
> Character Role | `=this.Character-role` |

# `=this.file.name`
## Profile

> ### RP
> Accent: **`=this.accent`**

**Grizzle Shadowbane is a fierce and cunning goblin, standing a mere 3 feet tall with green skin, sharp teeth, and a constant scowl. His eyes gleam with a mixture of anger and intelligence, and his body is covered in scars from countless battles. Grizzle has a reputation for his brutal combat style and unwavering loyalty to the Xanathar Guild. He wears a patchwork of hide armor, and his greataxe is always ready to cleave through his enemies.**

> [!statblock]
> ```statblock
> columns: 2
> name: Grizzle Shadowbane
> size: Small
> type: Humanoid
> subtype: Goblin
> alignment: Chaotic Evil
> ac: 16
> hp: 65
> speed: 30 ft.
> stats: [16, 14, 16, 10, 12, 8]
> saves:
>   - Strength: +6
>   - Constitution: +6
> skillsaves:
>   - Athletics: +6
>   - Intimidation: +2
>   - Stealth: +5
>   - Survival: +4
> senses: Darkvision 60ft., passive Perception 11
> languages: Common, Goblin
> cr: 4
> traits:
>   - ["Reckless Attack", "When Grizzle makes his first attack on his turn, he can decide to attack recklessly. Doing so gives him advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against him have advantage until his next turn."]
>   - ["Danger Sense", "Grizzle has advantage on Dexterity saving throws against effects that he can see, such as traps and spells. To gain this benefit, he can't be blinded, deafened, or incapacitated."]
>   - ["Fury of the Small (1/Short or Long Rest)", "When Grizzle hits a creature with an attack and the creature is larger than him, he can deal an extra 10 damage to the creature."]
>   - ["Nimble Escape", "Grizzle can take the Disengage or Hide action as a bonus action on each of his turns."]
> bonus_actions:
>   - ["Rage (3/Day)","As a bonus action, Grizzle can enter a rage for up to 1 minute. While raging, he gains the following benefits if he isn't wearing heavy armor: He has advantage on Strength checks and Strength saving throws, When he makes a melee weapon attack using Strength, he gains a +2 bonus to the damage roll, He has resistance to bludgeoning, piercing, and slashing damage. He can end his rage as a bonus action. If he is knocked unconscious or if his turn ends and he hasn't attacked a hostile creature since his last turn or taken damage since then, his rage ends."]
> actions:
>   - ["Multiattack", "Grizzle makes two melee attacks."]
>   - ["Greataxe", "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 10 (1d12 + 3) slashing damage."]
>   - ["Javelin", "_Melee or Ranged Weapon Attack:_ +6 to hit, reach 5 ft. or range 30/120 ft., one target. _Hit:_ 7 (1d6 + 3) piercing damage."]
> ```

```encounter-table
name: TemplateNPC
creatures:
 - 1: Commoner
```

## Relationships

## Notes
