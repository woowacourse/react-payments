import { useRef } from 'react';
import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import * as Styled from './CardOwnerName.styles';

interface CardOwnerNameProps {
  ownerName: string;
  isSetOwnerName: (value: string) => boolean;
}

const CardOwnerName = ({ ownerName, isSetOwnerName }: CardOwnerNameProps) => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (!isSetOwnerName(e.target.value.toUpperCase())) return;
  };

  return (
    <>
      <Styled.LabelWrapper>
        <CardLabel labelText="카드 소유자 이름(선택)" />
        <CardLabel labelText={`${nameRef.current?.value.length || 0} / 30`} />
      </Styled.LabelWrapper>
      <Styled.Wrapper>
        <CardInput
          type="text"
          maxLength={30}
          ref={nameRef}
          onChange={handleCardInputChange}
          value={ownerName}
          placeholder="카드에 표시된 영어 이름을 입력하세요."
        />
      </Styled.Wrapper>
    </>
  );
};

export default CardOwnerName;
