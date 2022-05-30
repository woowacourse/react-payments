import PropTypes from 'prop-types';
import { TextFieldProps } from '@/types/commonComponents';

function TextField({
  type,
  className,
  name,
  value,
  placeholder,
  maxLength,
  onChange,
  onBlur,
}: TextFieldProps) {
  return (
    <input
      type={type}
      className={className}
      name={name}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

TextField.defaultProps = {
  type: 'text',
  className: 'input-basic',
  placeholder: '',
  maxLength: 15,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onBlur: () => {},
};

TextField.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default TextField;
