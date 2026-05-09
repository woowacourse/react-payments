import styled from "@emotion/styled";
import Input from "./Input";

export default function Cvc() {
  return (
    <Wrapper>
      <Header>CVC 번호를 입력해 주세요</Header>
      <Label>CVC 번호를 입력해 주세요</Label>
      <Input />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0%;
  line-height: 100%;
  vertical-align: middle;
  color: rgba(0, 0, 0, 1);
  margin: 0;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  vertical-align: middle;
  color: rgba(10, 13, 19, 1);
  margin: 6px 0;
`;
