import { useState, useEffect, } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn';
import ImageModal from './components/ImageModal';
import './components/css/App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchImages = async (query, page) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query,
          page,
          per_page: 18,
          client_id: 'uhV7tQ6hocDWOjIYeiFvjJmEe9kETTENUqJFQPqXNUo',
        },
      });
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (err) {
      console.error('Error fetching images:', err.message);
      setError(err.message);
      console.log('setError called with:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.trim() !== '') {
      setError(null);
      fetchImages(query, page);
    }
  }, [query, page]);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };


  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} image={selectedImage} />
      )}
    </div>
  );
};

export default App;