import styled from 'styled-components';

const Button = styled.button`
  display: ${props => (props.hidden ? 'none' : 'block')};
  width: 51px;
  height: 34px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #04c09e;
  background-color: white;
  cursor: pointer;

  ${props => props.style}
`;

export default Button;
