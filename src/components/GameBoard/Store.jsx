import React from "react";
import styles from "./Store.module.css";
import Stone from "./Stone";

function Store(props) {
   
    let stones = [];
    if (props.stones > 0) {
        for (let i=0; i<props.stones; i++) {
            stones.push(<Stone />);
        }
    }

    return (
        <div className={styles.borderbox}>
            <div key={props.player} className={styles.store}>
                {stones}
            </div>
        </div>
    );
}

export default Store;