import { useContext, useState } from 'react';
import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import * as Styled from './CardOwnerName.styles';
import { RefContext } from '../../contexts/RefProvider';

interface CardOwnerNameProps {
  ownerName: string;
  isSetOwnerName: (value: string) => boolean;
}

const CardOwnerName = ({ ownerName, isSetOwnerName }: CardOwnerNameProps) => {
  const cardRefs = useContext(RefContext);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (!isSetOwnerName(e.target.value.toUpperCase())) {
      setErrorMessage(
        '카드 소유자명은 30자 이내의 대문자 영문으로만 입력해주세요.'
      );
      return;
    }

    setErrorMessage('');
  };

  return (
    <>
      <Styled.LabelWrapper>
        <CardLabel labelText="카드 소유자 이름(선택)" />
        <CardLabel
          labelText={`${cardRefs[6].current?.value.length || 0} / 30`}
        />
      </Styled.LabelWrapper>
      <Styled.Wrapper>
        <CardInput
          type="text"
          maxLength={30}
          ref={cardRefs[6]}
          order={6}
          onChange={handleCardInputChange}
          value={ownerName}
          placeholder="카드에 표시된 영어 이름을 입력하세요."
        />
      </Styled.Wrapper>
      <Styled.ErrorTextWrapper>{errorMessage}</Styled.ErrorTextWrapper>
    </>
  );
};

export default CardOwnerName;
