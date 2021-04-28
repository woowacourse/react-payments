import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';

const Root = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  font-size: ${({ size }) => (size === 'large' ? '20px' : '16px')};
`;

const CardName = styled.div`
  position: absolute;
  top: 10%;
  left: 6%;
  font-size: 0.625em;
  color: ${PALETTE.DEFAULT_BLACK};
`;

const Chip = styled.div`
  position: absolute;
  top: 35%;
  left: 6%;
  width: 18%;
  height: 19%;
  background-color: ${PALETTE.CARD_CHIP};
  border-radius: 4px;
`;

const CardNumbersWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  text-align: center;
  left: 50%;
  bottom: 24%;
  transform: translateX(-50%);
`;

const CardNumbersFragment = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16%;
  font-size: 0.875em;
  font-weight: 600;
  color: ${PALETTE.DEFAULT_BLACK};
  letter-spacing: 2px;
  opacity: 80%;

  &:not(:last-child) {
    margin-right: 9px;
  }

  & img {
    &:not(:last-child) {
      margin-right: 4px;
    }
  }
`;

const OwnerName = styled.div`
  position: absolute;
  bottom: 10%;
  left: 8%;
  font-size: 0.75em;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${PALETTE.DEFAULT_BLACK};
  opacity: 80%;
`;

const ExpirationDate = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
  font-size: 0.75em;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${PALETTE.DEFAULT_BLACK};
  opacity: 80%;
`;

export { Root, Chip, CardName, CardNumbersWrapper, CardNumbersFragment, OwnerName, ExpirationDate };
