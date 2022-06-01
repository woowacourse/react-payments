import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Loading = () => {
  return <div className={cx('container')}>열심히 로딩중..✨</div>;
};

export default Loading;
