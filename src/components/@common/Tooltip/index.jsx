import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as TooltipIcon } from 'assets/tooltip_icon.svg';
import { TOOLTIP_TYPES } from 'constants';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Tooltip = ({ type }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <div className={cx('container')}>
      <TooltipIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      {isHover && (
        <div
          className={cx('content')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {TOOLTIP_TYPES[type]}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  /**
   * content type of tooltip
   */
  type: PropTypes.string.isRequired,
};

export default memo(Tooltip);
