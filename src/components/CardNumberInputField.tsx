import styled from "@emotion/styled";
import Input from "./Input.tsx";

const CardNumberInputField = () => {
  return (
    <Container>
      <Title>결제할 카드 번호를 입력해 주세요</Title>
      <Caption>본인 명의의 카드만 결제 가능합니다.</Caption>
      <Label>카드 번호</Label>
      <InputWrapper>
        <Input fullWidth />
        <Input fullWidth />
        <Input fullWidth />
        <Input fullWidth />
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

export default CardNumberInputField;
