import { memo } from 'react';
import PropTypes from 'prop-types';
import { CRYPTO_STRING, DEFAULT_CARD_INFO } from 'constants';
import styles from './index.module.css';
import 'css/palette.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CardPreview = ({ theme, company, number, expiryDate, ownerName, handleClick }) => {
  const { first, second, third, fourth } = number;
  const upperCaseOwnerName = ownerName.toUpperCase() || DEFAULT_CARD_INFO.OWNER_NAME;
  const month = expiryDate.month || DEFAULT_CARD_INFO.EXPIRY_MONTH;
  const year = expiryDate.year || DEFAULT_CARD_INFO.EXPIRY_YEAR;

  return (
    <div className={cx('container')}>
      <div
        className={`${cx('card')} bg-${theme} ${handleClick && 'cursor-pointer'}`}
        onClick={handleClick}
      >
        <div className={cx('top')}>
          <span className={cx('text')}>{company}</span>
        </div>
        <div className={cx('middle')}>
          <div className={cx('chip')} />
        </div>
        <div className={cx('bottom')}>
          <div className={cx('number-container')}>
            <span className={cx('text', 'number')}>{first}</span>
            <span className={cx('text', 'number')}>{second}</span>
            <span className={cx('text', 'number', 'privacy')}>
              {CRYPTO_STRING.repeat(third.length)}
            </span>
            <span className={cx('text', 'number', 'privacy')}>
              {CRYPTO_STRING.repeat(fourth.length)}
            </span>
          </div>
          <div className={cx('info-container')}>
            <span className={cx('text', 'owner')}>{upperCaseOwnerName}</span>
            <span className={cx('text')}>
              {month} / {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardPreview.propTypes = {
  /**
   * theme of CardPreview
   */
  theme: PropTypes.string,
  /**
   * name of the selected card company
   */
  company: PropTypes.string,
  /**
   * card number entered by the user
   */
  number: PropTypes.shape({
    first: PropTypes.string,
    second: PropTypes.string,
    third: PropTypes.string,
    fourth: PropTypes.string,
  }),
  /**
   * card expiry date entered by the user
   */
  expiryDate: PropTypes.shape({
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  /**
   * card owner name entered by the user
   */
  ownerName: PropTypes.string,
  /**
   * handle event when user click CardPriview
   */
  handleClick: PropTypes.func,
};

CardPreview.defaultProps = {
  handleClick: undefined,
};

export default memo(CardPreview);
