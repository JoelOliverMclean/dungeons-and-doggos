---
AssociatedGroup: 
Gender: Male
Race:
  - "[[half-ogre-ogrillon|Half-Ogre (Ogrillon)]]"
Age: 
Class:
  - "[[commoner|Commoner]]"
Alignment: Neutral Good
Character-Role: 
Location: "[[Dragon's Head Tavern]]"
NoteIcon: npc_male
Vitality: 
tags:
  - npc
accent: Groggy
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

**Erig is a towering figure with a friendly demeanor, known for his strength and gentle heart. He runs a tavern in the bustling town, where he's beloved by patrons for his hearty laugh and generous spirit. Though he prefers to avoid conflict, he's not one to back down when his friends or tavern are threatened. His weapon of choice is a massive wooden pillar reinforced with nails, which he keeps behind the bar for emergencies.**

**Erig, the innkeeper of the Dragon’s Head Inn, is a warm and humble ogrillon whose presence is as comforting as it is imposing. Standing tall with a robust, muscular frame and a friendly, jovial demeanor, his broad smile and gentle eyes immediately put guests at ease. His coarse, dark hair and tusks are softened by his kind, welcoming manner, and his simple, practical clothing reflects his down-to-earth nature. Erig’s hearty laugh and attentive service make the Dragon’s Head Inn a cozy refuge, where every guest feels like a cherished friend.**

> [!statblock]
> ```statblock
> columns: 2
> name: Erig
> size: Medium
> type: Giant
> subtype: Ogrillon
> alignment: Neutral Good
> ac: 13
> hp: 60
> speed: 30 ft.
> stats: [19, 10, 15, 8, 10, 12]
> skillsaves:
>   - Athletics: +6
>   - Insight: +2
>   - Persuasion: +3
> senses: Darkvision 60ft., passive Perception 10
> languages: Common, Giant
> cr: 2
> traits:
>   - ["Brute", "A melee weapon deals one extra die of its damage when Erig hits with it (included in the attack)."]
> actions:
>   - ["Multiattack", "Erig makes two attacks with his Improvised Weapon."]
>   - ["Improvised Weapon (wooden pillar with nails)", "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 15 (2d8 + 4) bludgeoning damage plus 2 (1d4) piercing damage."]
> reactions:
>   - ["Protective Instinct", "When a creature Erig can see within 5 feet of him is attacked, he can use his reaction to impose disadvantage on the attack roll."]
> ```

```encounter-table
name: TemplateNPC
creatures:
 - 1: Commoner
```

## Relationships

## Notes
