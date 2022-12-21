import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="your query"
        data-large={largeImageURL}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};
