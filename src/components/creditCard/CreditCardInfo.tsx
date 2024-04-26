import styled from "@emotion/styled";
import { CreditCardNumber, CreditCardProps } from "../../@types/CreditCard";
import replaceToMaskingNumber from "../../utils/replaceToDot";

const maskLastEightDigits = (creditCardNumber: CreditCardNumber) => {
  const lastEightIndex = [2, 3];

  return creditCardNumber.map((number, idx) =>
    lastEightIndex.includes(idx) ? (
      <CreditCardInfoSymbol key={idx}>{replaceToMaskingNumber(number)}</CreditCardInfoSymbol>
    ) : (
      <CreditCardInfoNumber key={idx}>{number}</CreditCardInfoNumber>
    )
  );
};

const CreditCardInfo = ({ creditCardNumber, expirationPeriod, ownerName }: CreditCardProps) => {
  return (
    <CreditCardInfoContainer>
      <CreditCardInfoWrapper>{maskLastEightDigits(creditCardNumber)}</CreditCardInfoWrapper>
      <CreditCardExpirationPeriod>{expirationPeriod}</CreditCardExpirationPeriod>
      <CreditCardOwnerInfo>{ownerName}</CreditCardOwnerInfo>
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
  position: relative;
  top: 44px;
  padding: 0 12px;
`;

const CreditCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
`;

const CreditCardInfoNumber = styled.span`
  width: 42px;
  height: 20px;
  overflow: hidden;
`;

const CreditCardInfoSymbol = styled.span`
  font-size: 8px;
  width: 42px;
  height: 20px;
  overflow: hidden;
`;

const CreditCardExpirationPeriod = styled.span`
  height: 20px;
`;

const CreditCardOwnerInfo = styled.span`
  width: 100%;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
