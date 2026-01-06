import React, {useContext} from "react";
import GameContext from "../../context/GameContext";
import styles from './Footer.module.css';

const Footer = () => {
  const context = useContext(GameContext);

  let status = `Player ${context.playerTurn}'s turn`;

  context.gameOver ? status = "Game over" : `Player ${context.playerTurn}'s turn`;

  return (
    <p className={styles.footer}>
      <p>{status}</p>
    </p>
  );
};

export default Footer;
