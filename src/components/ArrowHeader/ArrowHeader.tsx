import styles from './ArrowHeader.module.css';
import { SlArrowLeft } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const ArrowHeader = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <button className={styles.button}>
          <SlArrowLeft />
        </button>
      </Link>
      <p className={styles.title}>보유 카드</p>
    </div>
  );
};

export default ArrowHeader;
