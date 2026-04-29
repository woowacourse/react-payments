import styled from "@emotion/styled";
import Input from "./Input.tsx";

const CardValidityPeriodInputField = () => {
  return (
    <Container>
      <Title>카드 유효기간을 입력해 주세요</Title>
      <Caption>월/년도(MMYY)를 순서대로 입력해 주세요.</Caption>
      <Label>유효기간</Label>
      <InputWrapper>
        <Input placeholder="MM" fullWidth />
        <Input placeholder="YY" fullWidth />
      </InputWrapper>
    </Container>
  );
};

const Container = styled.section``;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Caption = styled.p`
  font-weight: 400;
  font-size: 0.6rem;
  color: #8b95a1;
  margin-top: 0.25rem;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 0.75rem;
  color: #0a0d13;
  margin-top: 1rem;
`;

export default CardValidityPeriodInputField;
