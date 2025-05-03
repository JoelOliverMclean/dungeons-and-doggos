---
AssociatedGroup: 
Gender: Male
Race: "[[Boarkin]]"
Age: 
Class: Commoner
Alignment: Neutral Evil
Character-Role: 
Location: "[[The Sleeping Snake]]"
NoteIcon: npc_male
Vitality: 
tags:
  - npc
accent: Gruff Irish
---



> [!infobox]
> # `=this.file.name`
> ![[ImagePlaceholder.png|cover hsmall]]
> [[ImagePlaceholder.png|Show To Players]]
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

**Large intimidating presence of Borrick the Boarkin, humanoid in structure with a boars head tusks and all. He wears a leather apron and cloth trousers, no shoes (hooves instead) and no shirt**

**Borrick Slymane, the rough boar-kin innkeeper of The Sleeping Snake, is a formidable and imposing figure. Standing tall with a broad, muscular frame covered in bristly fur, his boar-like features—sharp tusks and a prominent snout—give him a fearsome appearance. His clothes are grimy and worn, adding to his rough demeanor. Borrick’s gruff voice and steely gaze make it clear that he runs his shady tavern with a no-nonsense attitude, ensuring that only the toughest or most discreet patrons feel at ease in his establishment.**


> [!statblock]
> ```statblock
> columns: 2
> name: Borrick Slymane
> size: Medium
> type: Humanoid
> subtype: Boar-kin
> alignment: Chaotic Neutral
> ac: 14
> hp: 65
> speed: 30 ft.
> stats: [16, 12, 15, 10, 11, 14]
> saves:
>   - Strength: +6
>   - Constitution: +5
> skillsaves:
>   - Intimidation: +6
>   - Persuasion: +5
>   - Sleight of Hand: +3
> senses: Darkvision 60ft., passive Perception 10
> languages: Common, Infernal, Boar
> cr: 5
> traits:
>   - ["Boar’s Resilience", "Borrick has advantage on saving throws against being frightened or charmed."]
>   - ["Brutal", "When Borrick hits with a melee weapon attack, he can deal an additional 7 (2d6) damage. He can use this feature once per short or long rest."]
> actions:
>   - ["Multiattack", "Borrick makes two attacks: one with his club and one with his gore attack."]
>   - ["Club", "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 12 (2d6 + 3) bludgeoning damage."]
>   - ["Gore", "Borrick can use his tusks to make a melee weapon attack (reach 5 ft., one target). On a hit, the target takes 10 (2d6 + 3) piercing damage. He can use this attack only once per turn."]
>   - ["Intimidating Presence (Recharge 5–6)", "Borrick roars and glowers menacingly. Each creature of his choice within 30 feet and aware of him must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if Borrick is within line of sight, ending the effect on itself on a success."]
> reactions:
>   - ["Dirty Tactics", "When a creature hits Borrick with a melee attack, he can use his reaction to make a melee attack against that creature with advantage."]
> ```

```encounter-table
name: TemplateNPC
creatures:
 - 1: Commoner
```

## Relationships

## Notes
