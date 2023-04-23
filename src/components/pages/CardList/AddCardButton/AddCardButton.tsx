import React from "react";
import * as Styled from "./AddCardButton.styles";

interface AddCardButtonProps {
  onClick?: () => void;
}

export default function AddCardButton({ onClick }: AddCardButtonProps) {
  return <Styled.CardRegisterButton onClick={onClick} />;
}
