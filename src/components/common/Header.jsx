import styles from 'css/module/Header.module.css';
import useHeader from 'hooks/useHeader';

const Header = () => {
  const { title, left, right } = useHeader();

  return (
    <div className={styles.container}>
      {left}
      <h2 className={styles.title}>{title}</h2>
      {right}
    </div>
  );
};

export default Header;
