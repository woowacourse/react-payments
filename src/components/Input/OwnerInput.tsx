import styled from "styled-components";
import { REGEX_PATTERN } from "../../constant";
import { UseInputProps } from "../../hooks/useInput";
import Input from "../common/Input";

export interface OwnerInputProps {
  owner: UseInputProps;
}

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  background-color: #ecebf1;
  height: 45px;
  border-radius: 7px;
  padding-left: 8px;
`;

export default function OwnerInput({ owner }: OwnerInputProps) {
  return (
    <Wrapper>
      <Input
        type="text"
        maxLength={30}
        pattern={REGEX_PATTERN.OWNER}
        id="owner"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        {...owner}
      />
    </Wrapper>
  );
}
