import { useContext } from 'react';
import InputGroup from '../../common/InputGroup';
import { CardInformationContext } from '../../../context/CardInformationContext';
import useAddCardForm from '../../../hooks/useAddCardForm';
import { SetState } from '../../../@types';

type CardOwnerInputProps = {
  setState: SetState;
  insertRef: (element: HTMLElement | null) => void;
};

const CardOwnerInput = ({ setState, insertRef }: CardOwnerInputProps) => {
  const { cardInformation } = useContext(CardInformationContext);
  const { cardOwner } = cardInformation;
  const { onChangeState } = useAddCardForm();

  return (
    <InputGroup
      labelText="카드 소유자 이름(선택)"
      autoMoveFocus={false}
      insertRef={insertRef}
      inputInfoList={[
        {
          type: 'text',
          placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
          minLength: 0,
          maxLength: 30,
          width: '100%',
          center: false,
          value: cardOwner,
          onChange: onChangeState('text')(setState),
        },
      ]}
    >
      <p>{cardOwner.length} / 30</p>
    </InputGroup>
  );
};

export default CardOwnerInput;
