import { Input } from "./common/Input";
import { InputLabel } from "./common/InputLabel";
import styled from "styled-components";

interface ExpiryDateInputProps {
  setExpiryDate: (value: string) => void;
}

const ExpiryDateInfo = {
  label: "expiryDate",
  width: "137px",
  placeholder: "MM / YY",
  textPosition: "center",
};

export const ExpiryDateInput = ({ setExpiryDate }: ExpiryDateInputProps) => {
  const handleInput = (e: any) => {
    const value = e.target.value.replaceAll(" / ", "");

    if (value.length > 4) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    e.target.value = (value.match(/\d{1,2}/g) ?? []).join(" / ");
    setExpiryDate(e.target.value);
  };

  return (
    <Container>
      <InputLabel text="만료일" name="expiryDate" />
      <Input {...ExpiryDateInfo} handleInput={handleInput} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 70px;
`;
