import styled from "@emotion/styled";

interface CreditCardFormProps {
  title: string;
  description?: string;
  inputError: boolean;
  children: React.ReactNode;
}

const CreditCardForm = ({ title, description, children, inputError }: CreditCardFormProps) => {
  return (
    <CreditCardFormContainer>
      <TitleWrapper>{title}</TitleWrapper>
      <DescriptionWrapper description={description}>{description}</DescriptionWrapper> {children}
      {inputError && <ErrorMessage>유효한 값을 입력하세요.</ErrorMessage>}
    </CreditCardFormContainer>
  );
};

export default CreditCardForm;

const CreditCardFormContainer = styled.div`
  width: 315px;
  height: 137px;
`;

const TitleWrapper = styled.h1`
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  text-align: left;
  margin-bottom: 4px;
`;

const DescriptionWrapper = styled.p<{ description?: string }>`
  font-family: Noto Sans KR;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: rgba(139, 149, 161, 1);
  height: 14px;
  ${({ description }) => (description ? `margin-bottom: 16px;` : `margin-bottom: 0;`)}
`;

const ErrorMessage = styled.p`
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: red;
  margin-top: 8px;
`;
