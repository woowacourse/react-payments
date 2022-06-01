import { useContext } from "react";
import styled from "styled-components";
import { CardInfoContext } from "../../contexts/CardInfoContext";
import useFormHandler from "../../hooks/useFormHandler";

const StyledCardInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function CardInfoForm({ children }: { children: any }) {
  const { state, dispatch } = useContext(CardInfoContext);
  const { handleSubmit, handleFocusKeyDown } = useFormHandler(state, dispatch);

  return (
    <StyledCardInfoForm
      autoComplete="off"
      onKeyDown={handleFocusKeyDown}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {children}
    </StyledCardInfoForm>
  );
}
