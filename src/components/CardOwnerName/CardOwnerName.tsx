import { useContext } from 'react';
import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import * as Styled from './CardOwnerName.styles';
import { RefContext } from '../../contexts/RefProvider';

interface CardOwnerNameProps {
  cardOwnerName: string;
  errorMessage: string;
  handleCardOwnerName: (value: string) => void;
}

const CardOwnerName = ({
  cardOwnerName,
  errorMessage,
  handleCardOwnerName,
}: CardOwnerNameProps) => {
  const cardRefs = useContext(RefContext);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    handleCardOwnerName(e.target.value);
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
          value={cardOwnerName}
          placeholder="카드에 표시된 영어 이름을 입력하세요."
        />
      </Styled.Wrapper>
      <Styled.ErrorTextWrapper>{errorMessage}</Styled.ErrorTextWrapper>
    </>
  );
};

export default CardOwnerName;
