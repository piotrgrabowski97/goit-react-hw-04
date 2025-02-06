import ImageCard from './ImageCard';
import PropTypes from 'prop-types';
import styles from './css/ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={styles.gallery}>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard image={image} onClick={() => onImageClick(image)} />
                </li>
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            urls: PropTypes.shape({
            small: PropTypes.string.isRequired,
            }).isRequired,
            alt_description: PropTypes.string,
        })
    ).isRequired,
    onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;