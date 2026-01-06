import styles from './Pit.module.css';
import Stone from './Stone'


function Pit(props) {
    let isValid = props.isValid;

    let stones = [];

    if (props.stones > 0) {
        for (let i=0; i<props.stones; i++) {
            stones.push(<Stone />);
        }
    } else {
        isValid = false;
    }
  
    return (
        <button className={styles.pit} disabled={!isValid} onClick={props.onMove.bind(null, props.id)}>
            {stones}
        </button>
    );
}

export default Pit;