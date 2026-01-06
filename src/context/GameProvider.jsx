import GameContext from "./GameContext";
import {useReducer} from "react";

const defaultGameState = {
    store1: 0,
    store2: 0,
    row1: [4, 4, 4, 4, 4, 4],
    row2: [4, 4, 4, 4, 4, 4],
    playerTurn: 1,
    activeRow: 2,
    gameOver: false
}

const gameReducer = (state, action) => {

    if (action.type === "MOVE") {
        let stores = [state.store1, state.store2];
        let rows = [[...state.row1], [...state.row2]];
        let row = +action.row;
        let player = +action.player;

        let playerRow;
        player === 1 ? (playerRow = 2) : (playerRow = 1);

        let pit = action.pit;
        let stones = rows[row - 1][pit];

        rows[row - 1][pit] = 0;

        let turnOver = false;
        let gameOver = false;


        while (stones !== 0) {

            pit += 1;

            if (pit < 6) {
                if (rows[row-1][pit] === 0) {
                    rows[row-1][pit] += 1;
                    stones -= 1;

                    if (stones === 0) {
                        turnOver = true;
                    }
                } else if (stones === 1) {
                    stones += rows[row-1][pit];
                    rows[row-1][pit] = 0;
                } else {
                    rows[row-1][pit] += 1;
                    stones -= 1;
                }

            } else {
                if (row === playerRow) {
                    stores[row-1] += 1;
                    stones -= 1;

                    if (stones === 0) {
                        row === 1 ? (row = 2) : (row = 1);
                    }
                }
                pit = -1;
                row === 1 ? (row = 2) : (row = 1);
            }

        }

        if (!turnOver) {
            row = playerRow;
        } else {
            player === 1 ? (player=2) : (player=1);
            playerRow  === 1 ? (row=2) : (row=1);
        }

        const sum = rows[row-1].reduce((sum, val) => sum + val, 0);
        const oppSum = rows[1-(row-1)].reduce((sum, val) => sum + val, 0);

        if (sum === 0) {
            row === 1 ? (row=2) : (row=1);
        }

        if (sum === 0 && oppSum === 0) {
            gameOver = true;
        }

        
        return {
            store1: stores[0],
            store2: stores[1],
            row1: [...rows[0]],
            row2: [...rows[1]],
            playerTurn: player,
            activeRow: row,
            gameOver: gameOver
        };
    }

    if (action.type === "NEW_GAME") {
        return defaultGameState;
    }
}

const GameProvider = (props) => {
    const [gameState, gameAction] = useReducer(
        gameReducer,
        defaultGameState
    );
  
    const moveStoneHandler = (id) => {
        gameAction({
            type: 'MOVE',
            row: id.row,
            pit: id.pit,
            player: id.player,
        });
    };

    const newGameHandler = (total1, total2) => {
        gameAction({
            type: "NEW_GAME",
            total1: total1,
            total2: total2
        })
    };

  
    const gameContext = {
        store1: gameState.store1,
        store2: gameState.store2,
        row1: gameState.row1,
        row2: gameState.row2,
        playerTurn: gameState.playerTurn,
        activeRow: gameState.activeRow,
        gameOver: gameState.gameOver,
        moveStone: moveStoneHandler,
        newGame: newGameHandler
    };

    return (
        <GameContext.Provider value={gameContext}>
            {props.children}
        </GameContext.Provider>
    );
};
  
  export default GameProvider;