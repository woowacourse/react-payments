import styled from '@emotion/styled';

type ErrorFlag = {
  $fieldErrors?: boolean;
};

export const CardInput = styled.input<ErrorFlag>`
  border: solid 1px ${(props) => (props.$fieldErrors ? '#FF3D3D' : '#acacac')};
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 11px;
  height: 44px;
  width: 100%;
  box-sizing: border-box;
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

export const CardSingleFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const CardLabel = styled.label`
  font-size: 12px;
  color: #0a0d13;
`;

export const CardFieldset = styled.fieldset`
  border: none;
  display: flex;
  gap: 0.625rem;
  padding: 0;
  margin: 0;
`;

export const CardLegend = styled.legend`
  font-size: 12px;
  margin: 8px 0;
  color: #0a0d13;
`;
