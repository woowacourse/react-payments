import { useContext } from 'react';
import InputGroup from '../../common/InputGroup';
import { CardInformationContext } from '../../../context/CardInformationContext';
import { InputCardInfo } from '../../../@types';

type CardCVCInputProps = {
  insertRef: (element: HTMLElement | null) => void;
  onChangeState: (
    infoType: InputCardInfo,
    type: string,
    key?: string,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardCVCInput = ({ insertRef, onChangeState }: CardCVCInputProps) => {
  const { cardInformation } = useContext(CardInformationContext);
  const { cardCVC } = cardInformation;

  return (
    <InputGroup
      labelText="보안 코드(CVC/CVV)"
      autoMoveFocus={true}
      insertRef={insertRef}
      inputInfoList={[
        {
          type: 'password',
          minLength: 3,
          maxLength: 3,
          width: '110px',
          center: false,
          value: cardCVC,
          onChange: onChangeState('cardCVC', 'password'),
        },
      ]}
    />
  );
};

export default CardCVCInput;
