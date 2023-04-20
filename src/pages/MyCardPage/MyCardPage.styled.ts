import styled from 'styled-components';

export const MyCardPage = styled.div`
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

  margin-bottom: 50px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;

  & > button:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Card = styled.button<any>`
  position: relative;
  width: 240px;
  height: 150px;

  padding: 12px 18px;

  background-color: ${(props: any) => props.bgColor ?? '#E5E5E5'};
  box-shadow: ${(props: any) => props.shadow ?? '3px 3px 5px rgba(0, 0, 0, 0.25)'};
  border-radius: 5px;

  color: ${(props: any) => props.color ?? 'white'};
  letter-spacing: 0.1em;

  cursor: pointer;
`;

export const ButtonIcon = styled.div`
  font-size: 30px;

  opacity: 0.6;
`;

export const Rectangle = styled.div`
  position: absolute;
  width: 40px;
  height: 26px;

  top: 58px;
  left: 18px;

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

  font-size: 15px;
  margin-bottom: 8px;

  letter-spacing: 0.2em;
`;

export const EllipseContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & > div {
    margin-right: 5px;
  }
`;

export const Ellipse = styled.div`
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #ffffff;
`;

export const CardNameAndExpirationDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  font-size: 11px;
`;

export const CardName = styled.p``;

export const ExpirationDate = styled.p``;
