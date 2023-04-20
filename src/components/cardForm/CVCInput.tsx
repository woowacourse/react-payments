import { Container } from "../common/Container";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import styled from "styled-components";

const CVCInfo = {
  label: "cvc",
  width: "84px",
  placeholder: "",
  textPosition: "center",
  type: "password",
};

export const CVCInput = () => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3 || !/\d$/.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }
  };

  return (
    <Container>
      <InputLabel text="보안 코드 (CVC/CVV)" name="CVC" />
      <Wrapper>
        <Input
          {...CVCInfo}
          handleInput={handleInput}
          handleChange={(e) => {}}
          error={{ isValid: true, errorMessage: "" }}
        />
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

  font-size: 15px;
  font-weight: 700;
  color: darkgray;
`;
