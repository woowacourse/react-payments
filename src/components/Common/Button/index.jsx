import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 10.43px;
  height: 10.43px;
  padding: 5px;
  background-color: white;
  font-size: 20px;
  border: 1.5px solid #525252;
  border-style: hidden hidden solid solid;
  box-sizing: border-box;
  transform: rotate(45deg);
  margin: 0 20px 5px 0;
`;

Button.propTypes = {
  value: PropTypes.string,
};
export default Button;
