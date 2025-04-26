import styles from './CardNumberSection.module.css';
import { InputSection } from '../InputSection/InputSection';
import Input from '../Input/Input';
import { CardNumberKey, CardNumberType } from '../../types';

type CardNumberSectionProps = {
  cardNumbers: CardNumberType;
  onCardNumbersChange: (field: keyof CardNumberType, value: string) => void;
  inputRefs: {
    first: React.RefObject<HTMLInputElement | null>;
    second: React.RefObject<HTMLInputElement | null>;
    third: React.RefObject<HTMLInputElement | null>;
    fourth: React.RefObject<HTMLInputElement | null>;
  };
  getCardNumberErrorMessage: (cardNumbers: CardNumberType) => string;
};

export default function CardNumberSection({ cardNumbers, onCardNumbersChange, inputRefs, getCardNumberErrorMessage }: CardNumberSectionProps) {
  return (
    <div className={styles.sectionContainer}>
      <InputSection.TitleWrapper>
        <InputSection.Title title="결제할 카드 번호를 입력해 주세요" />
        <InputSection.SubTitle title="본인 명의의 카드만 입력 가능합니다." />
      </InputSection.TitleWrapper>
      <div className={styles.inputSection}>
        <InputSection.Label text="카드번호" />
        <div className={styles.inputWrapper}>
          {(Object.keys(cardNumbers) as CardNumberKey[]).map((inputKey) => (
            <Input
              key={inputKey}
              value={cardNumbers[inputKey].value}
              isError={cardNumbers[inputKey].isError}
              placeholder={'1234'}
              onChange={(e) => {
                onCardNumbersChange(inputKey, e.target.value);
              }}
              ref={inputRefs[inputKey]}
              maxLength={4}
            />
          ))}
        </div>

        <InputSection.Error message={getCardNumberErrorMessage(cardNumbers)} />
      </div>
    </div>
  );
}
