import {useContext} from "react";
import GameContext from "../../context/GameContext";
import styles from './Header.module.css';

const Header = () => {
  const context = useContext(GameContext);

  const playerTurn = context.playerTurn;

  const newGameHandler = () => {
    context.newGame();
  };

  return (
    <header className={styles.header}>
      <div>
        <h1>Mancala</h1>
        <button onClick={newGameHandler}>
            New Game
        </button>
      </div>
    </header>
  );
};

export default Header;