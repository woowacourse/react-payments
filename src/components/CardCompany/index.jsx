import PropTypes from 'prop-types';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CardCompany = ({ company, onClickCompany, theme }) => {
  return (
    <div className={cx('container')} onClick={() => onClickCompany(company, theme)}>
      <div className={`${cx('dot')} bg-${theme}`}></div>
      <span className={cx('name')}>{company}</span>
    </div>
  );
};

CardCompany.propTypes = {
  /**
   * card company name
   */
  company: PropTypes.string.isRequired,
  /**
   * handle clicking card company component
   */
  onClickCompany: PropTypes.func.isRequired,
  /**
   * theme of CardCompany
   */
  theme: PropTypes.string.isRequired,
};

export default CardCompany;
