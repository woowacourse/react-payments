import { useContext } from 'react';
import InputGroup from '../../common/InputGroup';
import { CardInformationContext } from '../../../context/CardInformationContext';
import useAddCardForm from '../../../hooks/useAddCardForm';
import { SetState } from '../../../@types';

type CardCVCInputProps = {
  setState: SetState;
  insertRef: (element: HTMLElement | null) => void;
  moveFocus: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const CardCVCInput = ({ setState, insertRef, moveFocus }: CardCVCInputProps) => {
  const { cardInformation } = useContext(CardInformationContext);
  const { cardCVC } = cardInformation;
  const { onChangeState } = useAddCardForm();

  return (
    <InputGroup
      labelText="보안 코드(CVC/CVV)"
      autoMoveFocus={true}
      insertRef={insertRef}
      moveFocus={moveFocus}
      inputInfoList={[
        {
          type: 'password',
          minLength: 3,
          maxLength: 3,
          width: '110px',
          center: false,
          value: cardCVC,
          onChange: onChangeState('password')(setState),
        },
      ]}
    />
  );
};

export default CardCVCInput;
