# Software Development Roadmap

A self-contained HTML/CSS/JavaScript learning roadmap for becoming a software engineer.

## Features

- Ordered learning path: 14 stages, 100+ topics
- **~1,200 subtopics**: every topic expands into the full list of things to learn
  (e.g. HTML → forms, tables, semantic layout, accessibility…; Node.js → event loop, streams, core modules…)
- Tick individual subtopics or a whole topic at once
- Progress tracking at subtopic, stage and overall level
- "Recommended Next" points to your next unfinished subtopic
- Search covers topics *and* subtopics
- Category filters, expandable stages and topics
- Progress saved in browser localStorage
- Responsive design

## Files

- `index.html`: page structure
- `style.css`: styling
- `subtopics.js`: **all subtopic data** (edit this to add/remove items)
- `script.js`: stages, topics and rendering logic

## Editing subtopics

In `subtopics.js`, each topic is a list of `"Group|item, item, item"` strings (items separated by commas).

## Run

Open `index.html` in any modern browser. No installation or server required.
