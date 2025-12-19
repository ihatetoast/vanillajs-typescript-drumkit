# Drumkit in Vanilla JS and Typescript

## What
A drumkit using the keyboard's middle-row keys. On keydown a sound is played. These sound files are borrowed from Wes Bos's Javascript 30 drumkit lesson.

## Why
9 years ago, I did this tutorial as a noob and completely followed along: his style, his layout, etc. Recently I went through old repos and found where I did his drumkit and another on my own with my own sounds and called it [A Dumb Doldrumachine](https://www.ihatetoast.com/dumbmachine/) (z is missing). 

I decided to redo this idea (drum sounds not dumb sounds) but with Vanilla JS and TypeScript (this repo) as well as one with React and TypeScript. The styling will be my own (drummy things will be drummy, cymbal things will be cymbally -- maxing out my knowledge on percussion instruments). I also chose to have an array of objects that contain all the keys' info (key name, code, percussion name, sound file) instead of hardcoding the HTML in. If I wanted to add more sounds, I could. Or if I wanted to copy this for another key-sound game, I could.

Although the tutorial is very simple, I appreciated the reminder of things like the semantic tag `<kbd>`, `transitionend` for listening to when a CSS transition has ended, and, of course, coming up with my own style idea for the keys.

# How
The uje:
- Vite
- HTML5
- JavaScript
- CSS