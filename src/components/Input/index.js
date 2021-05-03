import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Container } from '..';
import styles from './style.css';

const cx = classnames.bind(styles);

export const Input = forwardRef(({ container, className, ...rest }, ref) => {
  if (container) {
    return (
      <Container className={container}>
        <input className={cx('Input', className)} {...rest} ref={ref} />
      </Container>
    );
  }
  return <input className={cx('Input', className)} {...rest} ref={ref} />;
});

Input.propTypes = {
  container: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    'submit',
    'button',
    'reset',
    'text',
    'number',
    'password',
    'checkbox',
    'radio',
    'color',
    'search',
    'month',
    'week',
    'date',
    'time',
    'datetime-local',
    'range',
    'url',
    'tel',
    'email',
    'file',
    'image',
    'hidden',
  ]).isRequired,
};

Input.defaultProps = {
  type: 'text',
};

Input.displayName = 'Input';
