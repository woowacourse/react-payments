import styled from "styled-components";
import { UseInputProps } from "../../hooks/useInput";
import Input from "../common/Input";

interface CvcInputProps {
  cvc: UseInputProps;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ecebf1;
  height: 45px;
  border-radius: 7px;
  padding: 0 16px;
`;

export default function CvcInput({ cvc }: CvcInputProps) {
  return (
    <Wrapper>
      <Input
        type="password"
        textAlign="center"
        isNumber={true}
        maxLength={3}
        required
        id="cvc"
        {...cvc}
      />
    </Wrapper>
  );
}
