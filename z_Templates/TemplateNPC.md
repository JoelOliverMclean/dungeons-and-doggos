---
AssociatedGroup: 
Gender: Male
Race: 
Age: 
Class: 
Alignment: 
Character-Role: 
Location: 
NoteIcon: npc
Vitality: 
tags:
  - npc
accent:
---

<% await tp.file.move("/3-Mechanics/NPCs/" + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewNPC");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter NPC Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

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

**<Add description here, extend it with AI Text Generator using Ctrl J>**


> [!statblock]
> ```statblock
> columns: 2
> name: "[Insert Name]"
> size: Medium
> type: Humanoid
> subtype: "[Insert Race]"
> alignment: "[Insert Alignment]"
> ac: 15
> hp: 45
> speed: 30 ft.
> stats: [10, 18, 14, 12, 11, 16]
> saves:
>   - Dexterity: +6
>   - Intelligence: +3
> skillsaves:
>   - Acrobatics: +6
>   - Deception: +5
>   - Perception: +4
>   - Sleight of Hand: +6
>   - Stealth: +8
> senses: Darkvision 60ft., passive Perception 14
> languages: Common, Elvish, Thieves' Cant, Undercommon
> cr: 3
> traits:
>   - ["e.g. Cunning Action", "On each of his turns, Kael can use a bonus action to take the Dash, Disengage, or Hide action."]
> actions:
>   - ["e.g. Shortsword", "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 8 (1d6 + 4) piercing damage."]
> reactions:
>   - ["e.g. Uncanny Dodge", "When an attacker that Kael can see hits him with an attack, he can use his reaction to halve the attack's damage against him."]
> ```

```encounter-table
name: TemplateNPC
creatures:
 - 1: Commoner
```

## Relationships

## Notes
