import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { Container } from '..';
import styles from './style.css';

const cx = classnames.bind(styles);

export const Input = forwardRef(({ container, className, ...props }, ref) => {
  const inputClass = cx('Input', className);

  if (container) {
    return (
      <Container className={container}>
        <input className={inputClass} {...props} ref={ref} />
      </Container>
    );
  }
  return <input className={inputClass} {...props} ref={ref} />;
});

Input.displayName = 'Input';

Input.propTypes = {
  container: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([
    'submit',
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
  ]),
};

Input.defaultProps = {
  container: null,
  className: null,
  id: null,
  placeholder: '',
  disabled: false,
  type: 'text',
};
