import styled from "@emotion/styled";

const CreditCardBack = ({ cvcNumber }: { cvcNumber: string }) => {
  return (
    <CreditCardContainer>
      <CreditCardCVCWrapper>{cvcNumber}</CreditCardCVCWrapper>
    </CreditCardContainer>
  );
};

export default CreditCardBack;

const CreditCardContainer = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: #d5d5d5;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

const CreditCardCVCWrapper = styled.div`
  position: relative;
  top: 84px;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 24px;
  display: flex;
  padding: 6px;
  box-sizing: border-box;
  background: #cbba64;
  color: white;
  font-size: 14px;
  letter-spacing: 2px;
`;
