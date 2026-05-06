import { type Dispatch, type SetStateAction } from 'react';
import CardInfoHeader from '../cardInfoHeader/CardInfoHeader';
import FormField from '../formField/FormField';
import { Section, InfoInput, ErrorMessage } from '../CardInfo.styles';
import { useExpireDate } from './useExpireDate';

interface Props {
  expireDate: string[];
  setExpireDate: Dispatch<SetStateAction<string[]>>;
}

export default function ExpireDateSection({
  expireDate,
  setExpireDate,
}: Props) {
  const { error, handleChange } = useExpireDate(expireDate);

  return (
    <Section>
      <CardInfoHeader
        title="카드 유효기간을 입력해 주세요"
        description="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <FormField label="유효기간">
        <InfoInput
          placeholder="MM"
          maxLength={2}
          value={expireDate[0]}
          onChange={(e) => {
            const updatedExpireDate = handleChange(e, 0);
            if (updatedExpireDate) setExpireDate(updatedExpireDate);
          }}
          inputMode="numeric"
        />
        <InfoInput
          placeholder="YY"
          maxLength={2}
          value={expireDate[1]}
          onChange={(e) => {
            const updatedExpireDate = handleChange(e, 1);
            if (updatedExpireDate) setExpireDate(updatedExpireDate);
          }}
          inputMode="numeric"
        />
      </FormField>
      <ErrorMessage>{error}</ErrorMessage>
    </Section>
  );
}
