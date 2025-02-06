import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styles from './css/ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    if (!image) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
            >
            <img src={image.urls.regular} alt={image.alt_description} />
            <p>Author: {image.user.name}</p>
            <p>Likes: {image.likes}</p>
            <p>Description: {image.description || 'No description'}</p>
        </Modal>
    );
};

ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    image: PropTypes.shape({
        urls: PropTypes.shape({
            regular: PropTypes.string.isRequired,
        }).isRequired,
        alt_description: PropTypes.string,
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        likes: PropTypes.number.isRequired,
        description: PropTypes.string,
    }),
};

export default ImageModal;