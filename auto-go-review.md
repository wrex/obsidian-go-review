<%*
const folder = "Go-reviews/sgf/";
const items = app.vault.getFiles().filter(x => x.path.startsWith(folder));
const selectedItem = (await tp.system.suggester((item) => item.basename, items)).basename;
const file = tp.file.find_tfile(selectedItem + ".sgf")
const sgf = await tp.file.include(file)
const filepath = folder + selectedItem + ".sgf";
const meta = tp.user.parseSgf(sgf);

let title = tp.file.title;
// Generate a new filename if untitled
if (title.startsWith("Untitled")) {
    await tp.file.rename(
      meta.datePlayed + "-" 
      + meta.playerBlack + "-" 
      + meta.playerWhite + "-" 
      + meta.results);
}
_%>
---
place: "<% meta.place %>"
datePlayed: "<% meta.datePlayed %>"
dateReviewed: "<% tp.date.now() %>"
app: "<% meta.app %>"
size: "<% meta.size %>"
annotator: "<% meta.annotator %>"
playerBlack: "<% meta.playerBlack %>"
playerWhite: "<% meta.playerWhite %>"
blackRank: "<% meta.blackRank %>"
whiteRank: "<% meta.whiteRank %>"
copyright: "<% meta.copyright %>"
timeLimit: "<% meta.timeLimit %>"
overtime: "<% meta.overtime %>"
results: "<% meta.results %>"
rules: "<% meta.rules %>"
handicap: "<% meta.handicap %>"
komi: "<% meta.komi %>"
sgf: "![[<% filepath %>]]"
tags:
  - go
---

## Overall thoughts

<% tp.file.cursor() %>

## Biggest blunders

## Uncomfortable bits

## Further Study

### Game file
(click to open in Sabaki): ![[<% filepath %>]]
