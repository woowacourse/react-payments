import PropTypes from 'prop-types';
import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Modal = ({ handleModal, children }) => {
  return (
    <>
      <div className={cx('dimmer')} onClick={handleModal}></div>
      <div className={cx('modal')}>{children}</div>
    </>
  );
};

Modal.propTypes = {
  /**
   * fuction to control modal
   */
  handleModal: PropTypes.func,
  /**
   * content of modal
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Modal;
