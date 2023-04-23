import { useRef } from 'react';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import * as Styled from './ExpiredDate.styles';

interface ExpiredDateProps {
  expiredDate: Record<number, string>;
  checkExpiredDate: (order: number, value: string) => boolean;
  validateDate: (
    order: number,
    refs: Record<number, React.RefObject<HTMLInputElement>>
  ) => void;
}

const ExpiredDate = ({
  expiredDate,
  checkExpiredDate,
  validateDate,
}: ExpiredDateProps) => {
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
    checkExpiredDate(currentOrder, e.target.value);
    validateDate(currentOrder, cardExpiredDateRefs);
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
          value={expiredDate[0]}
          order={0}
          placeholder="MM"
          required={true}
        />
        <Styled.Pargraph>/</Styled.Pargraph>
        <CardInput
          type="text"
          maxLength={2}
          ref={cardExpiredDateRefs[1]}
          onChange={handleCardInputChange}
          value={expiredDate[1]}
          order={1}
          placeholder="YY"
          required={true}
        />
      </Styled.Wrapper>
    </>
  );
};

export default ExpiredDate;
