import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  onImageClick,
}) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="your query"
        className={css.ImageGalleryItemImage}
        onClick={() => onImageClick(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onImageClick: PropTypes.func,
};