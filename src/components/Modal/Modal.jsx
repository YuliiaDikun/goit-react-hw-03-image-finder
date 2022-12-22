import css from './Modal.module.css';
export const Modal = ({ largeImgUrl }) => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImgUrl} alt="" />
      </div>
    </div>
  );
};
