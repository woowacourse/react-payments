import { ChangeEvent } from 'react';
import { LABEL } from '../../../../constants/addCardForm';
import { CVC_DIGITS } from '../../../../constants/creditCard';
import Container from '../../../shared/Container';
import Input from '../../../shared/Input';
import AddCardInputLabel from '../AddCardInputLabel';
import { AddCardInputContainer } from '../styles';
import { isValidCVC } from '../validator';

interface Props {
  CVC: string;
  setCVC: (value: string) => void;
}

const CVCInput = ({ CVC, setCVC }: Props) => {
  const onChangeCVC = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidCVC(value)) return;

    setCVC(value);
  };

  return (
    <AddCardInputLabel label={LABEL.CVC}>
      <AddCardInputContainer width="25%">
        <Input type="password" maxLength={CVC_DIGITS} textCenter value={CVC} onChange={onChangeCVC} />
      </AddCardInputContainer>
      <Container className="question-mark">
        <img src={process.env.PUBLIC_URL + '/buttons/question-mark-btn.svg'} alt="cvc/cvv 도움말" />
      </Container>
    </AddCardInputLabel>
  );
};

export default CVCInput;
