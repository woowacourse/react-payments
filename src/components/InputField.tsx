import styled from "styled-components";
import { inputType } from "../types/input";
import Validation from "../domain/InputValidation";

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
  inputTypes: inputType;
}

export default function InputField({ title, subtitle, inputTypes }: props) {
  return (
    <>
      <Container>
        <Title> {title} </Title>
        <SubTitle> {subtitle} </SubTitle>

        <Label> {inputTypes.inputLabel} </Label>
        <InputBox>
          {inputTypes.inputInfo.map((info, index) => (
            <Input
              key={index}
              type="text"
              maxLength={info.maxLength}
              placeholder={info.placeHolder}
              onChange={(e) => {
                const isValid = Validation[info.validateType]?.(
                  e.target.value as string
                );
                console.log("isValid", isValid);
                // 여기서 유효성 검사 결과에 따라 필요한 조치를 취할 수 있습니다.
              }}
            />
          ))}
        </InputBox>
      </Container>
    </>
  );
}
