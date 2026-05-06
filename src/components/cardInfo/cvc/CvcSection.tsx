import CardInfoHeader from '../cardInfoHeader/CardInfoHeader';
import FormField from '../formField/FormField';
import { Section, InfoInput, ErrorMessage } from '../CardInfo.styles';
import { useCvc } from './useCvc';
import { useCardForm } from '../../useCardForm';

interface Props {
  field: ReturnType<typeof useCardForm>['cvc'];
}

export default function CvcSection({ field }: Props) {
  const { value: cvc, set: setCvc } = field;
  const { error, handleChange } = useCvc();

  return (
    <Section>
      <CardInfoHeader title="CVC 번호를 입력해 주세요" description="" />
      <FormField label="CVC">
        <InfoInput
          placeholder="123"
          maxLength={3}
          value={cvc}
          onChange={(e) => {
            const updatedCvc = handleChange(e);
            if (updatedCvc !== null) setCvc(updatedCvc);
          }}
          inputMode="numeric"
        />
      </FormField>
      <ErrorMessage>{error}</ErrorMessage>
    </Section>
  );
}
