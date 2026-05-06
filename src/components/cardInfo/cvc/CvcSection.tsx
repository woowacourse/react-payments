import { type Dispatch, type SetStateAction } from 'react';
import CardInfoHeader from '../cardInfoHeader/CardInfoHeader';
import FormField from '../formField/FormField';
import { Section, InfoInput, ErrorMessage } from '../CardInfo.styles';
import { useCvc } from './useCvc';

interface Props {
  cvcNumber: string;
  setCvcNumber: Dispatch<SetStateAction<string>>;
}

export default function CvcSection({ cvcNumber, setCvcNumber }: Props) {
  const { error, handleChange } = useCvc();

  return (
    <Section>
      <CardInfoHeader title="CVC 번호를 입력해 주세요" description="" />
      <FormField label="CVC">
        <InfoInput
          placeholder="123"
          maxLength={3}
          value={cvcNumber}
          onChange={(e) => {
            const updatedCvc = handleChange(e);
            if (updatedCvc !== null) setCvcNumber(updatedCvc);
          }}
          inputMode="numeric"
        />
      </FormField>
      <ErrorMessage>{error}</ErrorMessage>
    </Section>
  );
}
