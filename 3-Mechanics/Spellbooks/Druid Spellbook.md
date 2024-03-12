---
obsidianUIMode: preview
Class: Druid
---


### Cantrips
```dataview
TABLE WITHOUT ID link(file.name, aliases[0]) AS "Spell",
map(
	filter(
		classes, 
		(x) => startswith(x, this.Class) AND !endswith(x, this.Class)
	), 
	(x) => link("/3-Mechanics/CLI/classes/" + lower(replace(replace(replace(x, " ", "-"), "(", ""), ")", "")), replace(replace(replace(x, this.Class + " ", ""), "(", ""), ")",""))
) as "Sub Classes"
from "3-Mechanics/CLI/spells"
where contains(classes, this.Class) AND contains(tags, "level/cantrip")
```

### 1st Level 
```dataview
TABLE WITHOUT ID link(file.name, aliases[0]) AS "Spell",
map(
	filter(
		classes, 
		(x) => startswith(x, this.Class) AND !endswith(x, this.Class)
	), 
	(x) => link("/3-Mechanics/CLI/classes/" + lower(replace(replace(replace(x, " ", "-"), "(", ""), ")", "")), replace(replace(replace(x, this.Class + " ", ""), "(", ""), ")",""))
) as "Sub Classes"
from "3-Mechanics/CLI/spells"
where contains(classes, this.Class) AND contains(tags, "level/1")
```

### 2nd Level 
```dataview
TABLE WITHOUT ID link(file.name, aliases[0]) AS "Spell",
map(
	filter(
		classes, 
		(x) => startswith(x, this.Class) AND !endswith(x, this.Class)
	), 
	(x) => link("/3-Mechanics/CLI/classes/" + lower(replace(replace(replace(x, " ", "-"), "(", ""), ")", "")), replace(replace(replace(x, this.Class + " ", ""), "(", ""), ")",""))
) as "Sub Classes"
from "3-Mechanics/CLI/spells"
where contains(classes, this.Class) AND contains(tags, "level/2")
```

### 3rd Level 
```dataview
TABLE WITHOUT ID link(file.name, aliases[0]) AS "Spell",
map(
	filter(
		classes, 
		(x) => startswith(x, this.Class) AND !endswith(x, this.Class)
	), 
	(x) => link("/3-Mechanics/CLI/classes/" + lower(replace(replace(replace(x, " ", "-"), "(", ""), ")", "")), replace(replace(replace(x, this.Class + " ", ""), "(", ""), ")",""))
) as "Sub Classes"
from "3-Mechanics/CLI/spells"
where contains(classes, this.Class) AND contains(tags, "level/3")
```

### 4th Level 
```dataview
TABLE WITHOUT ID link(file.name, aliases[0]) AS "Spell",
map(
	filter(
		classes, 
		(x) => startswith(x, this.Class) AND !endswith(x, this.Class)
	), 
	(x) => link("/3-Mechanics/CLI/classes/" + lower(replace(replace(replace(x, " ", "-"), "(", ""), ")", "")), replace(replace(replace(x, this.Class + " ", ""), "(", ""), ")",""))
) as "Sub Classes"
from "3-Mechanics/CLI/spells"
where contains(classes, this.Class) AND contains(tags, "level/4")
```

### 5th Level 
```dataview
TABLE WITHOUT ID link(file.name, aliases[0]) AS "Spell",
map(
	filter(
		classes, 
		(x) => startswith(x, this.Class) AND !endswith(x, this.Class)
	), 
	(x) => link("/3-Mechanics/CLI/classes/" + lower(replace(replace(replace(x, " ", "-"), "(", ""), ")", "")), replace(replace(replace(x, this.Class + " ", ""), "(", ""), ")",""))
) as "Sub Classes"
from "3-Mechanics/CLI/spells"
where contains(classes, this.Class) AND contains(tags, "level/5")
```

### 6th Level 
```dataview
TABLE WITHOUT ID link(file.name, aliases[0]) AS "Spell",
map(
	filter(
		classes, 
		(x) => startswith(x, this.Class) AND !endswith(x, this.Class)
	), 
	(x) => link("/3-Mechanics/CLI/classes/" + lower(replace(replace(replace(x, " ", "-"), "(", ""), ")", "")), replace(replace(replace(x, this.Class + " ", ""), "(", ""), ")",""))
) as "Sub Classes"
from "3-Mechanics/CLI/spells"
where contains(classes, this.Class) AND contains(tags, "level/6")
```

### 7th Level 
```dataview
TABLE WITHOUT ID link(file.name, aliases[0]) AS "Spell",
map(
	filter(
		classes, 
		(x) => startswith(x, this.Class) AND !endswith(x, this.Class)
	), 
	(x) => link("/3-Mechanics/CLI/classes/" + lower(replace(replace(replace(x, " ", "-"), "(", ""), ")", "")), replace(replace(replace(x, this.Class + " ", ""), "(", ""), ")",""))
) as "Sub Classes"
from "3-Mechanics/CLI/spells"
where contains(classes, this.Class) AND contains(tags, "level/7")
```

### 8th Level 
```dataview
TABLE WITHOUT ID link(file.name, aliases[0]) AS "Spell",
map(
	filter(
		classes, 
		(x) => startswith(x, this.Class) AND !endswith(x, this.Class)
	), 
	(x) => link("/3-Mechanics/CLI/classes/" + lower(replace(replace(replace(x, " ", "-"), "(", ""), ")", "")), replace(replace(replace(x, this.Class + " ", ""), "(", ""), ")",""))
) as "Sub Classes"
from "3-Mechanics/CLI/spells"
where contains(classes, this.Class) AND contains(tags, "level/8")
```

### 9th Level 
```dataview
TABLE WITHOUT ID link(file.name, aliases[0]) AS "Spell",
map(
	filter(
		classes, 
		(x) => startswith(x, this.Class) AND !endswith(x, this.Class)
	), 
	(x) => link("/3-Mechanics/CLI/classes/" + lower(replace(replace(replace(x, " ", "-"), "(", ""), ")", "")), replace(replace(replace(x, this.Class + " ", ""), "(", ""), ")",""))
) as "Sub Classes"
from "3-Mechanics/CLI/spells"
where contains(classes, this.Class) AND contains(tags, "level/9")
```
