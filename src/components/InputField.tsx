import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 8px;
  gap: 8px;
`;

const Title = styled.h1`
  color: #000;
  font-size: 18px;
`;

const SubTitle = styled.p`
  color: #8b95a1;
  font-size: 9.5px;
`;

const Label = styled.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
`;

interface props {
  title: string;
  subtitle?: string;
  inputDesc: string;
  inputNumber: number;
  inputPlaceHolder: string;
}

export default function InputField({
  title,
  subtitle,
  inputDesc,
  inputNumber,
  inputPlaceHolder,
  // TODO: validation 체크를 위한 타입
  //   inputType,
}: props) {
  return (
    <>
      <Container>
        <Title> {title} </Title>
        <SubTitle> {subtitle} </SubTitle>

        <Label> {inputDesc} </Label>
        <InputBox>
          {Array.from({ length: inputNumber }, () => (
            <Input
              type="text"
              pattern="\d*"
              maxLength={4}
              placeholder={inputPlaceHolder}
            />
          ))}
        </InputBox>
      </Container>
    </>
  );
}
