import styled from 'styled-components';

import {
  CardNumberInput,
  CardValidDateInput,
  CardOwnerNameInput,
  CardCVCInput,
  CardPasswordInput,
} from './complex';

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 19px;
`;

export default function CardInputs({
  cardNumber,
  setCardNumber,
  validDate,
  setValidDate,
  cardOwnerName,
  setCardOwnerName,
  CVC,
  setCVC,
  isModalOpen,
  toggleModal,
  firstPassword,
  setFirstPassword,
  secondPassword,
  setSecondPassword,
}) {
  return (
    <InputGroup>
      <CardNumberInput number={cardNumber} setNumber={setCardNumber} />
      <CardValidDateInput validDate={validDate} setValidDate={setValidDate} />
      <CardOwnerNameInput
        ownerName={cardOwnerName}
        setOwnerName={setCardOwnerName}
      />
      <CardCVCInput
        CVC={CVC}
        setCVC={setCVC}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
      <CardPasswordInput
        firstPassword={firstPassword}
        setFirstPassword={setFirstPassword}
        secondPassword={secondPassword}
        setSecondPassword={setSecondPassword}
      />
    </InputGroup>
  );
}
