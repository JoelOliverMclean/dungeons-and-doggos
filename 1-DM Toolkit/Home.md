---
obsidianUIMode: preview
---

> [!cards|3]
> **[[Waterdeep]]**
> [![[Map_Waterdeep_Full.webp\|sban htiny ctr]]](Waterdeep%20Map)
> 
> **Link**
> [![[JourneyBoard.png\|sban htiny ctr]]](Journey%20Board)
>
> **Link**
> [![[PartyLogo.jpg\|sban htiny ctr p+t]]](Nerds%20With%20Dogs)


> [!infobox]
> # Session Journals
> ```dataview
TABLE WITHOUT ID link(file.name) AS "Session Date", Status, players
from "1-Session Journals"
where (type = "Session Journal")
SORT file.name DESC

```dataview  
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, Class, Race, level, Role  
from "1-Party"  
where (Role = "Player")  
where (Status = "Active")  
```

# Recently Modified NPCs

```dataview  
TABLE WITHOUT ID link(file.name) AS "NPC Name", Gender, accent as Accents, Race, Age, Location, AssociatedGroup
FROM "3-Mechanics/NPCs"
WHERE (startswith(NoteIcon, "npc")) 
SORT file.mtime DESC
LIMIT 10
```

# Recently Modified Locations

```dataview  
TABLE WITHOUT ID link(file.name) AS "Location Name", type, Government, Community-Size, size, population  
FROM "2-World"
WHERE contains(tags, "location")  
SORT file.mtime DESC
LIMIT 10
```


# Recently Modified Notes
```dataview
TABLE WITHOUT ID
    link(file.path, file.folder + " / " + file.name) AS "Note",
    file.mtime AS "Last modified"
FROM "/"
WHERE file.mtime >= date(today) - dur(30 days)
AND file.name != this.file.name
    AND !contains(file.path, "z_Assets")
    AND !contains(file.path, "Inline Scripts")
    AND !contains(file.path, "z_Templates")
    AND !contains(file.path, "daily notes")
    AND !contains(file.path, "BRAT")
SORT file.mtime DESC
LIMIT 10
```

![[Vault Report]]


