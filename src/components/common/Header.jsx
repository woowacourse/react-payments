import useHeader from 'hooks/useHeader';
import styles from 'css/module/Header.module.css';

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
