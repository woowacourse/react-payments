import { useContext } from 'react';
import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import * as Styled from './CardOwnerName.styles';
import { RefContext } from '../../contexts/RefProvider';
import CardErrorLabel from '../@common/CardErrorLabel';

interface CardOwnerNameProps {
  cardOwnerName: string;
  errorMessage: string;
  isValidatedCardOwnerName: (value: string) => boolean;
}

const CardOwnerName = ({
  cardOwnerName,
  errorMessage,
  isValidatedCardOwnerName,
}: CardOwnerNameProps) => {
  const cardRefs = useContext(RefContext);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (!isValidatedCardOwnerName(e.target.value)) return;
  };

  return (
    <>
      <Styled.LabelWrapper>
        <CardLabel labelText="카드 소유자 이름" />
        <CardLabel labelText={`${cardOwnerName.length || 0} / 30`} />
      </Styled.LabelWrapper>
      <Styled.Wrapper>
        <CardInput
          type="text"
          maxLength={30}
          ref={cardRefs[6]}
          order={6}
          onChange={handleCardInputChange}
          value={cardOwnerName}
          placeholder="(선택) 카드에 표시된 영어 이름을 입력하세요."
          inputMode="text"
        />
      </Styled.Wrapper>
      <CardErrorLabel errorMessage={errorMessage} />
    </>
  );
};

export default CardOwnerName;
