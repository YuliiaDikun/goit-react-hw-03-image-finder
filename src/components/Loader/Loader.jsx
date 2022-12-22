import SyncLoader from 'react-spinners/SyncLoader';
import css from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.Overlay}>
      <SyncLoader color="#3f51b5" size={30} aria-label="Loading Spinner" />;
    </div>
  );
};
