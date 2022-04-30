import React from "react";
import styled from "@emotion/styled";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = styled.input(() => ({
  backgroundColor: "#ECEBF1",
  height: "47px",
  width: "100%",
  borderRadius: "7px",
  maxWidth: "318px",
  outline: "none !important",
  border: "inherit",
  fontSize: "21px",
  textAlign: "center",
  "&:focus": {
    boxShadow: "none",
  },
}));

function CardNumberInput({ onChange, value }: Props) {
  return <Input onChange={onChange} value={value} />;
}

export default CardNumberInput;
