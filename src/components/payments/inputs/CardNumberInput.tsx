import { useContext } from 'react';
import InputGroup from '../../common/InputGroup';
import { CardInformationContext } from '../../../context/CardInformationContext';
import useAddCardForm from '../../../hooks/useAddCardForm';
import { SetState } from '../../../@types';

type CardNumberInputProps = {
  setState: SetState;
  insertRef: (element: HTMLElement | null) => void;
  moveFocus: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const CardNumberInput = ({ setState, insertRef, moveFocus }: CardNumberInputProps) => {
  const { cardInformation } = useContext(CardInformationContext);
  const { cardNumbers } = cardInformation;
  const { onChangeState } = useAddCardForm();

  return (
    <InputGroup
      labelText="카드 번호"
      autoMoveFocus={true}
      insertRef={insertRef}
      moveFocus={moveFocus}
      inputInfoList={[
        {
          type: 'number',
          minLength: 4,
          maxLength: 4,
          width: '75px',
          center: true,
          value: cardNumbers.first,
          onChange: onChangeState('number')(setState, 'first'),
        },
        {
          type: 'number',
          minLength: 4,
          maxLength: 4,
          width: '75px',
          center: true,
          value: cardNumbers.second,
          onChange: onChangeState('number')(setState, 'second'),
        },
        {
          type: 'password',
          minLength: 4,
          maxLength: 4,
          width: '75px',
          center: true,
          value: cardNumbers.third,
          onChange: onChangeState('password')(setState, 'third'),
        },
        {
          type: 'password',
          minLength: 4,
          maxLength: 4,
          width: '75px',
          center: true,
          value: cardNumbers.fourth,
          onChange: onChangeState('password')(setState, 'fourth'),
        },
      ]}
    />
  );
};

export default CardNumberInput;
