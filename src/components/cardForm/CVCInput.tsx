import { Container } from "../common/Container";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import styled from "styled-components";

import { useCallback } from "react";

import { CVC_MAXLEGNTH, NUMBER_REGEX } from "../../constants";

interface CVCProps {
  setIsCompleted: (isCompleted: boolean) => void;
}

const CVCInfo = {
  label: "CVC",
  placeholder: "",
  type: "password",
  $width: "84px",
  $textPosition: "center",
};

export const CVCInput = ({ setIsCompleted }: CVCProps) => {
  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > CVC_MAXLEGNTH || !NUMBER_REGEX.test(e.target.value)) {
        e.target.value = e.target.value.slice(0, -1);
        return;
      }

      setIsCompleted(false);
      if (e.target.value.length === CVC_MAXLEGNTH) {
        setIsCompleted(true);
      }
    },
    [setIsCompleted]
  );

  return (
    <Container>
      <InputLabel text="보안 코드 (CVC/CVV)" name="CVC" />
      <Wrapper>
        <Input {...CVCInfo} handleInput={handleInput} />
        <HelpIcon
          onClick={() => {
            console.log("CVC설명");
          }}
        >
          ?
        </HelpIcon>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 125px;

  gap: 10px;
`;

const HelpIcon = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  width: 27px;
  height: 27px;
  border: 1px solid darkgray;
  border-radius: 50%;

  margin-top: -15px;

  font-size: 15px;
  font-weight: 700;
  color: darkgray;
`;
