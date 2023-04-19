import { Container } from "./CardNumberInput";
import { Input } from "./common/Input";
import { InputLabel } from "./common/InputLabel";
import styled from "styled-components";

interface CVCInputProps {
  setCVC: (value: number) => void;
}

const CVCInfo = {
  label: "cvc",
  width: "84px",
  placeholder: "",
  textPosition: "center",
  type: "password",
};

export const CVCInput = ({ setCVC }: CVCInputProps) => {
  const handleInput = (e: any) => {
    if (e.target.value.length > 3 || !/\d$/.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    setCVC(Number(e.target.value));
  };

  return (
    <Container>
      <InputLabel text="보안 코드 (CVC/CVV)" name="CVC" />
      <Input {...CVCInfo} handleInput={handleInput} />
    </Container>
  );
};
