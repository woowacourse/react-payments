import styled from 'styled-components';

export const Card = styled.div<any>`
  position: relative;
  width: 240px;
  height: 150px;

  padding: 12px 18px;

  background-color: ${(props: any) => props.bgColor};
  color: white;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  border-radius: 5px;

  letter-spacing: 1.5px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
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

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 100%;
`;

export const CardNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;

  letter-spacing: 2px;

  & > div {
    width: 18%;
  }
`;

export const EllipseContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Ellipse = styled.div`
  width: 4px;
  height: 4px;

  border-radius: 50%;

  background-color: white;

  margin-right: 5px;
`;

export const CardBottomInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  font-size: 11px;
`;

export const CardOwnerName = styled.div``;

export const ExpirationDate = styled.div`
  display: flex;
`;

export const ExpirationMonth = styled.div``;

export const ExpirationYear = styled.div`
  span {
    display: block;
    background-color: blue;
    width: 14px;
  }
`;
