import styled from 'styled-components';

const Button = styled.button`
  display: ${props => (props.hidden ? 'none' : 'block')};
  width: 51px;
  height: 34px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: ${({ theme }) => theme.PALETTE.MINT_002};
  background-color: ${({ theme }) => theme.PALETTE.WHITE_001};
  cursor: pointer;
`;

export default Button;
