import styled from "styled-components";
import { CardInfo } from "../PaymentApp";

const ExpirationDate = ({ expirationDate }: { expirationDate: CardInfo[] }) => {
  const latestNumbers = {};

  expirationDate.forEach((expirationInfo) => {
    const index = Number(expirationInfo.index);
    // NOTE: 각 인덱스의 최신 상태를 가져옴
    latestNumbers[index] = expirationInfo.currentValue;
  });

  const latestNumbersKeys = Object.keys(latestNumbers);

  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      {Object.keys(latestNumbers).length !== 0 && (
        <>
          <ExpirationDateStyled key={latestNumbersKeys[0]}>
            {latestNumbers[latestNumbersKeys[0]]}
            {latestNumbers[latestNumbersKeys[1]] && (
              <ExpirationDateStyled>/</ExpirationDateStyled>
            )}
          </ExpirationDateStyled>
          {latestNumbers[latestNumbersKeys[1]] && (
            <ExpirationDateStyled key={latestNumbersKeys[1]}>
              {latestNumbers[latestNumbersKeys[1]]}
            </ExpirationDateStyled>
          )}
        </>
      )}
    </div>
  );
};

const ExpirationDateStyled = styled.span`
  color: white;
`;

export default ExpirationDate;
