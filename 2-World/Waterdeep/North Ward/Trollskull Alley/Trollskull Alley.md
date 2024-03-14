---
NoteIcon: Settlement
tags: [location]
---

> [!summary] Description
>  _Inhale_ The aroma of freshly baked bread and roasting meats mingles with the stench of the sewers as you step into Trollskull Alley. The cobbles beneath your feet are worn smooth by countless travelers, their rhythmic clickety-clack echoing between the buildings. Above you, a kaleidoscope of banners in vibrant hues flutters in the breeze, advertising the wares of local shops. A motley crew bustles about the alley: a dwarf with a booming laugh haggles with a tiefling merchant, a group of human children chase each other around with sticks, and a cloaked figure scurries into the shadows as you approach. To your left, the grand facade of a shuttered mansion looms, its peeling paint and boarded windows hinting at a glorious past. Welcome to Trollskull Alley, a unique slice of life in the bustling city of Waterdeep.

## Neighbourhood Map

```leaflet
### Tutorial: https://youtu.be/54EyMzJP5DU
### id must be unique
id: Map_Trollskull_Alley
### Lock pins so they can't be moved
lock: false 
### If true, view of map will recenter as you zoom out. 
recenter: true
### If true, disables mouse scroll for zomming in and out of a map. Button controls still work. 
noScrollZoom: false
image: [[Trollskull Alley-20240311105803945.webp]]
### Map Pixel Height x 1 / (Pixels between Bar Scale / 100)
### Map Pixel Width x 1 / (Pixels between Bar Scale / 100) 
### Note that this formula requires adjustments depending on your map. The idea is to determine the number of units between your bar scale. We divide by 100 here because my bar scale measures in 100 units. If your maps scale bar measures in units of 50 them you should divide by 50 instead. The idea is to calculate how many pixels are equal to 1 unit. 
bounds: [[0,0], [2550, 3300]]
height: 900px
width: 95%
### This sets where the map starts by default. Set it to the middle (half) of your bounds. 
lat: 1275
long: 1650
### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map. 
minZoom: -1.5
### Max zoom is 18. 
maxZoom: -1.5
### Hover mouse over the Reset Zoom icon to see your current zoom level. 
defaultZoom: -1.5
### How far it zooms in or out with each step. Can be in decimals. 
zoomDelta: 0.5
### This is a string so can be any text. Change it to match your maps measurement scale. 
unit: meters
scale: 1
darkMode: false
```

## Places
- [[Trollskull Alley]]
- [[The Bent Nail]]
- [[Book Wyrm's Treasure]]
- [[Corellon's Crown]]
- [[The Steam and Steel]]
- [[Tiger's Eye]]

## Ref
- [[04-trollskull-alley|Trollskull Alley (WDH)]]