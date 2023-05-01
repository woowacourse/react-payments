import { useContext } from 'react';
import InputGroup from '../../common/InputGroup';
import { CardInformationContext } from '../../../context/CardInformationContext';
import useAddCardForm from '../../../hooks/useAddCardForm';
import { SetState } from '../../../@types';

type CardExpirationDateInputProps = {
  setState: SetState;
  insertRef: (element: HTMLElement | null) => void;
  moveFocus: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const CardExpirationDateInput = ({
  setState,
  insertRef,
  moveFocus,
}: CardExpirationDateInputProps) => {
  const { cardInformation } = useContext(CardInformationContext);
  const { cardExpirationDate } = cardInformation;
  const { onChangeCardDateState } = useAddCardForm();

  return (
    <InputGroup
      labelText="만료일"
      autoMoveFocus={true}
      insertRef={insertRef}
      moveFocus={moveFocus}
      inputInfoList={[
        {
          type: 'number',
          placeholder: 'MM',
          minLength: 2,
          maxLength: 2,
          width: '60px',
          center: true,
          value: cardExpirationDate.month,
          onChange: onChangeCardDateState('number')(setState, 'month'),
        },
        {
          type: 'number',
          placeholder: 'YY',
          minLength: 2,
          maxLength: 2,
          width: '60px',
          center: true,
          value: cardExpirationDate.year,
          onChange: onChangeCardDateState('number')(setState, 'year'),
        },
      ]}
    />
  );
};

export default CardExpirationDateInput;
