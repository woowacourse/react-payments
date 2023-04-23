import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 270px;
  aspect-ratio: 213 / 133;
  flex-shrink: 0;
  padding: 14.23px 18.45px;

  margin-top: 46px;
  background: #333333;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #ffffff;

  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px) rotateX(5deg) rotateY(-5deg);
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.4);
  }
`;

export const CardMagnet = styled.div`
  width: 40px;
  height: 26px;
  left: 14px;
  top: 47px;
  margin-top: 33.77px;

  background: #cbba64;
  border-radius: 4px;
`;

export const CardNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 9.99px;
  margin-top: 15px;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2.6px;
`;

interface CardNumberProps  {
  index: number;
}

export const CardNumber = styled.span<CardNumberProps>`
  font-size: 13px;
  position: absolute;
  left: ${({ index }) => (index ? index * 4.3 + 'em' : 0)};
`;

export const CardHolderName = styled.span`
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: #ffffff;
`;

export const ExpirationDateContainer = styled.div`
  position: absolute;
  width: 34%;
  height: 20px;
  line-height: 1.3;
  bottom: 10px;
  right: 0px;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2.6px;
`;

export const ExpirationDateDivider = styled.span`
  position: absolute;
  display: inline-block;
  right: 66px;
  bottom: 12px;
  padding: 0 5px;
  font-size: 1.2em;
  color: #ffffff;

  &::after {
    content: '/';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface ExpirationDateTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  index: number;
}

export const ExpirationDateText = styled.span<ExpirationDateTextProps>`
  position: absolute;
  left: ${({ index }) => (index ? index * 2.3 + 'em' : 0)};
`;

export const CardRegisterButton = styled(Card)`
  position: relative;
  background: #e5e5e5;
  cursor: pointer;

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 3px;
    background-color: #333333;
  }

  ::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &:hover {
    opacity: 0.8;
  }
`;
