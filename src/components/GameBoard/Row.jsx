import {useContext} from 'react';
import GameContext from '../../context/GameContext';
import Pit from './Pit';
import styles from './Row.module.css';

function Row(props) {
    const context = useContext(GameContext);
    const moveStoneHandler = (id)=> {
      context.moveStone(id);
    };

    let pits = [];
    for (let i=0; i<6; i++) {
        pits.push(<Pit 
          isValid={props.playerTurn} 
          stones={props.stones[i]} 
          id={{row: props.row, pit: i, player: context.playerTurn}} 
          onMove={moveStoneHandler}
          />)
    }

    // reverse the direction of first row
    const classes = `${styles.row} ${props.row === 1 ? styles.reverse : ''}`

    return (
      <div className={classes} id={props.row} >
        {pits}
      </div>
    );
}

export default Row;