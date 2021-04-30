import { ChangeEvent } from 'react';
import { LABEL, PLACEHOLDER } from '../../../../constants/addCardForm';
import { MAX_OWNER_NAME_LENGTH } from '../../../../constants/creditCard';
import Input from '../../../shared/Input';
import AddCardInputLabel from '../AddCardInputLabel';
import { AddCardInputContainer } from '../styles';
import { isValidOwnerName } from '../validator';

interface Props {
  ownerName: string;
  setOwnerName: (value: string) => void;
}

const OwnerNameInput = ({ ownerName, setOwnerName }: Props) => {
  const onChangeOwnerName = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidOwnerName(value)) return;

    setOwnerName(value.toUpperCase());
  };

  return (
    <AddCardInputLabel label={[LABEL.OWNER_NAME, `${ownerName.length} / ${MAX_OWNER_NAME_LENGTH}`]}>
      <AddCardInputContainer>
        <Input
          placeholder={PLACEHOLDER.OWNER_NAME}
          type="text"
          width="90%"
          maxLength={MAX_OWNER_NAME_LENGTH}
          value={ownerName}
          onChange={onChangeOwnerName}
        />
      </AddCardInputContainer>
    </AddCardInputLabel>
  );
};

export default OwnerNameInput;
