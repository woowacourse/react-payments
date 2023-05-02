import * as styled from './CardRegisterForm.styled';

import { useCardInfoActions, useCardInfoValue } from '../../../context/CardInfoContext';
import useForm from '../../../hooks/useForm';

import { Input } from '../../';
import { CardNumbers, ExpirationDate, OwnerName, Password, SecurityNumbers } from '../../InputBox';

import validator from '../../../domain/validator';
import { useEffect, useRef } from 'react';

interface Props {
  showModal: boolean;
  turnToNicknameForm: () => void;
}

const CardRegisterForm = ({ showModal, turnToNicknameForm }: Props) => {
  const [cardInfo, { setCardInfo }] = [useCardInfoValue(), useCardInfoActions()];

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showModal) return;

    firstInputRef.current?.focus();
  }, [showModal]);

  const { onSubmit, onChange, error } = useForm({
    submitAction: () => turnToNicknameForm(),
    changeAction: (name: string, value: string) => {
      setCardInfo((prev) => ({ ...prev, [name]: value }));
    },
    errorOptions: {
      initState: {
        firstCardNumbers: '',
        secondCardNumbers: '',
        thirdCardNumbers: '',
        fourthCardNumbers: '',
        expirationMonth: '',
        expirationYear: '',
        ownerName: '',
        securityNumbers: '',
        firstPassword: '',
        secondPassword: '',
      },
      validator,
    },
  });

  return (
    <styled.CardRegisterForm onSubmit={onSubmit}>
      <CardNumbers error={error}>
        <Input
          ref={firstInputRef}
          name="firstCardNumbers"
          value={cardInfo.firstCardNumbers}
          onChange={onChange}
          maxLength={4}
          center={true}
          type="text"
          numeric={true}
        />
        <Input
          name="secondCardNumbers"
          value={cardInfo.secondCardNumbers}
          onChange={onChange}
          maxLength={4}
          center={true}
          type="text"
          numeric={true}
        />
        <Input
          name="thirdCardNumbers"
          value={cardInfo.thirdCardNumbers}
          onChange={onChange}
          maxLength={4}
          center={true}
          type="password"
          numeric={true}
        />
        <Input
          name="fourthCardNumbers"
          value={cardInfo.fourthCardNumbers}
          onChange={onChange}
          maxLength={4}
          center={true}
          type="password"
          numeric={true}
        />
      </CardNumbers>
      <ExpirationDate error={error}>
        <Input
          name="expirationMonth"
          value={cardInfo.expirationMonth}
          onChange={onChange}
          maxLength={2}
          center={true}
          placeholder="MM"
          type="text"
          numeric={true}
        />
        <Input
          name="expirationYear"
          value={cardInfo.expirationYear}
          onChange={onChange}
          maxLength={2}
          center={true}
          placeholder="YY"
          type="text"
          numeric={true}
        />
      </ExpirationDate>
      <OwnerName ownerName={cardInfo.ownerName} maxLength={30} error={error}>
        <Input
          name="ownerName"
          value={cardInfo.ownerName}
          onChange={onChange}
          maxLength={30}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text"
        />
      </OwnerName>
      <SecurityNumbers error={error}>
        <Input
          name="securityNumbers"
          value={cardInfo.securityNumbers}
          onChange={onChange}
          maxLength={3}
          center={true}
          type="password"
          numeric={true}
        />
      </SecurityNumbers>
      <Password error={error}>
        <Input
          name="firstPassword"
          value={cardInfo.firstPassword}
          onChange={onChange}
          maxLength={1}
          center={true}
          type="password"
          numeric={true}
        />
        <Input
          name="secondPassword"
          value={cardInfo.secondPassword}
          onChange={onChange}
          maxLength={1}
          center={true}
          type="password"
          numeric={true}
        />
      </Password>
      <styled.CardRegisterButton>다음</styled.CardRegisterButton>
    </styled.CardRegisterForm>
  );
};

export default CardRegisterForm;
