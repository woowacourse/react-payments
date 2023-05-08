import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useContext } from 'react';
import * as Styled from './CardExpiredDates.styles';
import { RefContext } from '../../contexts/RefProvider';
import { REF_INDEX } from '../../constants/refIndex';
import CardErrorLabel from '../@common/CardErrorLabel';
import { ExpiredDatesType } from '../../types/general';

interface ExpiredDateProps {
  expiredDates: ExpiredDatesType;
  errorMessage: string;
  isValidatedExpiredDates: (order: number, value: string) => boolean;
}

const CardExpiredDate = ({
  expiredDates,
  errorMessage,
  isValidatedExpiredDates,
}: ExpiredDateProps) => {
  const cardRefs = useContext(RefContext);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (
      !isValidatedExpiredDates(
        currentOrder - REF_INDEX.lastCardNumbersOrder,
        e.target.value
      )
    ) {
      return;
    }

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
          inputMode="numeric"
        />
        {expiredDates[0].length === 2 && <Styled.Paragraph>/</Styled.Paragraph>}
        <CardInput
          type="text"
          maxLength={2}
          ref={cardRefs[5]}
          onChange={handleCardInputChange}
          value={expiredDates[1]}
          order={5}
          placeholder="YY"
          required={true}
          inputMode="numeric"
        />
      </Styled.Wrapper>
      <CardErrorLabel errorMessage={errorMessage} />
    </>
  );
};

export default CardExpiredDate;
