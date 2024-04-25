import styled from "@emotion/styled";

const CreditCardBack = ({ cvcNumber }: { cvcNumber: string }) => {
  return (
    <CreditCardContainer>
      <CVCLine>
        <CVCNumber>{cvcNumber}</CVCNumber>
      </CVCLine>
    </CreditCardContainer>
  );
};

export default CreditCardBack;

const CreditCardContainer = styled.div`
  position: relative;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  background: rgba(213, 213, 213, 1);
`;

const CVCLine = styled.div`
  position: absolute;
  top: 84px;
  width: 212px;
  height: 24px;
  background: rgba(203, 186, 100, 1);
`;

const CVCNumber = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  left: 169px;
  width: 27px;
  height: 24px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: right;
  color: rgba(255, 255, 255, 1);
`;
