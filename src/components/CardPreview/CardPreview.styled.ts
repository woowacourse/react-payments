import styled from 'styled-components';

export const CardPreview = styled.div`
  display: flex;
  justify-content: center;

  margin: 30px 0;
`;

export const Card = styled.div<any>`
  position: relative;
  width: 240px;
  height: 150px;

  padding: 12px 18px;

  background-color: ${(props: any) => props.bgColor ?? '#E5E5E5'};
  box-shadow: ${(props: any) => props.shadow ?? '3px 3px 5px rgba(0, 0, 0, 0.25)'};
  border-radius: 5px;

  color: ${(props: any) => props.color ?? 'white'};
  letter-spacing: 0.1em;
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

export const CardNumber = styled.div`
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;

  letter-spacing: 0.2em;
  height: 20px;

  input {
    width: 25%;
    font-size: 14px;
    letter-spacing: 4px;
    color: white;
    background-color: inherit;
    border: none;
  }
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

  background: ${(props) => (props.color ? props.color : '#ffffff')};
`;

export const CardNameAndExpirationDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  font-size: 11px;
`;

export const CardName = styled.p``;

export const ExpirationDate = styled.p``;
