import PropTypes from 'prop-types';

export default function InputContainer({ children }) {
  return <div>{children}</div>;
}

InputContainer.propTypes = {
  children: PropTypes.node,
};
