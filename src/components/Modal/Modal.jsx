import css from './Modal.module.css';
export const Modal = ({ largeImgUrl, onImageClick }) => {
    const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onImageClick('');
    }
  };
  return (
      <div className={css.Overlay} onClick={handleBackdrop}>
      <div className={css.Modal}>
        <img src={largeImgUrl} alt="" />
      </div>
    </div>
  );
};
