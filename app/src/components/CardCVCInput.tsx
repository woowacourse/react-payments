import styled from "@emotion/styled";

export function CardCVCInputWrapper() {
  return (
    <CardCVCContainer>
      <CardCVCLabel htmlFor="card-cvc-input">CVC</CardCVCLabel>
      <CardCVCInput
        type="number"
        maxLength={3}
        placeholder="123"
        id="card-cvc-input"
      />
    </CardCVCContainer>
  );
}

const CardCVCContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const CardCVCLabel = styled.label`
  font-size: 12px;
`;

const CardCVCInput = styled.input`
  border: solid 1px #acacac;
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 11px;
  height: 32px;
  -moz-appearance: textfield;
  &::placeholder {
    color: #acacac;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
