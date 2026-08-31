# 2048 Game

## Introduction

Welcome to the **2048 Game** project, a browser-based implementation of the popular **2048 puzzle game**. The goal of the game is to combine tiles with the same value and reach the **2048 tile**.

The project focuses on implementing the core game mechanics with JavaScript while providing a clear, responsive, and user-friendly interface.

### Key Features

- **4x4 Game Board**: Classic 2048 gameplay on a 4x4 grid.
- **Tile Movement**: Move tiles in four directions using keyboard controls.
- **Tile Merging**: Tiles with the same value are combined into one tile with double the value.
- **Score Tracking**: The current score is updated automatically after each successful merge.
- **Win Condition**: The game detects when the player reaches the 2048 tile.
- **Game Over Detection**: The game automatically detects when no more valid moves are available.
- **Restart Functionality**: Players can start a new game at any time.
- **Responsive Interface**: The game layout is designed to remain comfortable to use on different screen sizes.

## Challenges

Developing the 2048 game required solving several challenges related to game logic, state management, and user interaction.

### Key Challenges

1. **Tile Movement and Merging**
   Implementing movement logic required correctly shifting tiles, removing empty spaces, and merging matching tiles without allowing multiple merges during a single move.

2. **Game State Management**
   The application needs to keep track of the board state, score, available moves, and the current game status.

3. **Random Tile Generation**
   After each valid move, a new tile must be added to an available position on the board while maintaining the rules of the game.

4. **Win and Game Over Conditions**
   The game must detect when the player reaches 2048 and when there are no possible moves left.

5. **User Interaction**
   Keyboard input has to be processed reliably so that the board reacts correctly to movement commands.

## Technical Requirements

To run this project locally, you will need:

- A modern web browser such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.
- Node.js and NPM if the project uses the provided package configuration and development scripts.

## Installation and Setup

Follow these steps to run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/username/2048Game.git
```

2. Navigate to the project directory:

```bash
cd 2048Game
```

3. Install the dependencies:

```bash
npm install
```

4. Start the project using the configured development command:

```bash
npm start
```

5. Open the local address provided by the development server in your browser.

## Usage

Once the game is started, use the keyboard arrow keys to move the tiles:

- **Arrow Up** — move tiles up
- **Arrow Down** — move tiles down
- **Arrow Left** — move tiles left
- **Arrow Right** — move tiles right

When two tiles with the same value collide, they merge into a new tile with their combined value.

The main objective is to create the **2048 tile** while achieving the highest possible score.

## Example

- **DEMO LINK**: [https://rostyslav452.github.io/2048Game/](https://rostyslav452.github.io/2048Game/)

## Technologies Used

This project was developed using the following technologies:

- **HTML5** — provides the structure of the application.
- **CSS3** — responsible for styling, layout, and responsive design.
- **JavaScript (ES6+)** — implements the game mechanics, tile movement, merging, scoring, and game state management.
- **Git** — used for version control.
- **GitHub** — used for repository hosting and project management.

## Game Logic

The game is based on a simple set of rules:

1. The board starts with a small number of randomly generated tiles.
2. The player moves all tiles in one of four directions.
3. Tiles with the same value merge when they collide.
4. After every valid move, a new tile appears in an empty cell.
5. The score increases whenever tiles are merged.
6. The player wins after creating the **2048** tile.
7. The game ends when there are no empty cells and no valid merges remain.

## Design Specifications

The interface is designed to work across different screen sizes:

- **Desktop** — 1280px and larger
- **Tablet** — around 640px
- **Mobile** — 320px and larger

The responsive layout ensures that the game board and interface elements remain accessible on smaller screens.

## Project Goal

The main goal of this project is to practice:

- JavaScript game logic
- Arrays and data manipulation
- DOM manipulation
- Event handling
- State management
- Responsive web design
- Writing maintainable and reusable code

## License

This project is intended for educational and demonstration purposes.
