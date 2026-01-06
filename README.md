# Mancala Game

This project is a two-player online version of the boardgame Mancala. 

## Game Rules
This version of the game has a slight alteration of the original rules:

Each player has 6 pits (found at either the top or bottom of the board) and 1 store (found on the left and right).
Each pits starts with 4 stones. The goal of the game is to finish with the most stones in your store. The game ends when all 12 pits are empty.

A player makes a move by selecting one of their 6 pits with stones. The player picks up the stones from that pit and moves along the board in a counter-clockwise motion, dropping one stone in each pit they pass. If they pass their store, they place a stone there too, however, they skip over their opponents store.

If a player places their last stone from the selected pit in their store, they are granted another turn and can once again select from any of their 6 pits. Alternatively, if the last stone lands in a non-empty pit, the player then picks up the stone from that pit and continues their turn. If the last stone lands in an empty pit, the turn ends and the next player goes.

If player reaches their turn and all pits on that player's side of the board are empty, the player has the opportunity to select a pit from their opponent's side.

## Run Intructions
Ensure you have React and JavaScript installed. This game is not suitable for mobile devices.

1. Clone repository to the directory of your choosing
```bash
git clone https://github.com/elsanorm17/Mancala
```
2. Run the following command in the new Mancala directory
```bash
npm run dev
```
3. The game can be found at **http://localhost:5173/**
