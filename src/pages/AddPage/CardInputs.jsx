import styled from 'styled-components';

import {
  CardNumberInput,
  CardValidDateInput,
  CardOwnerNameInput,
  CardCVCInput,
  CardPasswordInput,
} from '../../components/complex';

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 19px;
`;

export default function CardInputs() {
  return (
    <InputGroup>
      <CardNumberInput />
      <CardValidDateInput />
      <CardOwnerNameInput />
      <CardCVCInput />
      <CardPasswordInput />
    </InputGroup>
  );
}
