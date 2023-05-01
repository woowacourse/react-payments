import { useContext } from 'react';
import InputGroup from '../../common/InputGroup';
import { CardInformationContext } from '../../../context/CardInformationContext';
import useAddCardForm from '../../../hooks/useAddCardForm';
import { SetState } from '../../../@types';

type CardPasswordInputProps = {
  setState: SetState;
  insertRef: (element: HTMLElement | null) => void;
  moveFocus: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const CardPasswordInput = ({ setState, insertRef, moveFocus }: CardPasswordInputProps) => {
  const { cardInformation } = useContext(CardInformationContext);
  const { cardPWD } = cardInformation;
  const { onChangeState } = useAddCardForm();

  return (
    <InputGroup
      labelText="카드 비밀번호"
      autoMoveFocus={true}
      insertRef={insertRef}
      moveFocus={moveFocus}
      inputInfoList={[
        {
          type: 'password',
          minLength: 1,
          maxLength: 1,
          width: '40px',
          center: true,
          value: cardPWD.first,
          onChange: onChangeState('password')(setState, 'first'),
        },
        {
          type: 'password',
          minLength: 1,
          maxLength: 1,
          width: '40px',
          center: true,
          value: cardPWD.second,
          onChange: onChangeState('password')(setState, 'second'),
        },
      ]}
    />
  );
};

export default CardPasswordInput;
