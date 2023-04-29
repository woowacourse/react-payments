import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useRef } from 'react';
import * as Styled from './ExpiredDate.styles';

interface ExpiredDateProps {
  expiredDates: Array<string>;
  isSetExpiredDates: (order: number, value: string) => boolean;
}

const ExpiredDate = ({ expiredDates, isSetExpiredDates }: ExpiredDateProps) => {
  const cardExpiredDateRefs: Record<
    number,
    React.RefObject<HTMLInputElement>
  > = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (!isSetExpiredDates(currentOrder, e.target.value)) return;

    if (cardExpiredDateRefs[currentOrder].current?.value.length === 2) {
      if (currentOrder === 1) return;
      cardExpiredDateRefs[currentOrder + 1].current?.focus();
    }
  };

  return (
    <>
      <CardLabel labelText="만료일" />
      <Styled.Wrapper>
        <CardInput
          type="text"
          maxLength={2}
          ref={cardExpiredDateRefs[0]}
          onChange={handleCardInputChange}
          value={expiredDates[0]}
          order={0}
          placeholder="MM"
          required={true}
        />
        {cardExpiredDateRefs[0].current?.value.length === 2 && (
          <Styled.Pargraph>/</Styled.Pargraph>
        )}
        <CardInput
          type="text"
          maxLength={2}
          ref={cardExpiredDateRefs[1]}
          onChange={handleCardInputChange}
          value={expiredDates[1]}
          order={1}
          placeholder="YY"
          required={true}
        />
      </Styled.Wrapper>
    </>
  );
};

export default ExpiredDate;
