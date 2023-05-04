import { useContext } from 'react';
import InputGroup from '../../common/InputGroup';
import { CardInformationContext } from '../../../context/CardInformationContext';
import { InputCardInfo } from '../../../@types';

type CardNumberInputProps = {
  insertRef: (element: HTMLElement | null) => void;
  onChangeState: (
    infoType: InputCardInfo,
    type: string,
    key?: string,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardNumberInput = ({ insertRef, onChangeState }: CardNumberInputProps) => {
  const { cardInformation } = useContext(CardInformationContext);
  const { cardNumbers } = cardInformation;

  return (
    <InputGroup
      labelText="카드 번호"
      autoMoveFocus={true}
      insertRef={insertRef}
      inputInfoList={[
        {
          type: 'number',
          minLength: 4,
          maxLength: 4,
          width: '3.75rem',
          center: true,
          value: cardNumbers.first,
          onChange: onChangeState('cardNumbers', 'number', 'first'),
        },
        {
          type: 'number',
          minLength: 4,
          maxLength: 4,
          width: '3.75rem',
          center: true,
          value: cardNumbers.second,
          onChange: onChangeState('cardNumbers', 'number', 'second'),
        },
        {
          type: 'password',
          minLength: 4,
          maxLength: 4,
          width: '3.75rem',
          center: true,
          value: cardNumbers.third,
          onChange: onChangeState('cardNumbers', 'password', 'third'),
        },
        {
          type: 'password',
          minLength: 4,
          maxLength: 4,
          width: '3.75rem',
          center: true,
          value: cardNumbers.fourth,
          onChange: onChangeState('cardNumbers', 'password', 'fourth'),
        },
      ]}
    />
  );
};

export default CardNumberInput;
