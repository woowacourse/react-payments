import {
  Field,
  InfoInput,
  ErrorMessage,
  Title,
  Description,
  Label,
  InputContainer,
} from '../CardInfo.styles';
import { useExpireDateValidation } from './useExpireDateValidation';
import { useCardForm } from '../../useCardForm';

interface Props {
  field: ReturnType<typeof useCardForm>['expireDate'];
}
//유효기간을 적을수 있는 컴포넌트
export default function ExpireDateField({ field }: Props) {
  const { value: expireDate, set: setExpireDate } = field;
  const { error, validate } = useExpireDateValidation(expireDate);

  return (
    <Field>
      1<Title>카드 유효기간을 입력해 주세요</Title>
      <Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
      <Label>유효기간</Label>
      <InputContainer>
        <InfoInput
          placeholder="MM"
          maxLength={2}
          value={expireDate[0]}
          onChange={(e) => {
            const updatedExpireDate = validate(e, 0);
            if (updatedExpireDate) setExpireDate(updatedExpireDate);
          }}
          inputMode="numeric"
        />
        <InfoInput
          placeholder="YY"
          maxLength={2}
          value={expireDate[1]}
          onChange={(e) => {
            const updatedExpireDate = validate(e, 1);
            if (updatedExpireDate) setExpireDate(updatedExpireDate);
          }}
          inputMode="numeric"
        />
      </InputContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </Field>
  );
}
