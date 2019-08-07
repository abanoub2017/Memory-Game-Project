# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## How The Game Works
    The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: open two hidden cards at a time to locate the ones that match!

Each turn:
- The player opens one card over to reveal its underlying symbol.
- The player then opens a second card, trying to find the corresponding card with the same symbol and that will be counted as one move.
- If the cards match, both cards stay opened.
- If the cards do not match, both cards are closed again.

The stars rating depends on the number of moves:
- ⭐️⭐️⭐️ If the moves are between 8 and 11.
- ⭐️⭐️ If the moves are between 12 and 19.
- ⭐️ If the moves are 20 or more.
The game ends once all cards have been correctly matched. The player could restart the game at any time by clicking on the restart icon.