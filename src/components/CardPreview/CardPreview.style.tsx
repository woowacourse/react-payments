import styled from 'styled-components';

export const Card = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  padding: 8px 12px;
  background: #333333;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ChipBox = styled.div`
  width: 36px;
  height: 22px;
  border-radius: 4px;
  background: #ddcd78;
  border: 0.5px solid #ddcd781a;
`;

export const LogoBox = styled.div`
  width: 36px;
  height: 22px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 14px 5px;
`;

export const InfoBox = styled.p<{ $length?: number }>`
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: ${(props) => props.$length && `calc(100% / ${props.$length})`};
  height: 20px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  word-break: break-all;

  img {
    width: 4px;
    margin: 0px 2px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  column-gap: 5px;
`;
