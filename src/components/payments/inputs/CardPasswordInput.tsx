import { useContext } from 'react';
import InputGroup from '../../common/InputGroup';
import { CardInformationContext } from '../../../context/CardInformationContext';
import { InputCardInfo } from '../../../@types';

type CardPasswordInputProps = {
  insertRef: (element: HTMLElement | null) => void;
  onChangeState: (
    infoType: InputCardInfo,
    type: string,
    key?: string,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardPasswordInput = ({ insertRef, onChangeState }: CardPasswordInputProps) => {
  const { cardInformation } = useContext(CardInformationContext);
  const { cardPWD } = cardInformation;

  return (
    <InputGroup
      labelText="카드 비밀번호"
      autoMoveFocus={true}
      insertRef={insertRef}
      inputInfoList={[
        {
          type: 'password',
          minLength: 1,
          maxLength: 1,
          width: '40px',
          center: true,
          value: cardPWD.first,
          onChange: onChangeState('cardPWD', 'password', 'first'),
        },
        {
          type: 'password',
          minLength: 1,
          maxLength: 1,
          width: '40px',
          center: true,
          value: cardPWD.second,
          onChange: onChangeState('cardPWD', 'password', 'second'),
        },
      ]}
    />
  );
};

export default CardPasswordInput;
