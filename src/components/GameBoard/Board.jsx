import {useContext} from "react";
import styles from "./Board.module.css";
import Store from "./Store"
import Row from "./Row"
import GameContext from "../../context/GameContext";

function Board() {
  const context = useContext(GameContext);

  const store1 = context.store1;
  const store2 = context.store2;
  const row1 = context.row1;
  const row2 = context.row2;

  return (
    <div className={styles.board}>
        <div className={styles.field}>
            <Store stones={store1}/>
            <section>
                <Row playerTurn={context.activeRow===1} stones={row1} row={1}/>
                <Row playerTurn={context.activeRow===2} stones={row2} row={2}/>
            </section>
            <Store stones={store2}/>
        </div>
    </div>
  );
}

export default Board;
