import { ChangeEvent, Dispatch, SetStateAction, VFC } from 'react';
import { LABEL } from '../../../../../constants/addCardForm';
import { CVC_DIGITS } from '../../../../../constants/creditCard';
import QuestionIcon from '../../../../shared/Icon/QuestionIcon';
import Input from '../../../../shared/Input';
import AddCardInputContainer from '../../AddCardInputContainer';
import AddCardInputLabel from '../../AddCardInputLabel';
import { isValidCVC } from '../../validator';
import { QuestionMarkContainer } from './styles';

interface Props {
  CVC: string;
  setCVC: Dispatch<SetStateAction<string>>;
}

const CVCInput: VFC<Props> = ({ CVC, setCVC }) => {
  const onChangeCVC = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidCVC(value)) return;

    setCVC(value);
  };

  return (
    <AddCardInputLabel label={LABEL.CVC}>
      <AddCardInputContainer width="25%">
        <Input type="password" maxLength={CVC_DIGITS} textCenter value={CVC} onChange={onChangeCVC} />
      </AddCardInputContainer>
      <QuestionMarkContainer>
        <QuestionIcon />
      </QuestionMarkContainer>
    </AddCardInputLabel>
  );
};

export default CVCInput;
