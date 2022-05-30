import {
  CardCVCInput,
  CardNumberInput,
  CardOwnerNameInput,
  CardPasswordInput,
  CardValidDateInput,
} from 'components/complex';

import { InputGroup } from './styled';

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
