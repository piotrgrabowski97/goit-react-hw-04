import PropTypes from 'prop-types';
import styles from './css/ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={image.urls.small} alt={image.alt_description} />
        </div>
    );
};

ImageCard.propTypes = {
    image: PropTypes.shape({
        urls: PropTypes.shape({
            small: PropTypes.string.isRequired,
        }).isRequired,
        alt_description: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageCard;