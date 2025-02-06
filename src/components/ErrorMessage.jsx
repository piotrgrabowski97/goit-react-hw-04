import PropTypes from 'prop-types';
import styles from './css/ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
    return <div className={styles.error}>{message}</div>;
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;