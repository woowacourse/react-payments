import useHeader from 'hooks/useHeader';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
  const { title, left, right } = useHeader();

  return (
    <div className={cx('container')}>
      {left}
      <h2 className={cx('title')}>{title}</h2>
      {right}
    </div>
  );
};

export default Header;
