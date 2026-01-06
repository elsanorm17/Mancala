import React from "react";

const GameContext = React.createContext({
    store1: 0,
    store2: 0,
    row1: [4, 4, 4, 4, 4, 4],
    row2: [4, 4, 4, 4, 4, 4],
    playerTurn: 1,
    activeRow: 2,
    gameOver: false,
    moveStone: (id) => {},
    newGame: () => {}
});

export default GameContext;
