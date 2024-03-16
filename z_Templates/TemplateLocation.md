---
NoteIcon: Default
tags: [location]
---

<% await tp.file.move("/2-World/" + tp.file.title) %>

<%*
const hasTitle = !tp.file.title.startsWith("NewLocation");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Location Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>


> [!example|right]  ## NPCs
> ```dataview
> LIST
> FROM "3-Mechanics/NPCs"
> WHERE containsword(meta(location).path, this.file.name)
> ```

## Description

## Notes
