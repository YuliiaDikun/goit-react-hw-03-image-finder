import css from './Button.module.css';
export const Button = ({ onBtnClick }) => {
  return (
    <button className={css.Button} onClick={onBtnClick}>
      Load more
    </button>
  );
};
