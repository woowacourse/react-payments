import styled from 'styled-components';

export const CardRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const CardRegisterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardRegisterButton = styled.button`
  width: 250px;
  height: 150px;

  margin: 10px 0;

  background: #e5e5e5;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 5px;

  font-size: 30px;

  cursor: pointer;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;
`;

export const Card = styled.button`
  /* 카드 이미지 */

  position: relative;
  width: 250px;
  height: 150px;

  margin: 10px 0;
  padding: 0 10px;

  background: #333333;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  cursor: pointer;
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 40px;
  height: 26px;

  top: 50%;
  transform: translateY(-50%);
  left: 5%;

  background: #cbba64;
  border-radius: 4px;
`;

export const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 100%;
`;

export const CardNumber = styled.p`
  display: flex;
  justify-content: space-between;

  color: white;
`;

export const CardNameAndExpirationDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  padding: 0;
`;

export const CardName = styled.p`
  width: 123px;
  height: 17px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;

  color: #ffffff;
`;

export const ExpirationDate = styled.p`
  width: 48px;
  height: 17px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.1em;

  color: #ffffff;
`;
