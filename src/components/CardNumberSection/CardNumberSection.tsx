import styles from './CardNumberSection.module.css';
import { FieldGroup } from '../common/FieldGroup/FieldGroup';
import { CardNumber } from '../../types/card';
import { InputWrapper } from '../common/InputWrapper/InputWrapper';

type Props = {
  cardNumbers: CardNumber;
  handleCardNumberChange: (key: keyof CardNumber, value: string) => void;
  cardNumberError: string;
};

export default function CardNumberSection({ cardNumbers, handleCardNumberChange, cardNumberError }: Props) {
  const hasAnyInput = Object.values(cardNumbers).some((value) => value.length > 0);

  const isEachTouched = {
    first: cardNumbers.first.length > 0,
    second: cardNumbers.second.length > 0,
    third: cardNumbers.third.length > 0,
    fourth: cardNumbers.fourth.length > 0
  };

  const isEachValid = {
    first: !isEachTouched.first || (cardNumbers.first.length === 4 && /^[0-9]+$/.test(cardNumbers.first)),
    second: !isEachTouched.second || (cardNumbers.second.length === 4 && /^[0-9]+$/.test(cardNumbers.second)),
    third: !isEachTouched.third || (cardNumbers.third.length === 4 && /^[0-9]+$/.test(cardNumbers.third)),
    fourth: !isEachTouched.fourth || (cardNumbers.fourth.length === 4 && /^[0-9]+$/.test(cardNumbers.fourth))
  };

  const handleKeyChange = (key: keyof CardNumber, value: string) => {
    handleCardNumberChange(key, value);
  };

  return (
    <div className={styles.sectionContainer}>
      <FieldGroup.TitleWrapper>
        <FieldGroup.Title title="결제할 카드 번호를 입력해 주세요" />
        <FieldGroup.SubTitle title="본인 명의의 카드만 입력 가능합니다." />
      </FieldGroup.TitleWrapper>
      <div className={styles.FieldGroup}>
        <FieldGroup.Label text="카드번호" />
        <InputWrapper<keyof CardNumber>
          fields={[
            { key: 'first', value: cardNumbers.first },
            { key: 'second', value: cardNumbers.second },
            { key: 'third', value: cardNumbers.third },
            { key: 'fourth', value: cardNumbers.fourth }
          ]}
          onChange={handleKeyChange}
          valid={isEachValid}
          placeholders={{
            first: '1234',
            second: '1234',
            third: '1234',
            fourth: '1234'
          }}
          maxLength={4}
        />
        {hasAnyInput && cardNumberError && <FieldGroup.Error message={cardNumberError} />}
      </div>
    </div>
  );
}
