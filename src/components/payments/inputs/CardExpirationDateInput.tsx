import { useContext } from 'react';
import InputGroup from '../../common/InputGroup';
import { CardInformationContext } from '../../../context/CardInformationContext';
import { InputCardInfo } from '../../../@types';

type CardExpirationDateInputProps = {
  insertRef: (element: HTMLElement | null) => void;
  onChangeCardDateState: (
    infoType: InputCardInfo,
    type: string,
    key: string,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardExpirationDateInput = ({
  insertRef,
  onChangeCardDateState,
}: CardExpirationDateInputProps) => {
  const { cardInformation } = useContext(CardInformationContext);
  const { cardExpirationDate } = cardInformation;

  return (
    <InputGroup
      labelText="만료일"
      autoMoveFocus={true}
      insertRef={insertRef}
      inputInfoList={[
        {
          type: 'number',
          placeholder: 'MM',
          minLength: 2,
          maxLength: 2,
          width: '60px',
          center: true,
          value: cardExpirationDate.month,
          onChange: onChangeCardDateState('cardExpirationDate', 'number', 'month'),
        },
        {
          type: 'number',
          placeholder: 'YY',
          minLength: 2,
          maxLength: 2,
          width: '60px',
          center: true,
          value: cardExpirationDate.year,
          onChange: onChangeCardDateState('cardExpirationDate', 'number', 'year'),
        },
      ]}
    />
  );
};

export default CardExpirationDateInput;
