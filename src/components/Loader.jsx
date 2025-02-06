import { ClipLoader } from 'react-spinners';
import styles from './css/Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <ClipLoader color="#00BFFF" height={80} width={80} />
        </div>
    );
};

export default Loader;