import styled from 'styled-components';

export const Card = styled.div`
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

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  padding-top: 34px;
`;

export const CardMagnet = styled.div`
  width: 40px;
  height: 26px;
  left: 14px;
  top: 47px;

  background: #cbba64;
  border-radius: 4px;
`;

export const CardNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2.6px;
`;

export const CardNumber = styled.input`
  width: 25%;
  object-fit: contain;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  padding: 0;

  &[type='password'] {
    font-size: 32px;
  }
`;

export const CardHolderName = styled.span`
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #ffffff;
`;

export const ExpirationDateContainer = styled.div`
  position: absolute;
  right: 0px;

  display: flex;

  width: 20%;
  bottom: 0;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2.6px;
`;

export const ExpirationDateDivider = styled.span``;

export const ExpirationDateText = styled.span`
  width: 45%;
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
