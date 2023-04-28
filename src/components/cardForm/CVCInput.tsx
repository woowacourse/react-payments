import { Container } from "../common/Container";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import styled from "styled-components";
import { useCallback, useContext } from "react";
import { SubmitManageContext } from "../../contexts/SubmitManageContext";

import { CVC_MAXLEGNTH, NUMBER_REGEX } from "../../constants";

const CVCInfo = {
  label: "CVC",
  placeholder: "",
  type: "password",
  $width: "84px",
  $textPosition: "center",
};

const cannotInput = (text: string): boolean => {
  return text.length > CVC_MAXLEGNTH || !new RegExp(NUMBER_REGEX).test(text);
};

export const CVCInput = () => {
  const { setIsCVCCompleted } = useContext(SubmitManageContext);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (cannotInput(e.target.value)) {
        e.target.value = e.target.value.slice(0, -1);
        return;
      }

      setIsCVCCompleted(e.target.value.length === CVC_MAXLEGNTH);
    },
    [setIsCVCCompleted]
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
