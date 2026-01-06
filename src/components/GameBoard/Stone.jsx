import styles from './Stone.module.css'
import Shine from './Shine'

function Stone() {
    return (
        <div className={styles.stone}>
            <Shine />
        </div>
    );
}

export default Stone;