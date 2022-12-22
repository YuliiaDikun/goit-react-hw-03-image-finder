import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {photos.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onImageClick={onImageClick}
          />
        );
      })}
    </ul>
  );
};
