import styles from './ArrowHeader.module.css';
import { SlArrowLeft } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const ArrowHeader = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/">
          <button className={styles.button}>
            <SlArrowLeft />
          </button>
        </Link>
      </nav>
      <h1 className={styles.title}>보유 카드</h1>
    </header>
  );
};

export default ArrowHeader;
