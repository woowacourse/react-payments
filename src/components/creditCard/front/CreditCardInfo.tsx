import styled from "@emotion/styled";
import { CreditCardProps, CreditCardNumber } from "../../../@types/CreditCard";
import replaceToMaskingNumber from "../../../utils/replaceToMaskingNumber";
import { useMemo } from "react";

const maskLastEightDigits = (creditCardNumber: CreditCardNumber) => {
  const digitKeys = ["firstNumber", "secondNumber", "thirdNumber", "fourthNumber"];
  const lastEightIndex = [2, 3];

  return creditCardNumber.map((number, idx) =>
    lastEightIndex.includes(idx) ? (
      <CreditCardInfoSymbol key={digitKeys[idx]}>
        {replaceToMaskingNumber(number)}
      </CreditCardInfoSymbol>
    ) : (
      <CreditCardInfoNumber key={digitKeys[idx]}>{number}</CreditCardInfoNumber>
    )
  );
};

const CreditCardInfo = ({ creditCardNumber, expirationPeriod, ownerName }: CreditCardProps) => {
  const maskedCreditCardNumber = useMemo(
    () => maskLastEightDigits(creditCardNumber),
    [creditCardNumber]
  );

  return (
    <CreditCardInfoContainer>
      <CreditCardInfoWrapper>{maskedCreditCardNumber}</CreditCardInfoWrapper>
      <CreditCardExpirationPeriod>{expirationPeriod}</CreditCardExpirationPeriod>
      <CreditCardOwnerInfo>{ownerName.toUpperCase()}</CreditCardOwnerInfo>
    </CreditCardInfoContainer>
  );
};

export default CreditCardInfo;

const CreditCardInfoContainer = styled.div`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.16em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 44px 12px;
`;

const CreditCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
`;

const CreditCardInfoNumber = styled.h3`
  width: 42px;
  height: 20px;
  overflow: hidden;
`;

const CreditCardInfoSymbol = styled.h3`
  font-size: 8px;
  width: 42px;
  height: 20px;
  overflow: hidden;
`;

const CreditCardExpirationPeriod = styled.h3`
  height: 20px;
`;

const CreditCardOwnerInfo = styled.h3`
  width: 100%;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
