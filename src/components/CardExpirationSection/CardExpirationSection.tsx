import { InputSection } from '../InputSection/InputSection';
import Input from '../Input/Input';
import { ExpirationKey, ExpirationType } from '../../types';

type CardExpirationSectionProps = {
  expiration: ExpirationType;
  expirationRef: { month: React.RefObject<HTMLInputElement | null>; year: React.RefObject<HTMLInputElement | null> };
  handleExpirationChange: (field: ExpirationKey, value: string) => void;
};
export default function CardExpirationSection({ expiration, expirationRef, handleExpirationChange }: CardExpirationSectionProps) {
  const isError = expiration.month.errorMessage || expiration.year.errorMessage;

  return (
    <div>
      <InputSection.TitleWrapper>
        <InputSection.Title title="카드 유효기간을 입력해 주세요" />
        <InputSection.SubTitle title="월/년도(MMYY)를 순서대로 입력해 주세요." />
      </InputSection.TitleWrapper>

      <div>
        <InputSection.Label text="유효기간" />

        <InputSection.InputWrapper>
          <Input
            pattern="[0-9]{2}"
            required
            autoFocus={expiration.month.value == '' && expiration.year.value == ''}
            value={expiration.month.value}
            placeholder="MM"
            isError={Boolean(expiration.month.errorMessage)}
            onChange={(e) => handleExpirationChange('month', e.target.value)}
            maxLength={2}
            ref={expirationRef.month}
          />
          <Input
            pattern="[0-9]{2}"
            required
            value={expiration.year.value}
            placeholder="YY"
            isError={Boolean(expiration.year.errorMessage)}
            onChange={(e) => handleExpirationChange('year', e.target.value)}
            maxLength={2}
            ref={expirationRef.year}
          />
        </InputSection.InputWrapper>

        {isError && <InputSection.Error message={expiration.month.errorMessage || expiration.year.errorMessage} />}
      </div>
    </div>
  );
}
