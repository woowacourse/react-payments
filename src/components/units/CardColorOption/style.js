import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.button`
  width: 37px;
  height: 37px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  border-color: transparent;
  margin-bottom: 10px;
  cursor: pointer;
`;

const BankName = styled.span`
  font-size: 12px;
  text-align: center;
  color: ${PALETTE.INPUT_LABEL_BLACK};
`;

export { Root, Circle, BankName };
