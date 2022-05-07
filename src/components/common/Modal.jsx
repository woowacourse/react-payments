import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from 'css/Modal.module.css';

const Modal = ({ handleModal, children }) => {
  return (
    <>
      <div className={styles.dimmer} onClick={handleModal}></div>
      <div className={styles.modal}>{children}</div>
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

export default memo(Modal);
