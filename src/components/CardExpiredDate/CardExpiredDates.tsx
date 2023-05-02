import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useContext } from 'react';
import * as Styled from './CardExpiredDates.styles';
import { RefContext } from '../../contexts/RefProvider';
import { REF_INDEX } from '../../constants/refIndex';

interface ExpiredDateProps {
  expiredDates: Array<string>;
  errorMessage: string;
  handleExpiredDates: (order: number, value: string) => void;
}

const CardExpiredDate = ({
  expiredDates,
  errorMessage,
  handleExpiredDates,
}: ExpiredDateProps) => {
  const cardRefs = useContext(RefContext);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    handleExpiredDates(
      currentOrder - REF_INDEX.lastCardNumbersOrder,
      e.target.value
    );
    focusNextInput(currentOrder);
  };

  const focusNextInput = (order: number) => {
    if (cardRefs[order].current?.value.length === 2) {
      cardRefs[order + 1].current?.focus();
    }
  };

  return (
    <>
      <CardLabel labelText="만료일" />
      <Styled.Wrapper>
        <CardInput
          type="text"
          maxLength={2}
          ref={cardRefs[4]}
          onChange={handleCardInputChange}
          value={expiredDates[0]}
          order={4}
          placeholder="MM"
          required={true}
        />
        {cardRefs[4].current?.value.length === 2 && (
          <Styled.Paragraph>/</Styled.Paragraph>
        )}
        <CardInput
          type="text"
          maxLength={2}
          ref={cardRefs[5]}
          onChange={handleCardInputChange}
          value={expiredDates[1]}
          order={5}
          placeholder="YY"
          required={true}
        />
      </Styled.Wrapper>
      <Styled.ErrorTextWrapper>{errorMessage}</Styled.ErrorTextWrapper>
    </>
  );
};

export default CardExpiredDate;
