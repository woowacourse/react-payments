import { ForwardedRef, forwardRef, RefObject } from 'react';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import * as Styled from './CardOwnerName.styles';

export interface CardOwnerNameProps {
  cardOwnerName: string;
  checkCardOwnerName: (value: string) => void;
}

const CardOwnerName = forwardRef(
  (
    { cardOwnerName, checkCardOwnerName }: CardOwnerNameProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const nameRef = ref as RefObject<HTMLInputElement>;

    const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;
      checkCardOwnerName(e.target.value);
    };

    return (
      <>
        <Styled.LabelContainer>
          <CardLabel labelText="카드 소유자 이름(선택)" />
          <CardLabel labelText={`${nameRef.current?.value.length || 0} / 30`} />
        </Styled.LabelContainer>
        <Styled.Wrapper>
          <CardInput
            type="text"
            maxLength={30}
            ref={nameRef}
            onChange={handleCardInputChange}
            value={cardOwnerName}
            placeholder="카드에 표시된 영어 이름을 입력하세요."
          />
        </Styled.Wrapper>
      </>
    );
  }
);

export default CardOwnerName;
