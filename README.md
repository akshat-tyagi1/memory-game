# Pokémon Memory Game

A memory game built with React. Click each Pokémon card only once: every unique click scores a point, and clicking the same card twice resets your score. The cards reshuffle after every click, so you have to remember which ones you've already picked.

Built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) React curriculum.

**Live demo:** _add your deployed link here_

<!-- Add a screenshot: ![Pokémon Memory Game screenshot](./screenshot.png) -->

## How to play

1. Click any Pokémon card to score a point.
2. The cards shuffle after every click.
3. Click a card you've already picked and your score resets to 0.
4. Your best score is tracked for the session. The maximum is 18, one point per card.

## Features

- Fetches 18 Pokémon (name and official artwork) from [PokéAPI](https://pokeapi.co/), with all requests running in parallel
- Cards are shuffled on load and after every click using the Fisher–Yates algorithm
- Live score and best score
- Friendly error message with a retry button if the Pokémon fail to load
- Responsive layout: a 6 × 3 grid on landscape screens and a 3 × 6 grid on portrait screens, sized so every card fits on screen without scrolling
- Hover effects only on devices that support hover, with press feedback for touch

## Built with

- [React](https://react.dev/) (hooks: `useState`, `useEffect`)
- [Vite](https://vite.dev/)
- [PokéAPI](https://pokeapi.co/) for the data
- Plain CSS: custom properties, CSS Grid, `clamp()` and container query units
- Fonts: Fredoka and Nunito from Google Fonts

## Getting started

Clone the repository and install the dependencies:

```bash
git clone <your-repository-url>
cd Memory-Game
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Project structure

```
src/
├── components/
│   ├── Header.jsx       # Title, instructions and scoreboard
│   ├── ScoreBoard.jsx   # Current score and best score
│   ├── CardsGrid.jsx    # Lays out the cards
│   └── Card.jsx         # A single clickable card
├── utils/
│   ├── fetchCards.js    # Fetches one Pokémon and returns the data a card needs
│   └── shuffleCards.js  # Returns a shuffled copy of the cards
├── App.jsx              # Owns the game state and click logic
└── main.jsx
```

`App` holds all of the game state (cards, clicked ids, best score, error) and passes data and the click handler down through props. The score is derived from the number of clicked ids, so it can never get out of sync.

## What I practiced

- Managing state with hooks and lifting it to the closest common parent
- Fetching data on mount with `useEffect`, and running requests in parallel with `Promise.all`
- Handling failed requests with `try/catch` and conditional rendering
- Never mutating state: the shuffle works on a copy
- Using stable ids as `key` props for lists that get reordered
- Responsive layout with CSS Grid, media queries and `clamp()`

## Credits

- Pokémon data and artwork from [PokéAPI](https://pokeapi.co/). Pokémon and Pokémon character names are trademarks of Nintendo.
- Project idea from [The Odin Project](https://www.theodinproject.com/).
