```dataview
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, Class, Race, level as "Level", Role
from "1-Party"
where (Role = "Player") 
where (Status = "Active") 
```

<br> %% this forces a break line into the note %%

```dataview
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, hp as "HP", ac as "AC", modifier as "Prof", pasperc As "Passive Perception (WIS)"
from "1-Party"
where (Role = "Player") 
where (Status = "Active") 
```